import Image from 'next/image';
import Rating from '../Rating';

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string[];
}
const CardProductShop: React.FC<Product> = ({ id, name, price, thumbnail }) => {
  return (
    <div className="single-product-wrapper">
      {/* <!-- Product Image --> */}
      <div className="product-img">
        <Image
          src={thumbnail[0]}
          alt={name}
          width={0}
          height={0}
          layout="responsive"
        />
        {/* <!-- Hover Thumb --> */}
        <Image
          className="hover-img"
          src={thumbnail[1]}
          alt={id + ''}
          width={0}
          height={0}
          layout="responsive"
        />
      </div>

      {/* <!-- Product Description --> */}
      <div className="product-description d-flex align-items-center justify-content-between">
        {/* <!-- Product Meta Data --> */}
        <div className="product-meta-data">
          <div className="line"></div>
          <p className="product-price">${price}</p>
          <a href="product-details.html">
            <h6>{name}</h6>
          </a>
        </div>
        {/* <!-- Ratings & Cart --> */}
        <div className="ratings-cart text-right">
          <Rating />
          <div className="cart mt-2">
            <button className="button button-primary px-3">
              <svg
                fill="white"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductShop;
