import productApiRequest from '@/apiRequest/product';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import PaginationComponent from '@/components/Pagination/Pagination';
import Table from '@/components/Table/product.table';

export default async function ManageProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams['page']?.toString() ?? '1'; // Trang thứ bao nhiêu, mặc định là 1
  const size = searchParams['size']?.toString() ?? '5'; // Số sản phẩm hiển thị trên 1 trang
  const sortBy = searchParams['sort_by']?.toString() ?? 'id'; //Sắp xếp theo thuộc tính, vd: sắp xếp theo 'id'
  const sortOrder = searchParams['sort_order']?.toString() ?? 'asc'; // Sắp xếp tăng dần | giảm dần

  // Lấy từ item [start] tới [end] trên 1 trang dựa theo index của item trong danh sách
  //   const start = (Number(page) - 1) * Number(size); // 2 sp trên 1 trang => trang 1 lấy từ item[0] -> ...;; trang 2 lấy từ item[2] -> ...
  //   const end = start + Number(size)

  // gọi API getList products
  // products/pagination?page=${page}&size=${size}&sort_by=${sortBy}&sort_order=${sortOrder}`
  const { payload }: any = await productApiRequest.getList(
    page,
    size,
    sortBy,
    sortOrder,
  );
  //   console.log(payload);
  const products = payload.data.items;
  console.log(payload.data);
  const totalPage = payload.data.totalPages
  return (
    <div>
      
     <Table data = {products}/>
     <div className='py-3'></div>
      <PaginationComponent totalPage={totalPage} size={size} />
    </div>
  );
}
