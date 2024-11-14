import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import MainComp from "../components/layout-componrnts/MainComp";



export const router = createBrowserRouter([
    {
        path:"/",
       element: <HomeLayouts/>,
       children:[
        {
            path:"/",
            element:<Navigate to='category/01'/>
        },
        {
          path:"/category/:id",
          element:<MainComp/>, 
          loader: ({params})=>(
            fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          )  
        },
       ]
    },
    {
        path:"/news",
        element:<h1>hello from news</h1>
    },
    {
        path:"/auth",
        element:<h1>hello from auth</h1>
    },
    {
        path:"*",
        element:<h1>hello from error</h1>
    }

])