import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useQuery } from "@tanstack/react-query";
import Products from "../Products/Products";
import { FaChair, FaLeaf, FaTree } from 'react-icons/fa';
const Home = () => {
  const uri = "http://localhost:5000/categoryCollection";
  // const [category,setCategory] =useState([]);
  // useEffect(() => {
  //   fetch(uri)
  //     .then(res => res.json())
  //   .then(data =>setCategory(data) )
  // },[])

  const { data: category = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(uri);
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <div className="lg:h-96">
        <Banner></Banner>
      </div>

      <div className="grid lg:grid-cols-4 container mx-auto mt-12">
        <div className="col-span-1 p-6">
          <h1 className="text-4xl font-bold mb-6">Category</h1>

          <div className="flex flex-col gap-2">
            {category?.map((ct) => (
              <Link
                className="btn btn-primary"
                to={`/category/${ct.category_id}`}
                key={ct._id}
              >
                {ct.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <Products></Products>
      
        </div>
      </div>


      <div className="card lg:card-side bg-base-200 lg:p-48 mt-10">
        <div className="card-body">
          <h2 className="card-title lg:text-4xl font-extrabold">We Provide You The<br/> Best Experience</h2>
          <p className="text-xl">Urna molestie at elementum eu facilisis. Venenatis a the inner condimentum vitae sapien pellentesque.</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
          <p className="lg:text-2xl flex"><FaChair />Minimalist Design</p>
          <p className="lg:text-2xl flex"><FaLeaf />Natural Product</p>
          <p className="lg:text-2xl flex items-center"><FaTree />Best Quality Wood</p>

        </div>
        <figure><img src="https://newexsoft.com/demo/html/furio/assets/img/about.png" alt="Album" /></figure>
       
      </div>
    </>
  );
};

export default Home;
