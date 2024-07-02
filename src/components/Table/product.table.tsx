import Image from 'next/image';
import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProductType } from '@/schema/product.schema';
import Link from 'next/link';

interface IProductProps {
  id: number;
  thumbnail?: string ;
  name: string;
  stockQuantity?: number;
  price?: number;
  sold?: number;
  isAvailable?: boolean;
  isBestSeller?: boolean;
  categoryId: number;
}
const ProductItem: React.FC<IProductProps> = ({
  id,
  thumbnail,
  name,
  stockQuantity,
  price,
  sold,
  isAvailable,
  isBestSeller,
  categoryId,
}) => {
  
  return (
    <>
      <tr className='bg-white hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
        <td className="p-4">
          <Image
            src={thumbnail || '/images/core-img/not_found_image.jpg'}
            width={100}
            height={100}
            className="border-1 max-h-full w-16 max-w-full rounded-lg border-solid border-gray-700 md:w-32"
            alt={name}
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {name}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {stockQuantity}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {price ? `$${price}` : "Not set"}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {sold ? sold : 0}
        </td>
        <td className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
          {isAvailable ? (
            <div className="ml-4 h-3 w-3 rounded-full bg-green-600"></div>
          ) : (
            <div className="ml-4 h-3 w-3 rounded-full bg-red-600"></div>
          )}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {categoryId}
        </td>
        <td className="px-6 py-4">
          <Link
            href={`/vi/admin/manageProduct/update/${id}`}
            className="mr-4 text-2xl text-blue-600 hover:underline dark:text-blue-400"
          >
            <EditOutlined />
          </Link>
          <Link
            href="#"
            className="text-2xl text-red-600 hover:underline dark:text-red-500"
          >
            <DeleteOutlined />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
