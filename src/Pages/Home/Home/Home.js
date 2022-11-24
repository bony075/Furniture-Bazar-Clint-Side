import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto">
     
      <div className="col-span-1 bg-slate-600">
        <h1>category</h1>

        <div className="flex flex-col">
          <Link to="/">Chair</Link>
          <Link to="/">Table</Link>
          <Link to="/">Sofa</Link>
        </div>
      </div>

      <div className="hero bg-orange-200 col-span-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="" className="" alt="" />
          <div>
            <h1 className="text-5xl font-bold">demo</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
              iste.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
