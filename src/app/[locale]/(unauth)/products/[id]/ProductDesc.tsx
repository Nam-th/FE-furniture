import { Rating } from '@/components';
import React from 'react';

interface ProductDesc {
  price: number;
  name: string;
  description: string;
}

const ProductDesc: React.FC<ProductDesc> = ({ price, name, description }) => {
  return (
    <div className="single_product_desc">
      {/* <!-- Product Meta Data --> */}
      <div className="product-meta-data">
        <div className="line"></div>
        <p className="product-price font-extrabold">${price}</p>
        <a href="#">
          <h6>{name}</h6>
        </a>
        {/* <!-- Ratings & Review --> */}
        <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
          <Rating />
          <div className="review">
            <a href="#">Write A Review</a>
          </div>
        </div>
        {/* <!-- Avaiable --> */}
        <p className="avaibility">
          <i className="fa fa-circle"></i> In Stock
        </p>
      </div>

      <div className="short_overview my-5">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDesc;
