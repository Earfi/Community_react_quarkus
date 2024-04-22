import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Main/Navbar.jsx';
import Product from './Views/Products/Product.jsx';
import Profile from './Views/Profile/Profile.jsx';
import ProductDetail from './Views/Products/ProductDetail.jsx';
import ProductCart from './Views/Products/ProductCart.jsx';
import ProductPost from './Views/Products/ProductPost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      ( 
        <>
          <Navbar/>
          <App />
        </>
      ),
  },

  // Products
  {
    path: "/products",
    element: 
      ( 
        <>
          <Navbar/>
          <Product />
        </>
      ),
  },
  {
    path: "/products/detail",
    element: 
      ( 
        <>
          <Navbar/>
          <ProductDetail />
        </>
      ),
  },
  {
    path: "/products/post",
    element: 
      ( 
        <>
          <Navbar/>
          <ProductPost />
        </>
      ),
  },
  {
    path: "/products/carts",
    element: 
      ( 
        <>
          <Navbar/>
          <ProductCart />
        </>
      ),
  },
  
  // Profile
  {
    path: "/profile",
    element: 
      ( 
        <>
          <Navbar/>
          <Profile />
        </>
      ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)