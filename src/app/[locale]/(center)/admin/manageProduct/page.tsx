import productApiRequest from '@/apiRequest/product';
import React from 'react';

import PaginationComponent from '@/components/Pagination/Pagination';
import Table from '@/components/Table/product.table';
import AddProductDialog from '@/components/Dialog/AddProductDialog';

export default async function ManageProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams['page']?.toString() ?? '1'; // Trang thứ bao nhiêu, mặc định là 1
  const size = searchParams['size']?.toString() ?? '5'; // Số sản phẩm hiển thị trên 1 trang
  const sortBy = searchParams['sort_by']?.toString() ?? 'id'; //Sắp xếp theo thuộc tính, vd: sắp xếp theo 'id'
  const sortOrder = searchParams['sort_order']?.toString() ?? 'asc'; // Sắp xếp tăng dần | giảm dần

  const { payload }: any = await productApiRequest.getList(
    page,
    size,
    sortBy,
    sortOrder,
  );

  console.log(payload);
  const products = payload.data.items;
  const totalPage = payload.data.totalPages

  return (
    <div>
      <AddProductDialog/>
     <Table data = {products}/>
     <div className='py-3'></div>
      <PaginationComponent totalPage={totalPage} size={size} />
    </div>
  );
}
