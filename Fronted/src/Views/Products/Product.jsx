import React, { useState } from 'react'
import Items from '../../Components/Products/Items'
import { Link } from 'react-router-dom'

const Product = () => {
    const [sort,setSort] = useState("top")
    const [catagory,setCatagory] = useState([
        {
            "id":"1",
            "name":"รองเท้า"
        },
        {
            "id":"2",
            "name":"อาหาร"
        },
        {
            "id":"3",
            "name":"รถยนต์"
        },
        {
            "id":"4",
            "name":"กีฬา"
        },
        {
            "id":"5",
            "name":"เสื้อ"
        },
        {
            "id":"6",
            "name":"กางเกง"
        }
    ])

  return (
    <div className='bg-slate-100 overflow-hidden'>  
        <div className='min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto'>

            <Link to="/products/post">
                <div className='relative'>
                    <input type="text" className='w-full md:w-[600px] h-10 border rounded-md p-1' placeholder='Post your product ...'/>
                    <img className='absolute top-2 right-3 sm:right-8 cursor-pointer w-7 h-7 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/img.png" alt="img-logo" />
                </div> 
            </Link>

            <div className='w-full md:w-[600px] h-10 bg-gray-100 grid grid-cols-4 p-1 items-center text-xs sm:text-sm'>
                <p onClick={() => setSort("top")} className={`${sort === "top" ? 'bg-orange-500 text-white':' text-black bg-none'} text-center cursor-pointer`}>สินค้าขายดี</p>
                <p onClick={() => setSort("expennsive")} className={`${sort === "expennsive" ? 'bg-orange-500 text-white':' text-black bg-none'} text-center cursor-pointer`}>ราคาสูง</p>
                <p onClick={() => setSort("cheap")} className={`${sort === "cheap" ? 'bg-orange-500 text-white':' text-black bg-none'} text-center cursor-pointer`}>ราคาน้อย</p>
                <select name="หมวดสินค้า" id="" className={`${sort === "catagory" ? 'bg-orange-500 text-white':' text-black bg-none'} text-center cursor-pointer`}>
                    <option value="หมวดสินค้า">หมวดสินค้า</option> 
                    {catagory.map((i, index) => (
                        <option onClick={() => setSort(i.name)} value={i.name} key={i.id}>{i.name}</option> 
                    ))} 
                </select>
            </div>


            <div className="w-full md:w-[600px] h-full p-5 bg-gray-100 border my-2 ">
                <h1 className="font-bold text-xl p-2">Products</h1>
                <div className="w-full h-full flex flex-wrap gap-3"> 
                    <Items/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product