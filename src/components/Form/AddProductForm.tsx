'use client';
import React, { useRef, useState } from 'react';
import { Spin, message } from 'antd';
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

import {
  CreateProductBody,
  CreateProductBodyType,
  ProductResType,
  UpdateProductBodyType,
} from '@/schema/product.schema';
import CategorySelection from '../Selection/CategoriesSelection';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type ProductDto = ProductResType['data'];


export default function AddProductForm({product} : {product? : ProductDto}) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage();
  const access_token = localStorage.getItem('access_token');
  const router = useRouter();
  const form = useForm<CreateProductBodyType>({
    resolver: zodResolver(CreateProductBody),
    defaultValues: {
      name: product?.name ?? '',
      description: product?.description ?? '',
      price: product?.price ?? 0,
      quantity: product?.quantity ?? 0,
      sold: product?.sold ?? 0,
      isAvailable: product?.isAvailable ?? true,
      isBestSeller: product?.isBestSeller ?? false,
      isRemoved: product?.isRemoved ?? false,
      categoryId: product?.categoryId ?? 1,
      imageUrl: product?.thumbnail ?? '',
    },
  });
  const imageUrl = form.watch('imageUrl');

  const createProduct = async (values: CreateProductBodyType) => {
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('image', file as Blob);
      console.log("check FormData >>",formData);
      const uploadImageRes = await fetch('http://localhost:8080/api/v1/uploads', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${access_token}`
        },
        cache: 'no-store'
      });
      if (!uploadImageRes.ok) {
        throw new Error(await uploadImageRes.json());
      }
      const uploadResult = await uploadImageRes.json();
      
      const image = uploadResult.data
      
      const productPayload = {
        ...values,
        thumbnail: image
      }
      const createProductResponse = await fetch('http://localhost:8080/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
        body: JSON.stringify(productPayload),
        cache: 'no-store'
      });
      if (!createProductResponse.ok) {
        const errorResponse = await createProductResponse.json();
        throw new Error(errorResponse.message || 'Lỗi tạo sản phẩm');
      }
      messageApi.open({
        type: 'success',
        content: 'Create the product successfully',
      });
      router.push('/vi/admin/manageProduct');
      router.refresh();
    } catch (error: any) {
      alert(error);
    } finally {
      setLoading(false)
    }
  }
  const updateProduct = async (_values: UpdateProductBodyType) => {
    if(!product) return
    const id = String(product.id)
    let values=_values;
    let image = imageUrl;
    try {
      setLoading(true)
      if(file) {
        const formData = new FormData();
        formData.append('image', file as Blob);
        console.log("check FormData >>",formData);
        const uploadImageRes = await fetch('http://localhost:8080/api/v1/uploads', {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${access_token}`
          },
          cache: 'no-store'
        });
        if (!uploadImageRes.ok) {
          throw new Error(await uploadImageRes.json());
        }
        const uploadResult = await uploadImageRes.json();
        
        image = uploadResult.data
      }
      
      const productPayload = {
        ...values,
        thumbnail: image
      }
      const createProductResponse = await fetch(`http://localhost:8080/api/v1/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
        body: JSON.stringify(productPayload),
        cache: 'no-store'
      });
      if (!createProductResponse.ok) {
        const errorResponse = await createProductResponse.json();
        throw new Error(errorResponse.message || 'Lỗi tạo sản phẩm');
      }
      messageApi.open({
        type: 'success',
        content: 'Update the product successfully',
      });
      router.push('/vi/admin/manageProduct');
      router.refresh();
    } catch (error: any) {
      alert(error);
    } finally {
      setLoading(false)
    }
  }
  // 2. Define a submit handler.
  const onSubmit = async (values: CreateProductBodyType) => {
    if (loading) return
    if(product) {
      await updateProduct(values)
    }
    else {
      await createProduct(values)
    }
  }

  let frmClass = 'max-h-[70vh] space-y-8 overflow-y-auto pr-3'
  if(product) {frmClass = 'max-h-[70vh] space-y-8 pr-3'}
  return (
    <>
      {contextHolder}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={frmClass}
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
          {(file || imageUrl) && (
            <div>
              <Image
                src={file ? URL.createObjectURL(file) : imageUrl}
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
          <Button type="submit" className='w-full'>
            {!loading ? 'Save' : <Spin/>}
          </Button>
        </form>
      </Form>
    </>
  );
}
