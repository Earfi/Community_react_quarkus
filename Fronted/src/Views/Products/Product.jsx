import React, { useState } from 'react'
import Items from '../../Components/Products/Items'
import { Link } from 'react-router-dom'
import ProductPost from './ProductPost'

const Product = () => {
    const [sort,setSort] = useState("top")
    const [openPost,setOpenPost] = useState(false)
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
    <div className={`w-full bg-slate-100 overflow-y-auto relative h-screen border pb-16`}>  
      <div className='h-full w-full overflow-y-auto bg-white flex flex-col gap-5 p-3 sm:p-10 mx-auto'>

            <Link to="/products/post">
                <div onClick={() => setOpenPost(!openPost)} className='relative'>
                    <p type="text" className='w-full h-10 border rounded-md p-1'>Post your product ...</p>
                    <img className='absolute top-2 right-3 sm:right-8 cursor-pointer w-7 h-7 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/img.png" alt="img-logo" />
                </div> 
            </Link>

            <div className='w-full h-10 bg-gray-100 grid grid-cols-4 p-1 items-center text-xs sm:text-sm'>
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


            <div className="w-full h-fit p-5 bg-gray-100 border my-2 ">
                <h1 className="font-bold text-xl p-2">Products</h1>
                <div className='flex justify-center'>
                    <div className="h-full flex flex-wrap gap-3"> 
                        <Items/>
                    </div>
                </div>
            </div>

        </div>

        {/* post Product */}

        {/* <div className={`absolute hidden min-h-full w-full backdrop-blur-3xl ${openPost ? 'top-0' : 'top-[-100%]'} left-0 right-0 bottom-0 flex justify-center items-start pt-20 transition-all duration-700`}>
            <div className='h-full w-full sm:w-[500px] bg-white px-5 pt-8 rounded-xl flex flex-col gap-2 relative'>
                <p onClick={() => setOpenPost(!openPost)} className='absolute right-2 top-2 text-xl cursor-pointer'>&#10006;</p>
                <ProductPost/>
            </div>
      </div> */}
    </div>
  )
}

export default Product