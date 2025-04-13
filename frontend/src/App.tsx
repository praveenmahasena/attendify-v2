import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./views/Root";
import LandingPage from "./views/LandingPage";
import AdminLogin from "./views/AdminLogin";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                index:true,
                element:<LandingPage/>
            },
            {
                path:'admin/login',
                element:<AdminLogin/>
            }
        ]
    }
])

export default function App(){
    return (<RouterProvider router={router}/>)
}
