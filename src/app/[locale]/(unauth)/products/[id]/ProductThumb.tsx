'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductThumb {
  thumbs: string[];
}
const ProductThumb: React.FC<ProductThumb> = ({ thumbs }) => {
  const [selectedImage, setSelectedImage] = useState<string>(thumbs[0]);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <div className="single_product_thumb">
      <div
        id="product_details_slider"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {thumbs.map((thumb: string, index: number) => (
            <li
              key={index}
              data-target="#product_details_slider"
              data-slide-to={index}
              style={{ backgroundImage: `url(${thumb})` }}
              onClick={() => handleImageClick(thumb)}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <a className="gallery_img" href={selectedImage}>
              <Image
                className="d-block w-100 border border-gray-600"
                src={selectedImage}
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
