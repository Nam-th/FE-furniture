'use client';
import React, { useEffect, useRef, useState } from 'react';
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
  ProductResType,
  UpdateProductBodyType,
} from '@/schema/product.schema';
import CategorySelection from '../Selection/CategoriesSelection';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Product = ProductResType['data'];

export default function UpdateProductForm({ product }: { product: Product }) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [access_token, setAccessToken] = useState<string | null>(null);
  const router = useRouter();
  const form = useForm<CreateProductBodyType>({
    resolver: zodResolver(CreateProductBody),
    defaultValues: {
      name: product?.name ?? '',
      description: product?.description ?? '',
      price: product?.price ?? 0,
      quantity: product?.quantity ?? 0,
      isAvailable: product?.isAvailable ?? true,
      isBestSeller: product?.isBestSeller ?? false,
      isRemoved: product?.isRemoved ?? false,
      categoryId: product?.categoryId ?? 1,
      imageUrl: product?.thumbnail ?? '',
    },
  });
  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'));
  }, []);
  
  const imageUrl = form.watch('imageUrl');

  // 2. Define a submit handler.
  async function onSubmit(values: CreateProductBodyType) {
    let image = imageUrl;
    const idUpdate: string = product.id.toString();
    console.log('access_token', access_token);
    try {
      const formData = new FormData();
      formData.append('image', file as Blob);
      console.log('check FormData >>', formData);
      const uploadImageRes = await fetch(
        'http://localhost:8080/api/v1/uploads',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
        },
      );
      if (!uploadImageRes.ok) {
        throw new Error(await uploadImageRes.json());
      }
      const uploadResult = await uploadImageRes.json();

      image = uploadResult.data;

      const updateData = {
        ...values,
        thumbnail: image,
      };
      const updateProductResponse = await fetch(`http://localhost:8080/api/v1/products/${idUpdate}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
          body: JSON.stringify(updateData),
        }
      );
      if (!updateProductResponse.ok) {
        const errorResponse = await updateProductResponse.json();
        throw new Error(errorResponse.message || 'Lỗi cập nhật sản phẩm');
      }

      // router.push('/vi/admin/manageProduct');
      // router.refresh();
    } catch (error: any) {
      alert(error);
      console.log(error)
    } 
  }

  return (
    <>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pr-3">
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
              name="quantity"
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
          {/* {(file || imageUrl) && (
            <div>
              <Image
                src={file ? URL.createObjectURL(file) : imageUrl}
                width={128}
                height={128}
                alt="preview"
                className="h-32 w-32 object-cover"
                priority={true}
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
          )} */}
          <Button type="submit">
            Save changes
          </Button>
        </form>
      </Form>
    </>
  );
}
