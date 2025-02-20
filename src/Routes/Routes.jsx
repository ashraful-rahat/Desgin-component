import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            
    {
        path:'/login',
        element:<Login></Login>
    },
     {
        path:'/signup',
        element:<SignUp></SignUp>
     },

        ]
        
    },

  
 
  
])
export default routes;