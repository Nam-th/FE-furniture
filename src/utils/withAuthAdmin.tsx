// components/withAdminAuth.tsx
'use client'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getUser } from '../utils/auth';

const withAdminAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAdminAuth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const user = getUser();
      if (!user || user.scope !== 'ADMIN') {
        router.replace('/not-authorized');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAdminAuth;
};

export default withAdminAuth;
