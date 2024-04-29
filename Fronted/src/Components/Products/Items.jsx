import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
  const [detail,setDetail] = useState([
    {
      "id":"1",
      "img":"https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title":"ผลไม้ขวด อุดมไปด้วยประโยชน์",
      "rating":"4.8",
      "sale_num":"16",
      "price":"500",
    },
    {
      "id":"2",
      "img":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title":"Nike red 4.0",
      "rating":"4.9",
      "sale_num":"2",
      "price":"5,900",
    },
    {
      "id":"3",
      "img":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title":"หูฟัง SM45820",
      "rating":"5.0",
      "sale_num":"29",
      "price":"1,200",
    },
    {
      "id":"4",
      "img":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title":"Keyboard XA523",
      "rating":"4.6",
      "sale_num":"80",
      "price":"1,500",
    }
  ])
  return (
    <>
      {detail.map((i, index) => (
        <Link key={i.id} to={`/products/detail/${i.id}`}>
          <div className="bg-white w-36 h-52 overflow-hidden flex flex-col gap-1 p-2 border rounded-md shadow-md">
              <div className="w-[100%] h-[100px] overflow-hidden mx-auto bg-white object-center">  
                  <img src={i.img} className="object-cover w-full h-full shadow-sm"/>
              </div>
              <h1 className="font-bold text-xs">{i.title}</h1> 
              <ul className="flex items-center gap-2">
                  <li className='text-orange-500'>&#10030;</li>
                  <li className='text-xs'>{i.rating} / 5.0</li> 
              </ul> 
              <h1 className="text-xs font-sans">ขายแล้ว {i.sale_num} ชิ้น</h1>
              <div className="flex justify-between items-center">
                  <h1 className="text-sm font-sans0">ราคา <b className='text-red-500 text-md'>{i.price}</b> บาท</h1>
                  <h1 className="text-orange-500 font-bold">&#10003;</h1>
              </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Items