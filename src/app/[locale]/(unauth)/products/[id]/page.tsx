import React from 'react';
import ProductThumb from './ProductThumb';
import ProductDesc from './ProductDesc';
import InputNumber from '@/components/InputNumber';
import AddToCart from './AddToCart';
import envConfig from '@/libs/env';
import axios from 'axios';

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const response = await axios.get(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/products/${params.id}`,
  );
  const productDesc = response.data.data;

  
  return (
    <div className="single-product-area clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-50">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Furniture</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Chairs</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  white modern chair {params.id}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7">
            <ProductThumb thumb={productDesc.thumbnail} />
          </div>
          <div className="col-12 col-lg-5">
            <ProductDesc
              price={productDesc.price}
              name={productDesc.name}
              description={productDesc.description}
            />
            {/* <!-- Add to Cart Form --> */}
            <AddToCart productId={Number(params.id)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
