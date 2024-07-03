'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function CartSummary() {
  const total = localStorage.getItem('total');
  const router = useRouter();
  const handleCheckout = () => {
    router.push('/vi/checkout');
  };
  return (
    <section className="cart-summary">
      <h5 className="font-semibold">Cart Total</h5>
      <ul className="summary-table">
        <li>
          <span>subtotal:</span> <span>{total}</span>
        </li>
        <li>
          <span>delivery:</span> <span>Free</span>
        </li>
        <li>
          <span>total:</span> <span>{total}</span>
        </li>
      </ul>
      <div className="cart-btn mt-100">
        <a
          className="btn button button-primary w-100 m-0"
          onClick={handleCheckout}
        >
          Checkout
        </a>
      </div>
    </section>
  );
}
