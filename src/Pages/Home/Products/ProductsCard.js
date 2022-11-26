
import React from 'react';

const ProductsCard = ({ product }) => {
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
      {/* <figure>{image_url}</figure> */}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    //   <div className="card shadow-xl">
    //     <div className="card-body text-center">
    //       <h2 className="text-2xl text-secondary font-bold text-center">
    //         {name}
    //       </h2>
    //       <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
    //       <p>
    //         {slots.length} {slots.length > 1 ? "spaces" : "space"} available
    //       </p>
    //       <div className="card-actions justify-center">
    //         <label
    //           disabled={slots.length === 0}
    //           htmlFor="booking-modal"
    //           className="btn btn-primary text-white"
    //           onClick={() => setTreatment(appointmentOption)}
    //         >
    //           Book Appointment
    //         </label>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default ProductsCard;