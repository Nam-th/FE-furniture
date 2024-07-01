import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
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

      {/* Amado Nav */}
      <Navbar />

      {/* Button Group */}
      <div className="amado-btn-group mt-30 mb-100">
        <Link href="#" className="button button-primary">
          Sign in
        </Link>
        <Link href="#" className="button button-secondary mt-3">
          Sign up
        </Link>
        <Link
          href="/vi/admin/manageProduct"
          className="button button-primary mt-3 w-[117px]"
        >
          Admin
        </Link>
      </div>
      {/* Cart Menu */}
      <div className="cart-fav-search mb-100">
        <Link href="cart.html" className="cart-nav">
          {' '}
          Cart <span>(0)</span>
        </Link>
        <Link href="#" className="fav-nav">
          Favourite
        </Link>
        <Link href="#" className="search-nav">
          Search
        </Link>
      </div>
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
