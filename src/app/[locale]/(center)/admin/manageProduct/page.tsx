import React from 'react';

import PaginationComponent from '@/components/Pagination/Pagination';
import AddProductDialog from '@/components/Dialog/AddProductDialog';
import axios from 'axios';
import ProductItem from '@/components/Table/product.table';

export default async function ManageProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams['page']?.toString() ?? '1'; // Trang thứ bao nhiêu, mặc định là 1
  const size = searchParams['size']?.toString() ?? '5'; // Số sản phẩm hiển thị trên 1 trang
  const sortBy = searchParams['sort_by']?.toString() ?? 'id'; //Sắp xếp theo thuộc tính, vd: sắp xếp theo 'id'
  const sortOrder = searchParams['sort_order']?.toString() ?? 'asc'; // Sắp xếp tăng dần | giảm dần
  const response = await axios.get(
    `http://localhost:8080/api/v1/products/pagination?page=${page}&size=${size}&sort_by=id&sort_order=desc`,
  );
  const products = response.data.data.items;
  const totalPage = response.data.data.totalPages;
  console.log(response);
  return (
    <div>
      <AddProductDialog />
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3">
                  <span className="sr-only"></span>
                </th>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>

                <th scope="col" className="px-6 py-3">
                  Sold
                </th>
                <th scope="col" className="px-6 py-3">
                  Is Available
                </th>
               
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <>
                  {!product?.isRemoved && (
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      thumbnail={product?.thumbnail}
                      price={product?.price}
                      stockQuantity={product?.quantity}
                      categoryId={product?.categoryId}
                      isAvailable={product?.isAvailable}
                      isBestSeller={product?.isBestSeller}
                      sold={product?.sold}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-3"></div>
      <PaginationComponent totalPage={totalPage} size={size} />
    </div>
  );
}
