import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate();
    const [num,setNum] = useState(1);

    const [product,setProduct] = useState({
        "img":"https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name":"ผลไม้ขวด",
        "introduce":"สัปปะรดคัดแล้ว จากดวงจันทร์ อุดมไปด้วยแร่ธาตุนับหมื่นชนิด กินแล้ว... ร่างกายสดชื่น !!!",
        "introDetail":"หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง ",
        "otherDetail":"<b>มะแขว่น</b> - เครื่องเทศเมืองเหนือ อีกชนิดหนึ่งซึ่งถือได้ว่าเป็นพืชเศรษฐกิจที่สำคัยเลยทีเดียว พันธุ์ไม้ชนิดนี้จะพบมากทางภาคเหนือของประเทศไทย โดยจะพบขึ้นอยู่ตามป่าดิบบนพื้นที่ระดับต่ำไปจนถึงสูงจากระดับน้ำทะเล 500 เมตร ขึ้นไป แต่มะแขว่นที่มีคุณภาพที่ดีและให้กลิ่นหอมควรจะอยู่ที่ระดับควมสูงตั้งแต่ 800-1400 เมตร และ ยิ่งหากได้มะแขว่นจากป่าธรรมชาติด้วยแล้วก็จะถือว่าเป็นเครื่องเทศชั้นยอดเลยที่เดียว เหตุผลง่ายๆ ก็คือความเป็นพืชอินทรีย์ (organic) ยังไงละ เพราะพืชอินทรีย์โดยทั่วไปจะให้ความหอม และ รสชาติที่ดีกว่า ปัจจุบันนี้มีมะแขว่นที่มาจากหลายแหล่ง ทั้งที่เก็บมาจากป่า และ แลูกเองในเชิงเกษตร เหตุเพราะพื้นที่ป่าถูกทำลายไปมากจึงมีผู้ที่หันมาปลูกมะแขว่นขายในหลายพื้นที่ ปัจจุบันนี้แหล่งของมะแขว่นใหญ่ๆ จะมาจาก จ.แม่ฮ่องสอน น่าน พะเยา และ เชียงราย แต่จากการที่เราอยู่ในอุตสาหกรรมนี้มานานจึงสามารถบอกได้ว่า ผลผลิตของมะแขว่นที่ดีที่สุดมาจาก อ.งาว จ.ลำปาง และ บ้านดอยฮาง อ.เมือง จ.เชียงราย แม้ว่าจะมีหลายๆแหล่งที่สามารถผลิตมะแขว่นได้ แต่ความเผ็ดและความหอมนั้นไม่สามารถสู้มะแขว่นแห้งที่มาจากทั้งสองแหล่งได้ แต่เป็นที่น่าเสียดายอย่างยิ่งว่า มะแขว่นดอยฮาง ในปัจจุบันนี้แทบไม่เหลือแล้ว เนื่องจาการบุกรุกแผ้วถางป่า ",
        "price":"500",
        "rating":"4.8",
        "stock":"50",
        "out_stock":"9,726",
    })

    const numProducts = (detail) => { 
        if(detail == "+"){
            setNum(num + 1)
        }else if(num > 1 && detail == "-"){
            setNum(num - 1)
        }
    }

  return (
    <div className='bg-slate-100 overflow-hidden'>  
        <div className='min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto relative'>
            <p className='rotate-180 text-3xl cursor-pointer float-start absolute top-2 left-0 sm:text-2' onClick={() => navigate(-1)}>&#10145;</p>
            <div className="flex flex-wrap justify-center items-start h-full p-2">
                <div className="w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] mb-2 bg-white object-contain">  
                    <img src={product.img} className="object-cover w-full h-full"/>
                </div>  

                <div className="w-[500px] border min-h-[300px] p-5 mb-2">
                    <h1 className="text-md font-bold">{product.introduce}</h1>
                    <p className="my-2 overflow-hidden text-xs sm:text-sm">{product.introDetail}</p>
                    <p className='text-sm'>ราคา <b className="text-2xl text-red-500">{product.price}</b> บาท</p>
                    <ul className="flex items-center gap-2 text-2xl text-orange-500">
                        <li>&#10030;</li>
                        <li className='text-xs'>{product.rating} / 5.0</li> 
                    </ul> 
                    <p className='text-xs'>สินค้าเหลือ <b>{product.stock}</b> ชิ้น / ขายแล้ว <b>{product.out_stock}</b> ชิ้น</p>
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-center items-center gap-5 my-2">
                            <p>จำนวนสินค้า</p>
                            <p onClick={() => numProducts("-")} className="cursor-pointer">&#9866;</p>
                            <p><b>{num}</b></p>
                            <p onClick={() => numProducts("+")} className="cursor-pointer">&#10010;</p> 
                        </div>
                        <div className="flex justify-center items-center gap-5 my-2"> 
                            <button className="border px-1 py-2 text-sm font-serif bg-slate-200 rounded-md hover:bg-slate-400">เพิ่มลงตะกร้า</button>
                            <Link to="/products/cart"><button className="border px-1 text-sm py-2 font-serif bg-slate-200 rounded-md hover:bg-slate-400">ซื้อสินค้า</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default ProductDetail