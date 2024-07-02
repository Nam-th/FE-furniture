'use client';
import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { getUser, isAdmin, isAuthenticated } from '@/utils/auth';
import { Avatar } from 'antd';

import { LogoutOutlined } from '@ant-design/icons';
import LogoutButton from '../LogoutButton/LogoutButton';

const Header = () => {
  const isLoggedIn = isAuthenticated();
  const user = getUser();
  
  return (
    <header className="header-area clearfix">
      <div className="nav-close">
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      {/* Logo */}
      <div className="logo scale-[1.44]">
        <Link href="index.html">
          <Image
            src="/images/core-img/logo.png"
            alt="Logo"
            width={160}
            height={50}
          />
        </Link>
      </div>

      {isLoggedIn && (
        <div className="pb-2 text-end relative right-6">
          
          <div className=" py-3 flex justify-start items-center">
            <Avatar
              className="mb-1 ml-3 mr-3 font-bold text-xl w-10 h-10"
              style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
            >
              {user?.username.toUpperCase().charAt(0)}
            </Avatar>
            <span className="font-bold capitalize text-red-700">Hello, {user?.username}</span>
            
          </div>
        </div>
      )}

      {/* Amado Nav */}
      <Navbar />
      
    
      {/* Button Group */}
      {!isLoggedIn ? (
        <div className="amado-btn-group mt-30 mb-100">
          <a href="/vi/sign-in" className="button button-primary">
            Sign in
          </a>
          <a href="/vi/sign-up" className="button button-secondary mt-3">
            Sign up
          </a>
        </div>
      ): (
        <LogoutButton/>
      )}

      {/* Social Button */}
      <div className="social-info d-flex justify-content-between">
        <Link href="#">
          <i className="fa fa-pinterest" aria-hidden="true"></i>
        </Link>
        <Link href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
        <Link href="#">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
