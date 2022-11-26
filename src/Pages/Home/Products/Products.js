import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
     const uri = "http://localhost:5000/product";
     const { data: product=[]  } = useQuery({
       queryKey: ["product"],
       queryFn: async () => {
         const res = await fetch(uri);
         const data = await res.json();
         return data;
       },
     });
    return (
      <div>
        {product.map((p) => (
          <ProductsCard key={p._id} product={p}></ProductsCard>
        ))}
      </div>
    );
};

export default Products;