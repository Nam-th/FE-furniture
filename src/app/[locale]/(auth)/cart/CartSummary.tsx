import React from 'react';

export default function CartSummary() {
  return (
    <section className="cart-summary">
      <h5 className="font-semibold">Cart Total</h5>
      <ul className="summary-table">
        <li>
          <span>subtotal:</span> <span>$140.00</span>
        </li>
        <li>
          <span>delivery:</span> <span>Free</span>
        </li>
        <li>
          <span>total:</span> <span>$140.00</span>
        </li>
      </ul>
      <div className="cart-btn mt-100">
        <a href="cart.html" className="btn button button-primary w-100 m-0">
          Checkout
        </a>
      </div>
    </section>
  );
}
