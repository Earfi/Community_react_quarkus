import React, { useState } from 'react'
import Pro_Detail from './Page/Pro_Detail';
import Pro_Posts from './Page/Pro_Posts';
import Pro_Products from './Page/Pro_Products';

const Profile = () => { 
    const [catagory,setCatagory] = useState("detail");


  return (
    <div className='bg-slate-100 overflow-hidden'>  
        <div className='min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto'>
        
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