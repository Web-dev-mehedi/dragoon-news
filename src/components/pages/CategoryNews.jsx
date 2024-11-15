import React from "react";
import { FaStar, FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";


const CategoryNews = ({ article }) => {
    
  const {
    _id,
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = article || {};
//   
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        {" "}
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.img}
            alt={`Avatar of ${author.name}`}
          />
          <div className="text-sm">
            {" "}
            <p className="text-gray-900 leading-none">{author.name}</p>
            <p className="text-gray-600">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <img className="w-full h-80 object-cover" src={thumbnail_url} alt={title} />
          <p className="text-gray-700 text-base mt-4">{details}</p>
          <Link to={`/news/${_id}`} className="text-blue-500 hover:text-blue-700">
            Read More
          </Link>
        </div>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {" "}
          <FaStar className="text-yellow-500" />
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div>{" "}
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-2" /> {total_view}
        </div>
      </div>
    </div>
  );
};
export default CategoryNews;
