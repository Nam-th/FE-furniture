
import WithAdminAuth from '@/components/withAdminAuth/withAdminAuth';
import React from 'react';

const AdminPage = () => {
 
  return <>
  <WithAdminAuth/>
   <div>Admin</div>;
  </>
  
}

export default (AdminPage);