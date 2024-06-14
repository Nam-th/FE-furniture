import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header-area clearfix">
      <div className="nav-close">
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      {/* Logo */}
      <div className="logo">
        <a href="index.html">
          <Image
            src="/images/core-img/logo.png"
            alt="Logo"
            width={160}
            height={50}
          />
        </a>
      </div>

      {/* Amado Nav */}
      <Navbar />

      {/* Button Group */}
      <div className="amado-btn-group mt-30 mb-100">
        <a href="#" className="button button-primary">
          Sign in
        </a>
        <a href="#" className="button button-secondary mt-3">
          Sign up
        </a>
      </div>
      {/* Cart Menu */}
      <div className="cart-fav-search mb-100">
        <a href="cart.html" className="cart-nav">
          {' '}
          Cart <span>(0)</span>
        </a>
        <a href="#" className="fav-nav">
          Favourite
        </a>
        <a href="#" className="search-nav">
          Search
        </a>
      </div>
      {/* Social Button */}
      <div className="social-info d-flex justify-content-between">
        <a href="#">
          <i className="fa fa-pinterest" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
