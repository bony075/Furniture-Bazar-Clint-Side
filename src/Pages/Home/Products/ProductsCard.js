
import React from 'react';
import { FaCartPlus } from "react-icons/fa";

const ProductsCard = ({ product, setsingleProduct }) => {
  console.log(product.name);
  const {
    name,
    location,
    originalPrice,
    resalePrice,
    yearsOfUse,
    posted,
    seller,
    image_url,
    details,
  } = product;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className='lg:w-1/3'>
        <img src={image_url} alt="" srcset="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Location: {location}</p>
        <p>Original Price:{originalPrice} BDT</p>
        <p>Resale Price: {resalePrice} BDT</p>
        <p>Years Of Use: {yearsOfUse} yr</p>
        <p>Posted Date: {posted}</p>
        <p>Seller: {seller}</p>
        <p>Condition: {details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline"><FaCartPlus className='mr-2'/> WishList</button>
          <label
            
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setsingleProduct(product)}
          >
            Book NOW
          </label>
        </div>
      </div>
    </div>

   
  );
};

export default ProductsCard;