'use client';
import React, { useEffect, useRef } from 'react';
import Product from '@/types/Product';

import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import CartProduct from '@/components/CardProduct/CardProduct';

export default function HomeProduct() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      imagesLoaded(containerRef.current, () => {
        new Isotope(containerRef.current as HTMLElement, {
          itemSelector: '.single-products-catagory',
          percentPosition: true,
          masonry: {
            columnWidth: '.single-products-catagory',
          },
        });
      });
    }
  }, []);

  //data
  const products: Product[] = [
    {
      id: 1,
      thumbnail: '/images/bg-img/1.jpg',
      price: 180,
      name: 'Modern Chair',
    },
    {
      id: 2,
      thumbnail: '/images/bg-img/2.jpg',
      price: 180,
      name: 'Minimalistic Plant Pot',
    },
    {
      id: 3,
      thumbnail: '/images/bg-img/3.jpg',
      price: 180,
      name: 'Modern Chair',
    },
    {
      id: 4,
      thumbnail: '/images/bg-img/4.jpg',
      price: 180,
      name: 'Night Stand',
    },
    {
      id: 5,
      thumbnail: '/images/bg-img/5.jpg',
      price: 18,
      name: 'Plant Pot',
    },
    {
      id: 6,
      thumbnail: '/images/bg-img/6.jpg',
      price: 320,
      name: 'Small Table',
    },
    {
      id: 7,
      thumbnail: '/images/bg-img/7.jpg',
      price: 318,
      name: 'Metallic Chair',
    },
    {
      id: 8,
      thumbnail: '/images/bg-img/8.jpg',
      price: 318,
      name: 'Modern Rocking Chair',
    },
    {
      id: 9,
      thumbnail: '/images/bg-img/9.jpg',
      price: 318,
      name: 'Home Deco',
    },
  ];
  return (
    <div ref={containerRef} className="amado-pro-catagory clearfix">
      {products.map((product: Product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          thumbnail={product.thumbnail}
          price={product.price}
          name={product.name}
        />
      ))}
    </div>
  );
}
