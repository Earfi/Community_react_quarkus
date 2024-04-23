import React, { useState } from 'react'
import Pro_Detail from './Page/Pro_Detail';
import Pro_Posts from './Page/Pro_Posts';
import Pro_Products from './Page/Pro_Products';
import { useNavigate } from 'react-router-dom';

const Profile = () => { 
    const navigate = useNavigate();
    const [catagory,setCatagory] = useState("detail");


  return (
    <div className='bg-slate-100 overflow-hidden relative'>  
        <p className='rotate-180 text-3xl cursor-pointer float-start absolute top-2 left-0 sm:text-2' onClick={() => navigate(-1)}>&#10145;</p>
        <div className='min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto'>

            <h1 className='text-center text-xl font-bold my-2'>Profile</h1>
        
            {/* mode content */}

            <div className="w-full md:w-[600px] border-[0.5px] border-gray-300">
                <nav className="w-full h-6 bg-black text-white">
                    <ul className="w-full flex h-full justify-around text-sm">
                        <li className={`${catagory == "detail" ? 'bg-orange-600' : 'bg-white text-black'} cursor-pointer h-full w-[33%] text-center`} onClick={() => setCatagory("detail")}>Detail</li>
                        <li className={`${catagory == "posts" ? 'bg-orange-600' : 'bg-white text-black'} cursor-pointer h-full w-[33%] text-center`} onClick={() => setCatagory("posts")}>Your Posts</li>
                        <li className={`${catagory == "products" ? 'bg-orange-600' : 'bg-white text-black'} cursor-pointer h-full w-[33%] text-center`} onClick={() => setCatagory("products")}>Your Products</li>
                    </ul>
                </nav>
            </div>

            {/* content */} 

            <div className="w-full md:w-[600px] h-fit min-h-[50vh] my-2 border p-2"> 
                { catagory === "detail" ? (
                    <> 
                        <Pro_Detail/>
                    </>
                ) : catagory === "posts" ? (
                    <> 
                        <Pro_Posts/>
                    </>
                ) : (
                    <> 
                        <Pro_Products/>
                    </>
                )} 
            </div>

            


        </div>
    </div>
  )
}

export default Profile