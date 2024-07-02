'use client';
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  thumbnail?: string;
}
export default function CartTable() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCartItems = async () => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        setIsLoading(false);
        router.push('/vi/sign-in');
        alert('User is not authenticated');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/api/v1/carts/pagination', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (response.status === 200) {
          setCartItems(response.data.data.items);
        } else {
          alert('Failed to fetch cart items');
        }
      } catch (error) {
        console.error('There was an error fetching the cart items!', error);
        alert('There was an error fetching the cart items!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  //   Sekeleton when load data
  if (isLoading) {
    return (
      <>
        <div className="flex items-center space-x-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="cart-table clearfix">
      <table className="table-responsive table">
        <thead>
          <tr>
            <th style={{ background: '#f5f7fa' }}></th>
            <th style={{ background: '#f5f7fa' }}>Name</th>
            <th style={{ background: '#f5f7fa' }}>Price</th>
            <th style={{ background: '#f5f7fa' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: CartItem) => (
            <CartItem
              key={item.productId}
              productId={item.productId}
              productName={item.productName}
              quantity={item.quantity}
              productPrice={item.productPrice}
              thumbnail={item.thumbnail}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
