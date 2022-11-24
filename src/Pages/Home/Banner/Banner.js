import React from "react";

const Banner = () => {
  return (
    <div
      className="hero text-white"
      style={{
        backgroundImage: `url(https://web.frazerconsultants.com/wp-content/uploads/2017/07/A-lobby-with-chairs-and-tables.jpg)`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="" className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">HOT SALE</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            deleniti.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
