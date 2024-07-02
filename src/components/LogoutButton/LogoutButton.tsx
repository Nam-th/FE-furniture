'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LogoutButton() {
     const router = useRouter();
     const handleLogout = () => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
      
          // Thực hiện các bước khác nếu cần thiết, ví dụ: chuyển hướng đến trang đăng nhập
         router.push('/vi/')
        };
  return (
    <button onClick={handleLogout} className='button button-secondary'>Logout</button>
  )
}
