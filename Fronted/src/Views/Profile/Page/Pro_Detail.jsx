import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import FetchUserById from '../../../Function/FetchUserById';

const Pro_Detail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const inputRef = useRef(null); 
    const [image, setImage] = useState(null);

    // User Detail
    const [profile, setProfile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchData = async (id) => {
          try {
            const data = await FetchUserById(id);
            setInfo(data); 
            setProfile(data.profile);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        if(id){
            fetchData(id);
            return
        }
        if (token) {
            const decodedToken = jwtDecode(token);
            fetchData(decodedToken.userId);
            return
        }
  
      }, []);

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
    
        Swal.fire({
          title: "Logout successfully",
          text: "Bye Bye!!!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1100);
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
                <span className="text-gray-800">{info.firstName}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">นามสกุล: </label>
                <span className="text-gray-800">{info.lastName}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">ชื่อเล่น: </label>
                <span className="text-gray-800">{info.nickName}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">เพศ: </label>
                <span className="text-gray-800">{info.gender}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">อายุ: </label>
                <span className="text-gray-800">{info.age}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">วันเกิด: </label>
                <span className="text-gray-800">{info.birthdate}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">อีเมล: </label>
                <span className="text-gray-800">{info.email}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">กิตฮับ: </label>
                <span className="text-gray-800">{info.github}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">เบอร์โทร: </label>
                <span className="text-gray-800">{info.phone}</span>
            </div>
        </div>
        <div className="w-full h-full p-5 bg-gray-100 border my-2 grid grid-cols-1 gap-3">
            <div className="mb-2 flex gap-2 items-center">
                <label className="block text-gray-600 font-bold">ที่อยู่: </label>
                <span className="text-gray-800">{info.address}</span>
            </div>
            {/* <Link to="/" onClick={logout} className={`text-white border-2 p-2 bg-red-500 hover:bg-red-800 w-[100px] mx-auto text-center cursor-pointer text-xs`}>
                LOGOUT
            </Link> */}
        </div>
    </div>
  )
}

export default Pro_Detail