// components/withAdminAuth.tsx

'use client';
import { getUser } from '@/utils/auth';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const WithAdminAuth = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = getUser();
    if (!user || user.scope !== 'ADMIN') {
      if (pathname.includes('/admin')) {
        router.replace('/vi');
      }
    }
  }, [pathname]);
  return <></>;
};

export default WithAdminAuth;
