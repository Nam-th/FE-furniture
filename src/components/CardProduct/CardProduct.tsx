import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Product from '@/types/Product';

const CartProduct = (props: Product) => {
  return (
    <div className="single-products-catagory clearfix">
      <Link href={`/vi/products/${props.id}`}>
        <Image
          src={props.thumbnail}
          alt=""
          width={0}
          height={0}
          layout="responsive"
        />
        {/* <!-- Hover Content --> */}
        <div className="hover-content">
          <div className="line"></div>
          <p>From ${props.price}</p>
          <h4>{props.name}</h4>
        </div>
        <div className="product-btns">
          <button className="button button-primary">Add to Cart</button>
        </div>
      </Link>
    </div>
  );
};

export default CartProduct;
