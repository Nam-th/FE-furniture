'use client';
import InputNumber from '@/components/InputNumber';
import axios from 'axios';
import React, { useState } from 'react';
import { message } from 'antd';

interface IAddToCart {
  productId: number;
}
const AddToCart: React.FC<IAddToCart> = ({ productId }) => {
  
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const decreaseQuantity = () => {
     if (quantity > 1) {
       setQuantity(quantity - 1);
     }
   };
 
   const increaseQuantity = () => {
     if (quantity < 100) {
       setQuantity(quantity + 1);
     }
   };

  // Handler Add to Cart with API
  async function addToCart(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true)
    try {
     const access_token = localStorage.getItem('access_token');
     const response = await axios.post(
       'http://localhost:8080/api/v1/carts',
       {
         productId,
         quantity,
       },
       {
         headers: {
           Authorization: `Bearer ${access_token}`,
         },
       }
     );

     console.log('Added to cart:', response.data.data);
     // Handle success, e.g., show a success message or redirect
   } catch (error: any) {
     console.error('Error adding to cart:', error);
     
   } finally {
     setLoading(false);
   }
  }
  return (
    <>
      <form onSubmit={addToCart} className="cart clearfix" method="post">
        <div className="cart-btn d-flex mb-50">
          <div className="quantity">
          <div className="flex items-center">
      <button
        onClick={decreaseQuantity}
        type="button"
        className="ml-2 h-[40px] rounded-md border border-gray-400 px-3 text-2xl"
      >
        -
      </button>
      <input
        type="text"
        className="mx-2 h-[40px] w-14 rounded-md border border-gray-300 bg-white text-center outline-none"
        value={quantity}
        readOnly
        name="quantity"
      />
      <button
        onClick={increaseQuantity}
        type="button"
        className="h-[40px] rounded-md border border-gray-400 px-3 text-2xl leading-[37px]"
      >
        +
      </button>
    </div>
          </div>
        </div>

        <button
          type="submit"
          name="addtocart"
          className="button button-primary"
        >
          {loading ? 'Adding...' : 'Add to cart'}
        </button>
      </form>
    </>
  );
};

export default AddToCart;
