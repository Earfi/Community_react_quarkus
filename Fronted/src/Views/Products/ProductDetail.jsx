import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate();
    const [numPro, setNumPro] = useState(1);
    const [numImg, setNumImg] = useState(0);

    const [showMoreReviews, setShowMoreReviews] = useState(false);
 
    const handleShowMoreReviews = () => {
        setShowMoreReviews(true);
    };

    const [product, setProduct] = useState({
        "id":"1",
        "img":[
            "https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "title_cart":"ผลไม้ขวด",
        "title":"สัปปะรดคัดแล้ว จากดวงจันทร์ อุดมไปด้วยแร่ธาตุนับหมื่นชนิด กินแล้ว... ร่างกายสดชื่น !!!",
        "description":"หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง หม่าล่า - ก็คือหม่าล่า แม้ว่าหน้าตาจะละม้ายคล้ายคลึงกันระหว่าง มะแขว่น และ มะข่วงก็ตาม แต่กลิ่นจะมีความหอมที่แตกต่างจากมะแขว่นของทางเหนือเป็นอย่างยิ่ง ",
        "otherDetail":"<b>มะแขว่น</b> - เครื่องเทศเมืองเหนือ อีกชนิดหนึ่งซึ่งถือได้ว่าเป็นพืชเศรษฐกิจที่สำคัยเลยทีเดียว พันธุ์ไม้ชนิดนี้จะพบมากทางภาคเหนือของประเทศไทย โดยจะพบขึ้นอยู่ตามป่าดิบบนพื้นที่ระดับต่ำไปจนถึงสูงจากระดับน้ำทะเล 500 เมตร ขึ้นไป แต่มะแขว่นที่มีคุณภาพที่ดีและให้กลิ่นหอมควรจะอยู่ที่ระดับควมสูงตั้งแต่ 800-1400 เมตร และ ยิ่งหากได้มะแขว่นจากป่าธรรมชาติด้วยแล้วก็จะถือว่าเป็นเครื่องเทศชั้นยอดเลยที่เดียว เหตุผลง่ายๆ ก็คือความเป็นพืชอินทรีย์ (organic) ยังไงละ เพราะพืชอินทรีย์โดยทั่วไปจะให้ความหอม และ รสชาติที่ดีกว่า ปัจจุบันนี้มีมะแขว่นที่มาจากหลายแหล่ง ทั้งที่เก็บมาจากป่า และ แลูกเองในเชิงเกษตร เหตุเพราะพื้นที่ป่าถูกทำลายไปมากจึงมีผู้ที่หันมาปลูกมะแขว่นขายในหลายพื้นที่ ปัจจุบันนี้แหล่งของมะแขว่นใหญ่ๆ จะมาจาก จ.แม่ฮ่องสอน น่าน พะเยา และ เชียงราย แต่จากการที่เราอยู่ในอุตสาหกรรมนี้มานานจึงสามารถบอกได้ว่า ผลผลิตของมะแขว่นที่ดีที่สุดมาจาก อ.งาว จ.ลำปาง และ บ้านดอยฮาง อ.เมือง จ.เชียงราย แม้ว่าจะมีหลายๆแหล่งที่สามารถผลิตมะแขว่นได้ แต่ความเผ็ดและความหอมนั้นไม่สามารถสู้มะแขว่นแห้งที่มาจากทั้งสองแหล่งได้ แต่เป็นที่น่าเสียดายอย่างยิ่งว่า มะแขว่นดอยฮาง ในปัจจุบันนี้แทบไม่เหลือแล้ว เนื่องจาการบุกรุกแผ้วถางป่า ",
        "price":"500",
        "rating":"4.8",
        "stock":"50",
        "out_stock":"9,726",
        "user":{
            "profile":"../public/img/profile/profile.jpg",
            "username":"Pichaya Chantrasriwong",
            "time_post":"30",
        },
        "reviews":[
            {
                "id":"2",
                "client":"Na rak",
                "profile":"https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "img":[
                    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ],
                "comment":"สินค้าดีมาก อร่อย",
                "rating":"5.0"
            },
            {
                "id":"3",
                "client":"Jai Dee",
                "profile":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "img":[
                    "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                ],
                "comment":"เค็ม ขอข้าวหน่อย",
                "rating":"4.0"
            },
            {
                "id":"4",
                "client":"Waa Pai",
                "profile":"https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "img":[
                    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                ],
                "comment":"ดีเยื่ยม เอาไป 3 ดาว",
                "rating":"3.0"
            }
        ]
    })

    const numProducts = (detail) => {
        if (detail === "+") {
            setNumPro(numPro + 1);
        } else if (numPro > 1 && detail === "-") {
            setNumPro(numPro - 1);
        }
    };

    const nextSlide = (action) => {
        if (action === "prev" && numImg >= 1) {
            setNumImg((prevNum) => (prevNum - 1) % product.img.length);
        } else if (action === "next") {
            setNumImg((prevNum) => (prevNum + 1) % product.img.length);
        }
    };

    const changeMainImg = (index) => {
        setNumImg(index);
    };

    return (
        <div className="bg-slate-100 overflow-hidden relative">
            <p className="rotate-180 text-3xl cursor-pointer float-start absolute top-2 left-0 sm:text-2 z-50" onClick={() => navigate(-1)}>
                &#10145;
            </p>
            <div className="min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto">
                <div className="flex flex-wrap justify-center items-start w-full h-full p-2">

                    <h1 className='text-center text-xl font-bold my-2'>{product.title_cart}</h1>

                    {/* img */}
                    <div className='w-full sm:w-[600px] flex flex-col justify-center items-start sm:items-start gap-2'>
                        <div className="w-full h-[200px] sm:w-[500px] sm:h-[300px] mb-2 bg-white object-contain relative">
                            <button onClick={() => nextSlide("prev")} className="absolute top-1/2 transform -translate-y-1/2 left-2 rounded-md backdrop-blur-3xl text-white px-3 py-1">
                                Prev
                            </button>
                            <img src={product.img[numImg]} className="object-cover w-full h-full" alt={`Product ${numImg + 1}`} />
                            <button onClick={() => nextSlide("next")} className="absolute top-1/2 transform -translate-y-1/2 right-2 rounded-md backdrop-blur-3xl text-white px-3 py-1">
                                Next
                            </button>
                        </div>
                        <div className="w-full flex flex-wrap justify-start gap-1 mb-5">
                            {product.img.map((image, index) => (
                                <img key={index} src={image} alt={`Thumbnail ${index}`} className="h-16 w-16 object-cover border cursor-pointer" onClick={() => changeMainImg(index)} />
                            ))}
                        </div>
                    </div>

                    {/* details */}
                    <div className="w-[600px] border min-h-[300px] p-5 mb-2">
                        <h1 className="text-md font-bold">{product.title}</h1>
                        <p className="my-2 overflow-hidden text-xs sm:text-sm">{product.description}</p>
                        <p className="text-sm">
                            ราคา <b className="text-2xl text-red-500">{product.price}</b> บาท
                        </p>
                        <ul className="flex items-center gap-2 text-2xl text-orange-500">
                            <li>&#10030;</li>
                            <li className="text-xs">
                                {product.rating} / 5.0
                            </li>
                        </ul>
                        <p className="text-xs">
                            สินค้าเหลือ <b>{product.stock}</b> ชิ้น / ขายแล้ว <b>{product.out_stock}</b> ชิ้น
                        </p>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="flex justify-center items-center gap-5 my-2">
                                <p>จำนวนสินค้า</p>
                                <p onClick={() => numProducts("-")} className="cursor-pointer">
                                    &#9866;
                                </p>
                                <p>
                                    <b>{numPro}</b>
                                </p>
                                <p onClick={() => numProducts("+")} className="cursor-pointer">
                                    &#10010;
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-5 my-2">
                                <button className="border px-1 py-2 text-sm font-serif bg-slate-200 rounded-md hover:bg-slate-400">เพิ่มลงตะกร้า</button>
                                <Link to="/products/cart">
                                    <button className="border px-1 text-sm py-2 font-serif bg-slate-200 rounded-md hover:bg-slate-400">ซื้อสินค้า</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* employees */}
                    <div className="w-[600px] border min-h-[100px] p-5 mb-2 bg-gray-100">
                        <div className='flex justify-between items-center'>
                            <Link to="/profile">
                                <div className='flex justify-start items-center gap-2 p-1'>
                                <img className='cursor-pointer w-10 h-10 object-cover rounded-full border shadow-2xl overflow-hidden' src={product.user.profile} alt="profile" />
                                <div>
                                    <h1 className='text-sm'>{product.user.username}</h1>
                                    <h1 className='text-xs text-red-500 font-medium'>{product.user.time_post} นาที ที่ผ่านมา</h1>
                                </div>
                                </div>
                            </Link>
                            <Link to="/profile">
                                <button className='h-10 text-sm px-2 bg-gray-200 hover:bg-gray-300 cursor-pointer'>ดูโปรไฟล์</button>
                            </Link>
                        </div>
                    </div>

                    {/* review */}
                    <div className="w-[600px] border min-h-[100px] p-5 flex flex-col gap-5">
                        <h1 className="text-xl font-bold">Reviews</h1> 
                        {product.reviews.slice(0, showMoreReviews ? product.reviews.length : 2).map((review, index) => (
                            <div key={review.id} className="flex flex-col gap-3 border p-2">
                                <div className="flex flex-wrap gap-3">
                                    {review.img.map((image, idx) => (
                                        <>
                                            <img key={idx} src={image} alt={`Thumbnail ${index}`} onClick={()=>document.getElementById('my_modal_2').showModal()} className="h-24 w-24 object-cover border cursor-pointer rounded-md" /> 
                                            <dialog id="my_modal_2" className="modal">
                                                <div className="modal-box">
                                                    <img key={idx} src={image} alt={`Thumbnail ${index}`} className="h-full w-full object-cover border cursor-pointer rounded-md" /> 
                                                </div>
                                                <form method="dialog" className="modal-backdrop">
                                                    <button>close</button>
                                                </form>
                                            </dialog>
                                        </>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className='flex justify-start items-center gap-2'>
                                        <img className='cursor-pointer w-10 h-10 object-cover rounded-full border shadow-2xl overflow-hidden' src={review.profile} alt="profile" />
                                        <p className="text-lg font-bold">{review.client}</p>
                                    </div>
                                    <p className="text-gray-600 border p-2">{review.comment}</p>
                                    <div className="flex items-center">
                                        <p className="text-yellow-500">{review.rating}</p>
                                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))} 
                        {!showMoreReviews && product.reviews.length > 2 && (
                            // onClick={handleShowMoreReviews}
                            <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="text-blue-500 hover:underline">ดูเพิ่มเติม</button>
                        )}
                    </div>

                    {/* more reviews */}
 
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl relative">
                            <div className="modal-action absolute right-2 top-2 text-xl cursor-pointer">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div> 
                            <h1 className="text-xl font-bold my-5">Reviews</h1> 
                            {product.reviews.map((review, index) => (
                                <div key={review.id} className="flex flex-col gap-3 border p-2">
                                    <div className="flex flex-wrap gap-3">
                                        {review.img.map((image, idx) => (
                                            <>
                                                <img key={idx} src={image} alt={`Thumbnail ${index}`} onClick={()=>document.getElementById('my_modal_2').showModal()} className="h-24 w-24 object-cover border cursor-pointer rounded-md" /> 
                                                <dialog id="my_modal_2" className="modal">
                                                    <div className="modal-box">
                                                        <img key={idx} src={image} alt={`Thumbnail ${index}`} className="h-full w-full object-cover border cursor-pointer rounded-md" /> 
                                                    </div>
                                                    <form method="dialog" className="modal-backdrop">
                                                        <button>close</button>
                                                    </form>
                                                </dialog>
                                            </>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className='flex justify-start items-center gap-2'>
                                            <img className='cursor-pointer w-10 h-10 object-cover rounded-full border shadow-2xl overflow-hidden' src={review.profile} alt="profile" />
                                            <p className="text-lg font-bold">{review.client}</p>
                                        </div>
                                        <p className="text-gray-600 border p-2">{review.comment}</p>
                                        <div className="flex items-center">
                                            <p className="text-yellow-500">{review.rating}</p>
                                            <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}  
                        </div>
                    </dialog>
 
                </div> 
            </div>
        </div>
    );
};

export default ProductDetail;
