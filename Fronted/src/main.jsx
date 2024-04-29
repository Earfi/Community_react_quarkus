import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Main/Bar/Navbar.jsx';
import Product from './Views/Products/Product.jsx';
import Profile from './Views/Profile/Profile.jsx';
import ProductDetail from './Views/Products/ProductDetail.jsx';
import ProductCart from './Views/Products/ProductCart.jsx';
import ProductPost from './Views/Products/ProductPost.jsx';
import Login from './Views/Login/Login.jsx';
import SignUp from './Views/Login/SignUp.jsx';
import LeftBar from './Components/Main/Bar/LeftBar.jsx';
import RightBar from './Components/Main/Bar/RightBar.jsx';
import PLeftBar from './Components/Products/Bar/LeftBar.jsx';
import PRightBar from './Components/Products/Bar/RightBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden '>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <LeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <App /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <RightBar/> 
            </div>
          </div>
        </div>
      ),
  },
  {
    path: "/login",
    element: 
      ( 
        <>
          <Navbar/>
          <Login />
        </>
      ),
  },
  {
    path: "/signUp",
    element: 
      ( 
        <>
          <Navbar/>
          <SignUp />
        </>
      ),
  },

  // Products
  {
    path: "/products",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden'>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <PLeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <Product /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <PRightBar/> 
            </div>
          </div>
        </div>
      ),
  },
  {
    path: "/products/detail/:id",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden'>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <PLeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <ProductDetail /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <PRightBar/> 
            </div>
          </div>
        </div>
      ),
  },
  {
    path: "/products/post",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden'>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <PLeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <ProductPost /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <PRightBar/> 
            </div>
          </div>
        </div>
      ),
  },
  {
    path: "/products/carts",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden'>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <PLeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <ProductCart /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <PRightBar/> 
            </div>
          </div>
        </div>
      ),
  },
  
  // Profile
  {
    path: "/profile",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden'>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <PLeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <Profile /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <PRightBar/> 
            </div>
          </div>
        </div>
      ),
  },
  
  // Profile Id
  {
    path: "/profile/:id",
    element: 
      ( 
        <div className='h-screen w-screen overflow-hidden'>
          <Navbar/>
          <div className='flex pt-1 w-full'> 
            <div className='w-[25%] hidden md:block'>
              <PLeftBar/> 
            </div>
            <div className="w-screen md:w-[50%]">
              <Profile /> 
            </div>
            <div className='w-[25%] hidden md:block'>
              <PRightBar/> 
            </div>
          </div>
        </div>
      ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)