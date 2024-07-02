import React from 'react';
import ProductThumb from './ProductThumb';
import ProductDesc from './ProductDesc';
import InputNumber from '@/components/InputNumber';
import AddToCart from './AddToCart';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const thumb: string = '/images/product-img/pro-big-1.jpg'
   
  const productDesc = {
    price: 180,
    name: 'White Modern Chair',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
  };
  
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
            <ProductThumb thumb={thumb} />
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
