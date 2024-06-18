import React from 'react';
import ProductThumb from './ProductThumb';
import ProductDesc from './ProductDesc';
import InputNumber from '@/components/InputNumber';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const thumbs: string[] = [
    '/images/product-img/pro-big-1.jpg',
    '/images/product-img/pro-big-2.jpg',
    '/images/product-img/pro-big-3.jpg',
    '/images/product-img/pro-big-4.jpg',
  ];
  const productDesc = {
    price: 180,
    name: 'White Modern Chair',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
  };
  async function createInvoice(formData: FormData) {
    'use server';

    const rawFormData = {
      quantity: formData.get('quantity'),
    };
    console.log(rawFormData);
  }
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
            <ProductThumb thumbs={thumbs} />
          </div>
          <div className="col-12 col-lg-5">
            <ProductDesc
              price={productDesc.price}
              name={productDesc.name}
              description={productDesc.description}
            />
            {/* <!-- Add to Cart Form --> */}
            <form
              action={createInvoice}
              className="cart clearfix"
              method="post"
            >
              <div className="cart-btn d-flex mb-50">
                <div className="quantity">
                  <InputNumber />
                </div>
              </div>
              <button
                type="submit"
                name="addtocart"
                className="button button-primary"
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
