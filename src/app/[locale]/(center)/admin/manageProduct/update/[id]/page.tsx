import UpdateProductForm from '@/components/Form/UpdateProductForm';
import envConfig from '@/libs/env';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

export default async function UpdateProduct({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/products/${params.id}`,
  );
  const product = response.data.data;

  return (
    <>
      <h2 className="mb-3">Update Product</h2>
      <section className="grid grid-cols-1 gap-11 md:grid-cols-2">
        <div>
          <Image
            src={product?.thumbnail}
            width={200}
            height={200}
            layout="responsive"
            alt="name"
          />
        </div>
        <div>
          <UpdateProductForm product={product} />
        </div>
      </section>
    </>
  );
}
