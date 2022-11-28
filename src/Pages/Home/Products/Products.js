import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNow from './BookNow';
import ProductsCard from './ProductsCard';
// import {  useQuery} from '@tanstack/react-query'
const Products = () => {
  const [singleProduct, setsingleProduct] = useState(null);
  const Allproduct = useLoaderData();
  //  const uri = "https://resell-server-side-bony075.vercel.app/product";
  //  const { data: product=[]  } = useQuery({
  //    queryKey: ["product"],
  //    queryFn: async () => {
  //      const res = await fetch(uri);
  //      const data = await res.json();
  //      return data;
  //    },
  //  });
  //  const uri = "https://resell-server-side-bony075.vercel.app/product";
  //  const { data: product=[]  } = useQuery({
  //    queryKey: ["product"],
  //    queryFn: async () => {
  //      const res = await fetch(uri);
  //      const data = await res.json();
  //      return data;
  //    },
  //  });
  return (
    <>
      <div className="grid gap-4">
        {Allproduct.map((p) => (
          <ProductsCard
            key={p._id}
            product={p}
            setsingleProduct={setsingleProduct}
          ></ProductsCard>
        ))}
      </div>
      {singleProduct && (
        <BookNow
          singleProduct={singleProduct}
          setsingleProduct={setsingleProduct}
        ></BookNow>
      )}
    </>
  );
};

export default Products;