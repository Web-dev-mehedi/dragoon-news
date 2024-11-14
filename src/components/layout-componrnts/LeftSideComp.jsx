import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideComp = () => {
    
    const [categories, setCategories] = useState([]);
    console.log(categories)
     useEffect(()=>{
            fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res=> res.json())
            .then(data => (
                setCategories(data.data.news_category)
            ))
     },[])


    //  {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //   },

    return (
        <div>
             <h1 className='text-2xl font-semibold text-black py-8'>All Caterogy</h1>
             <div className='flex flex-col items-start gap-4'>
                 {
                  categories.map(item =>(
                    <NavLink to={`/category/${item.category_id}`} className='btn w-full text-left text-slate-500 bg-white' type="button">{item.category_name}</NavLink>
                  ) )
                 }
             </div>
        </div>
    );
};

export default LeftSideComp;