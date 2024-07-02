'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface ICartItem {
     productId: number,
     productName: string,
     productPrice: number,
     quantity: number,
     thumbnail?: string,
}
const CartItem: React.FC<ICartItem> = ({ productId, productName, productPrice, quantity, thumbnail }) => {
     const [value, setValue] = useState<number>(quantity);
     const router = useRouter()
  const decreaseQuantity = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseQuantity = () => {
    if (value < 100) {
      setValue(value + 1);
    }
  };
  const onClick = () => {
     router.push(`/vi/products/${productId}`)
  }
  return (
    <>
      <tr onClick={onClick}>
        <td className="cart_product_img">
          <Image src={thumbnail ?? '/images/core-img/not_found_image.jpg'} alt='name' width={1000} height={1000} className='w-36 h-[auto]'/>
        </td>
        <td className="cart_product_desc">
          <h5>{productName}</h5>
        </td>
        <td className="price">
          <span>${productPrice}</span>
        </td>
        <td className="qty">
          <div className="qty-btn d-flex scale-75 translate-x-[-24px]">
            
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
        value={value}
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
        </td>
      </tr>
    </>
  );
}

export default CartItem