import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
      <>
        <Banner></Banner>
        <div className="grid grid-cols-4 container mx-auto mt-12">
          <div className="col-span-1 p-6">
            <h1 className="text-4xl font-bold mb-6">Category</h1>

            <div className="flex flex-col gap-2">
              <Link className="btn btn-primary" to="/">
                Chair
              </Link>
              <Link className="btn btn-primary" to="/">
                Table
              </Link>
              <Link className="btn btn-primary" to="/">
                Sofa
              </Link>
            </div>
          </div>

          <div className="hero bg-orange-200 col-span-3">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="" className="" alt="" />
              <div>
                <h1 className="text-5xl font-bold">demo</h1>
                <p className="py-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit, iste.
                </p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;
