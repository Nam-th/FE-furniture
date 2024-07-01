'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface IPropsPaginate {
  totalPage: string;
  size: string;
}
export default function PaginationComponent(props: IPropsPaginate) {
  const { totalPage, size } = props;

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? '1');

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={(currentPage > 1)? `?page=${currentPage - 1}&size=${size}` : '#'}  />
        </PaginationItem>

        {Array.from({ length: Number(totalPage) }).map((_, index) => (
          <PaginationItem key={index}>
            {index + 1 === currentPage ? (
              <PaginationLink isActive href="#">
                {index + 1}
              </PaginationLink>
            ) : (
              <PaginationLink href={`?page=${index + 1}&size=${size}`}>
                {index + 1}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext href={(currentPage < Number(totalPage)) ? `?page=${currentPage + 1}&size=${size}` : '#'} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
// 'use client';
// import React, { use, useState } from 'react';
// import type { PaginationProps } from 'antd';
// import { Pagination } from 'antd';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// const itemRender: PaginationProps['itemRender'] = (
//   _,
//   type,
//   originalElement,
// ) => {
//   if (type === 'prev') {
//     return <a>Prev</a>;
//   }
//   if (type === 'next') {
//     return <a>Next</a>;
//   }
//   return originalElement;
// };

// const PaginationComponent: React.FC = () => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const page = Number(searchParams.get('page') ?? '1');

//   const [current, setCurrent] = useState<number>(1);

//   const onChange = (page: number) => {
//     setCurrent(page);
//     const params = new URLSearchParams(searchParams);
//     params.set('page', current.toString());
//     replace(`${pathname}?${params.toString()}`);

//   };
//   return (
//     <Pagination
//       total={10}
//       defaultPageSize={3}
//       itemRender={itemRender}
//       current={current}
//       onChange={onChange}
//     />
//   );
// };

// export default PaginationComponent;
