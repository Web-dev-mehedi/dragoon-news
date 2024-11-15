import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import MainComp from "../components/layout-componrnts/MainComp";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "./PrivateRoute";



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
        path:"/news/:id",
        element:<PrivateRoute> <NewsDetails/> </PrivateRoute>,
        loader: ({ params })=>(
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
        
        )
    },
             
    {
        path:"auth/login",
        element:<Login/>
    },
    {
        path:"auth/register",
        element:<Register/>
    },
    
    {
        path:"*",
        element:<h1>hello from error</h1>
    }

])