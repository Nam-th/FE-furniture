import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartSummary from './CartSummary';
import CartTable from './CartTable';

const CartPage = () => {
  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="cart-title mt-50">
              <h2 className="font-semibold">Shopping Cart</h2>
            </div>

            <CartTable/>
          </div>
          <div className="col-12 col-lg-4">
            <CartSummary/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
