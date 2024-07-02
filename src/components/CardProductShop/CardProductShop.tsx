import Image from 'next/image';
import Rating from '../Rating';
import {EyeOutlined} from '@ant-design/icons';
import Link from 'next/link';


interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail?: string;
}
const CardProductShop: React.FC<Product> = ({ id, name, price, thumbnail }) => {
  return (
    <Link href={`/vi/products/${id}`} className="single-product-wrapper">
      {/* <!-- Product Image --> */}
      <div className="product-img">
        <Image
          src={thumbnail ?? '/images/core-img/not_found_image.jpg'}
          alt={name}
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
          <a href="#">
            <h6>{name}</h6>
          </a>
        </div>
        {/* <!-- Ratings & Cart --> */}
        <div className="ratings-cart text-right">
          <Rating />
          <div className="cart mt-2">
            <button className="button button-primary px-3">
            <EyeOutlined />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProductShop;
