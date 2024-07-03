'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Spin, message } from 'antd';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export default function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        {
          email: values.email,
          password: values.password,
        },
      );

      const { access_token, refresh_token, username } = response.data.data;
      console.log(response.data.data);
      // Lưu trữ token vào localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Decode JWT
      const decoded = jwtDecode(access_token);
      const userData = {
        ...decoded,
        username,
      };
      // Lưu trữ thông tin người dùng (bao gồm role) vào localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      messageApi.open({
        type: 'success',
        content: 'Sign in successfully',
      });
      // // Chuyển hướng tới trang chính
      router.push('/');
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {contextHolder}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="btn button button-primary ml-0 w-full"
          >
            {loading ? <Spin /> : 'Sign in'}
          </button>
        </form>
      </Form>
    </>
  );
}
