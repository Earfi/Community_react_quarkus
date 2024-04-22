import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Pro_Detail = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [profile, setProfile] = useState(null);

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

  return (
    <div>
        <div className="w-full flex flex-col justify-center z-40">
            <div onClick={() => handleImageClick} className="w-full">
                <>
                    {image? (
                        <img 
                        className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover mx-auto border-4 border-black rounded-full "
                        src={URL.createObjectURL(image)}
                        alt="profile img"
                        />
                    ) : (
                        <img
                        className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover mx-auto border-4 border-black rounded-full"
                        src={profile || "../../../public/img/profile//profile-icon.png"}
                        alt="profile img"
                        />
                    )} 
                </>
            </div>

            <div className="flex justify-center items-center"> 
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleImageChange}
                    className="my-5 text-xs bg-gray-100 border mx-auto w-20"
                    />
                <button
                    onClick={() => null}
                    className="w-28 mx-auto px-2 py-1 bg-red-500 text-white font-bold text-xs rounded-xl hover:bg-red-800 cursor-pointer"
                    >
                    UPDATE PROFILE
                </button>
            </div>
        </div>

        {/* info */} 
        <div className="w-full h-full p-5 bg-gray-100 border my-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">ชื่อ: </label>
                <span className="text-gray-800">Pichaya</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">นามสกุล: </label>
                <span className="text-gray-800">Chantrasriwong</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">อายุ: </label>
                <span className="text-gray-800">20</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">วันเกิด: </label>
                <span className="text-gray-800">27/06/2546</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">อีเมล: </label>
                <span className="text-gray-800">pichaya8442@gmail.com</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">กิตฮับ: </label>
                <span className="text-gray-800">Earfi</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">เบอร์โทร: </label>
                <span className="text-gray-800">082214XXXX</span>
            </div>
        </div>
        <div className="w-full h-full p-5 bg-gray-100 border my-2 grid grid-cols-1 gap-3">
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">ที่อยู่: </label>
                <span className="text-gray-800">address</span>
            </div>
            <Link to="/" className={`text-white border-2 p-2 bg-red-500 hover:bg-red-800 w-[100px] mx-auto text-center cursor-pointer text-xs`}>
                LOGOUT
            </Link>
        </div>
    </div>
  )
}

export default Pro_Detail