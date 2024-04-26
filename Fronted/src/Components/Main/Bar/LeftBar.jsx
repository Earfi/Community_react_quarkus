import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftBar() { 
    const [data,setData] = useState([
        {
            "id":1,
            "username":"Pichaya Chantrasriwong",
            "title":"I want money $$",
            "img":"../../../../public/img/profile/profile1.jpg"
        },
        {
            "id":2,
            "username":"Somchai Jaidee",
            "title":"My new car!!",
            "img":"../../../../public/img/profile/profile2.jpg"
        },
        {
            "id":3,
            "username":"Sompong Thongdee",
            "title":"Miss you >_<",
            "img":"../../../../public/img/profile/profile3.jpg"
        },
        {
            "id":4,
            "username":"Lomphong Manee",
            "title":"Eiei",
            "img":"../../../../public/img/profile/profile4.jpg"
        },
    ])

    return (
        <div className="w-full h-screen overflow-y-auto shadow-2xl border relative"> 
            <div className="h-fit w-full overflow-y-auto flex flex-col justify-start gap-5 pb-20">
                
                <div className="w-full xl:w-[80%] p-2 mx-auto">    
                    <h1 className="text-md font-medium pb-2">Popular Post</h1>
                    <div className="flex flex-col justify-start items-center gap-3 bg-gray-100 w-full h-full p-2">
                        {data.map((i,index) => (
                            <div key={i.id} className="w-full h-20 p-3 bg-gray-200 flex justify-between items-center overflow-hidden">
                                <div>
                                    <h1 className="text-xs font-semibold">{i.username}</h1>
                                    <p className="text-sm font-bold text-red-500">{i.title}</p>
                                </div>
                                <img className="w-16 h-16 object-cover" src={i.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full xl:w-[80%] p-2 mx-auto">
                    <div className="w-full h-40 bg-red-500 rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="../../../../public/img//Product_advertising.jpg" alt="Product advertising" />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default LeftBar;