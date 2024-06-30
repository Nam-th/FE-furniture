'use client';
import React, { useRef, useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useToast } from '@/components/ui/use-toast';
import {
  CreateProductBody,
  CreateProductBodyType,
} from '@/schema/product.schema';
import CategorySelection from '../Selection/CategoriesSelection';
import productApiRequest from '@/apiRequest/product';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function AddProductForm() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<CreateProductBodyType>({
    resolver: zodResolver(CreateProductBody),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      stockQuantity: 0,
      sold: 0,
      isAvailable: true,
      isBestSeller: false,
      isRemoved: false,
      categoryId: 1,
      imageUrl: '',
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: CreateProductBodyType) {
    try {
      const formData = new FormData();
      formData.append('file', file as Blob);
      const uploadImage = await fetch('http://localhost:8080/api/v1/uploads', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
        headers: {
          'Vary': 'Access-Control-Request-Method'
        }
      });
      if (!uploadImage.ok) {
        throw new Error('Lỗi up hình');
      }
      // const uploadImageResult = await productApiRequest.uploadImage(formData);
      //  const image = uploadImageResult.payload.data
      //  const result = await productApiRequest.create({
      //      ...values,
      //      imageUrl: image
      //    })

      //  alert(result.payload.message)
      router.push('/vi/admin/manageProduct');
      router.refresh();
    } catch (error: any) {
      alert(error);
    }
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-h-[70vh] space-y-8 overflow-y-auto pr-3"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price & Quantity */}
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Price..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stockQuantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Quantity..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Category */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <CategorySelection name={field.name} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Image */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFile(file);
                        field.onChange('http://localhost:3000/' + file.name);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {file && (
            <div>
              <Image
                src={URL.createObjectURL(file)}
                width={128}
                height={128}
                alt="preview"
                className="h-32 w-32 object-cover"
              />
              <Button
                type="button"
                variant={'destructive'}
                size={'sm'}
                onClick={() => {
                  setFile(null);
                  form.setValue('imageUrl', '');
                  if (inputRef.current) {
                    inputRef.current.value = '';
                  }
                }}
              >
                Delete
              </Button>
            </div>
          )}
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </>
  );
}
