import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RightComp from "./layout-componrnts/RightComp";
import Header from "./Header";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const newData = useLoaderData();
  console.log(newData.data[0]);
  const { details, thumbnail_url, title } = newData.data[0] || {};
  return (
    <div className="container mx-auto ">
         <header>
             <Header/>
         </header>
      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-8">
        <div className=" mx-auto col-span-2 ">
          <h1 className="text-2xl font-semibold text-black py-8">Dragon news</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 space-y-6">
            <img
              className="w-full h-[500px] object-cover object-top  rounded-lg"
              src={thumbnail_url}
              alt="News"
            />
            <div className="space-y-5">
              {" "}
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{details}</p>
              <Link to='/category/08' className="bg-red-500 text-white px-4 py-2 rounded flex gap-4 justify-center items-center w-[300px]">
              <FaArrowLeft/> <span>All news in this category</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <RightComp />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
