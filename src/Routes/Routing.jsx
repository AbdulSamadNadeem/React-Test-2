import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";

export const Rounting = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/products',
        element:<Products/>  
    },
    {
        path:'/products/:id',
        element:<Products/>  
    },
    {
        path:'/contact',
        element:<Contact/>  
    }
]
