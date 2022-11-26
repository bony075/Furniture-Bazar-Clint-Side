import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
// import {  useQuery} from '@tanstack/react-query'
const Products = () => {
  const Allproduct = useLoaderData();
    //  const uri = "http://localhost:5000/product";
    //  const { data: product=[]  } = useQuery({
    //    queryKey: ["product"],
    //    queryFn: async () => {
    //      const res = await fetch(uri);
    //      const data = await res.json();
    //      return data;
    //    },
    //  });
    //  const uri = "http://localhost:5000/product";
    //  const { data: product=[]  } = useQuery({
    //    queryKey: ["product"],
    //    queryFn: async () => {
    //      const res = await fetch(uri);
    //      const data = await res.json();
    //      return data;
    //    },
    //  });
    return (
      <div className='grid gap-4'>
        {Allproduct.map((p) => (
          <ProductsCard key={p._id} product={p}></ProductsCard>
        ))}
      </div>
    );
};

export default Products;