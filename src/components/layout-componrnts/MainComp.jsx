import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryNews from "../pages/CategoryNews";

const MainComp = () => {
  const data = useLoaderData();
  console.log(data.data);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-black py-8">
        Dragon News Home
      </h1>

      {data.data.map((item) => (
        <CategoryNews key={item.id} article={item} />
      ))}
    </div>
  );
};

export default MainComp;
