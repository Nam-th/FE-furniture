'use client';
import { isAdmin, isAuthenticated } from '@/utils/auth';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const isAdminRole = isAdmin();
  const isLoggedIn = isAuthenticated();
  return (
    <nav className="amado-nav">
      <ul>
        <li>
          <Link className='!font-semibold' href="/vi">Home</Link>
        </li>
        {isAdminRole && (
          <li>
            <Link
              href="/vi/admin/manageProduct"
              className="!italic !font-semibold"
            >
              Admin Page
            </Link>
          </li>
        )}
        <li>
          <Link className='!font-semibold' href="/vi/products">Product</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link className='!font-semibold' href="/vi/cart">Cart</Link>
            </li>
            <li>
              <Link className='!font-semibold' href="#" >
                Favourite
              </Link>
            </li>
          </>
        )}

        <li>
          <Link className='!font-semibold' href="#">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
