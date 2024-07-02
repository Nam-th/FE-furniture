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
              href="/vi/admin/manageProduct?page=1&size=5&sort_by=id&order_by=desc"
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
              <a className='!font-semibold' href="/vi/cart">Cart</a>
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
