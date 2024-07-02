// utils/withAdminAuth.tsx
'use client'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getUser } from './auth';

const withAdminAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const user = getUser();
      if (!user || user.scope !== 'ADMIN') {
        // Chuyển hướng đến trang không có quyền truy cập hoặc trang đăng nhập
        router.replace('/unauthorized');
      }
    }, []);

    return getUser()?.scope === 'ADMIN' ? <WrappedComponent {...props} /> : null;
  };
};

export default withAdminAuth;
