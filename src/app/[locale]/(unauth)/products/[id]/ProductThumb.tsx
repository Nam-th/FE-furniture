'use client';
import Image from 'next/image';
import React from 'react';

interface ProductThumb {
  thumb?: string;
}
const ProductThumb: React.FC<ProductThumb> = ({ thumb }) => {


  return (
    <div className="single_product_thumb">
      <div
        id="product_details_slider"
        className="carousel slide"
        data-ride="carousel"
      >
        

        <div className="carousel-inner">
          <div className="carousel-item active">
            <a className="gallery_img" href={thumb}>
              <Image
                className="d-block w-100 border border-gray-600"
                src={thumb ?? '/images/core-img/not_found_image.jpg'}
                alt="slide"
                width={0}
                height={0}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductThumb;
