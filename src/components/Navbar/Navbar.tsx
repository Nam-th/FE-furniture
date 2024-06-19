import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="amado-nav">
      <ul>
        <li>
          <Link href="/vi">Home</Link>
        </li>
        <li>
          <Link href="/vi/shop">Shop</Link>
        </li>
        <li>
          <Link href="/vi/products">Product</Link>
        </li>
        <li>
          <Link href="/vi/cart">Cart</Link>
        </li>
        <li>
          <Link href="/vi/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
