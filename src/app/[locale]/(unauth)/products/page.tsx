import React from 'react';
import Category from './Category';
import Brand from './Brand';
import { CardProductShop } from '@/components';

const ProductsPage = () => {
  const categories = [
    {
      name: 'Chairs',
    },
    {
      name: 'Beds',
    },
    {
      name: 'Accesories',
    },
    {
      name: 'Furniture',
    },
    {
      name: 'Home Deco',
    },
    {
      name: 'Dressings',
    },
    {
      name: 'Tables',
    },
  ];
  const brands = [
    {
      name: 'Amado',
    },
    {
      name: 'Ikea',
    },
    {
      name: 'Invc',
    },
    {
      name: 'The Factory',
    },
    {
      name: 'ArtDeco',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Modern Chair',
      price: 231,
      thumbnail: [
        '/images/product-img/product1.jpg',
        '/images/product-img/product2.jpg',
      ],
    },
    {
      id: 2,
      name: 'Modern Chair',
      price: 180,
      thumbnail: [
        '/images/product-img/product2.jpg',
        '/images/product-img/product3.jpg',
      ],
    },
    {
      id: 3,
      name: 'Modern Chair',
      price: 180,
      thumbnail: [
        '/images/product-img/product3.jpg',
        '/images/product-img/product4.jpg',
      ],
    },
    {
      id: 4,
      name: 'Modern Chair',
      price: 180,
      thumbnail: [
        '/images/product-img/product4.jpg',
        '/images/product-img/product5.jpg',
      ],
    },
    {
      id: 5,
      name: 'Modern Chair',
      price: 180,
      thumbnail: [
        '/images/product-img/product5.jpg',
        '/images/product-img/product6.jpg',
      ],
    },
    {
      id: 6,
      name: 'Modern Chair',
      price: 180,
      thumbnail: [
        '/images/product-img/product6.jpg',
        '/images/product-img/product1.jpg',
      ],
    },
  ];

  return (
    <>
      <div className="shop_sidebar_area">
        {/* <!-- ##### Single Widget ##### --> */}
        <div className="widget catagory mb-50">
          {/* <!-- Widget Title --> */}
          <h6 className="widget-title mb-30">Categories</h6>

          {/* <!--  Catagories  --> */}
          <div className="catagories-menu">
            <ul>
              {categories.map((category, index) => (
                <Category key={index} name={category.name} />
              ))}
            </ul>
          </div>
        </div>

        {/* <!-- ##### Single Widget ##### --> */}
        <div className="widget brands mb-50">
          {/* <!-- Widget Title --> */}
          <h6 className="widget-title mb-30">Brands</h6>

          <div className="widget-desc">
            {brands.map((brand, index) => (
              <Brand key={index} {...brand} />
            ))}
          </div>
        </div>

        {/* <!-- ##### Single Widget ##### --> */}
        <div className="widget color mb-50">
          {/* <!-- Widget Title --> */}
          <h6 className="widget-title mb-30">Color</h6>

          <div className="widget-desc">
            <ul className="d-flex">
              <li>
                <a href="#" className="color1"></a>
              </li>
              <li>
                <a href="#" className="color2"></a>
              </li>
              <li>
                <a href="#" className="color3"></a>
              </li>
              <li>
                <a href="#" className="color4"></a>
              </li>
              <li>
                <a href="#" className="color5"></a>
              </li>
              <li>
                <a href="#" className="color6"></a>
              </li>
              <li>
                <a href="#" className="color7"></a>
              </li>
              <li>
                <a href="#" className="color8"></a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- ##### Single Widget ##### --> */}
        <div className="widget price mb-50">
          {/* <!-- Widget Title --> */}
          <h6 className="widget-title mb-30">Price</h6>

          <div className="widget-desc">
            <div className="slider-range">
              <div
                data-min="10"
                data-max="1000"
                data-unit="$"
                className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                data-value-min="10"
                data-value-max="1000"
                data-label-result=""
              >
                <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                <span className="ui-slider-handle ui-state-default ui-corner-all"></span>
                <span className="ui-slider-handle ui-state-default ui-corner-all"></span>
              </div>
              <div className="range-price">$10 - $1000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="amado_product_area py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                {/* <!-- Total Products --> */}
                <div className="total-products">
                  <p>Showing 1-8 of 25</p>
                  <div className="view d-flex">
                    <a href="#" className="flex items-center justify-center">
                      <svg
                        fill="#fff"
                        width={19}
                        height={19}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
                      </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                      <svg
                        fill="#fff"
                        width={19}
                        height={19}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- Sorting --> */}
                <div className="product-sorting d-flex">
                  <div className="sort-by-date d-flex align-items-center mr-15">
                    <p>Sort by</p>
                    <form action="#" method="get">
                      <select name="select" id="sortBydate">
                        <option value="value">Date</option>
                        <option value="value">Newest</option>
                        <option value="value">Popular</option>
                      </select>
                    </form>
                  </div>
                  <div className="view-product d-flex align-items-center">
                    <p>View</p>
                    <form action="#" method="get">
                      <select name="select" id="viewProduct">
                        <option value="value">12</option>
                        <option value="value">24</option>
                        <option value="value">48</option>
                        <option value="value">96</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-12 col-xl-6">
                <CardProductShop {...product} />
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              {/* <!-- Pagination --> */}
              <nav aria-label="navigation">
                <ul className="pagination justify-content-end mt-50">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01.
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02.
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03.
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      04.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
