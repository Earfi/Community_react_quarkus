import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Swal from "sweetalert2"; 
import { jwtDecode } from "jwt-decode";
import getUserProfile from '../../../Function/UserProfile';

const Navbar = () => {
    const location = useLocation();

    const [openBar,setOpenBar] = useState(false);
    const [openSearch,setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const [path, setPath] = useState(location.pathname);

    // login
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState("");

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem("token"); 
                if (token) {
                    setToken(token);
                    const decodedToken = jwtDecode(token);
                     
                    const userProfile = await getUserProfile(decodedToken.userId);
                    setProfile(userProfile);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };
        
        fetchUserProfile();
    }, []);

    useEffect(() => { 
        setPath(location.pathname);
    }, [location.pathname]);

    const [itemSearchProducts,setItemSearchProducts] = useState([
        "น้ำยาถูพื้น",
        "รถถัง",
        "น้ำส้ม",
        "คอมพิวเตอร์",
        "ยา",
        "หมอน",
        "เสื้อ",
        "กางเกง"
    ])

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
        }, 1500);
    };
    
    const [itemSearchPosts,setItemSearchPosts] = useState([
        "1:12",
        "1:12",
        "1:12",
        "1:12",
        "1:12",
        "1:12",
        "1:12",
        "1:12"
    ])

  return (
    <div className='h-16 w-full overflow-x-clip z-50'>
        <nav className='h-full w-full bg-gradient-to-r from-blue-300 to-green-500 relative'>
            <div className='w-full h-full flex justify-between items-center px-5 sm:px-20 relative'>
                <div>
                    <input onClick={() => setOpenSearch(!openSearch)}
                        type="text" 
                        onChange={(e) => setSearchValue(e.target.value)}
                        className={`w-32 lg:w-56 h-10 rounded-md p-1`} 
                        placeholder={path.includes("products") ? 'Search Products ...' : 'Search Post ...'}
                    /> 
                    <div className={`absolute ${openSearch && !path.includes("product")  ? 'h-96' : 'h-[0]'} top-16 transition-all duration-700 w-56 bg-white z-[60] overflow-hidden border shadow-2xl`}>
                        {itemSearchPosts
                            .filter(item => item.includes(searchValue))
                            .map((i, index) => (
                                <div className='flex flex-col items-center justify-center gap-2 p-2' key={index}>
                                    <p className='h-8 bg-white w-full text-center border-b-2 p-1 cursor-pointer text-md font-medium hover:bg-gray-100'>{i}</p>
                                </div>
                            ))
                        } 
                    </div> 
                    <div className={`absolute ${openSearch && path.includes("product")  ? 'h-96' : 'h-0'} top-16 transition-all duration-700 w-56 bg-white z-[60] overflow-hidden border shadow-2xl`}>
                        {itemSearchProducts
                            .filter(item => item.includes(searchValue))
                            .map((i, index) => (
                                <div className='flex flex-col items-center justify-center gap-2 p-2' key={index}>
                                    <p className='h-8 bg-white w-full text-center border-b-2 p-1 cursor-pointer text-md font-medium hover:bg-gray-100'>{i}</p>
                                </div>
                            ))
                        } 
                    </div> 
                </div>

                {/* cart and profile */}
                <div className='h-full hidden md:block'>
                    <ul className='w-full h-full flex justify-around items-center gap-10 lg:gap-20 font-bold text-sm lg:text-xl'>
                        <li className={`${!path.includes("products") ? 'text-white border-b-2' : 'text-black border-none'} cursor-pointer hover:text-gray-300`}><Link to="/">Home</Link></li>
                        <li className={`${path.includes("products") ? 'text-white border-b-2' : 'text-black border-none'} cursor-pointer hover:text-gray-300`}><Link to="/products">Products</Link></li> 
                        <li>
                            <Link  to="/products/carts" className='relative'>
                                <img className='cursor-pointer w-8 h-8 object-cover overflow-hidden' src="../../../public/img/icon/cart.png" alt="profile" />
                                <h1 className='absolute bottom-5 left-6 w-6 h-6 bg-red-500 text-white flex justify-center items-center rounded-full text-lg'>3</h1>
                            </Link>
                        </li>
                        {token !== null ? (
                            <>
                                {!profile || profile == null ? (
                                    <Link to="/profile">
                                    <img
                                        className={`${
                                            token == null ? "hidden" : "block"
                                        } hover:text-orange-400 text-xs sm:text-sm h-12 w-12 object-cover bg-white rounded-full`}
                                        src="../../../public/img/profile//profile-icon.png"
                                        alt=""
                                        />
                                    </Link>
                                ) : (
                                    <Link to="/profile">
                                    <img
                                        className={`${
                                            token == null ? "hidden" : "block"
                                        } hover:text-orange-400 text-xs sm:text-sm h-12 w-12 object-cover bg-white rounded-full`}
                                        src={profile}
                                        alt=""
                                        />
                                    </Link>
                                )}
                              </>
                        ):
                        (
                            <Link to="/login">
                                <h1 className={`${ token == null ? "block" : "hidden" } hover:text-orange-400 text-xl sm:text-sm`}>LOG IN</h1>
                            </Link>
                        )}
                    </ul>
                </div>

                {/* cart and burger */}
                <div className='h-full flex items-center gap-5 sm:gap-10 md:hidden'>
                    <Link  to="/" className='relative'>
                        <img className='cursor-pointer w-8 h-8 object-cover overflow-hidden' src="../../../public/img/icon/cart.png" alt="profile" />
                        <h1 className='absolute bottom-5 left-6 w-6 h-6 bg-red-500 text-white flex justify-center items-center rounded-full text-lg'>3</h1>
                    </Link>
                    <h1 onClick={() => setOpenBar(!openBar)} className="text-4xl cursor-pointer">
                        &#9776;
                    </h1> 
                </div>

                {/* navbar open when small responsive */}
                <div className={`absolute block md:hidden w-52 h-screen top-16 ${openBar ? 'right-0' : 'right-[-100%]'} transition-all duration-700 bg-gray-600 z-50`}>
                    <ul className='w-full h-full flex flex-col justify-start items-center gap-10 font-bold p-5 text-white'>
                        {token !== null ? (
                            <>
                                {!profile || profile == null ? (
                                    <Link to="/profile">
                                    <img
                                        className={`${
                                            token == null ? "hidden" : "block"
                                        } hover:text-orange-400 text-xs sm:text-sm h-12 w-12 object-cover bg-white rounded-full`}
                                        src="../../../public/img/profile//profile-icon.png"
                                        alt=""
                                        />
                                    </Link>
                                ) : (
                                    <Link to="/profile">
                                    <img
                                        className={`${
                                            token == null ? "hidden" : "block"
                                        } hover:text-orange-400 text-xs sm:text-sm h-12 w-12 object-cover bg-white rounded-full`}
                                        src={profile}
                                        alt=""
                                        />
                                    </Link>
                                )}
                            </>
                        ):
                        (
                            <Link to="/login">
                                <h1 className={`${ token == null ? "block" : "hidden" }text-white cursor-pointer hover:text-red-300`}>LOG IN</h1>
                            </Link>
                        )}
                        <li className={`${!path.includes("products") ? 'text-red-500 border-b-2' : 'text-black border-none'} text-white cursor-pointer hover:text-red-300`}><Link to="/">Home</Link></li>
                        <li className={`${path.includes("products") ? 'text-red-500 border-b-2' : 'text-black border-none'} text-white cursor-pointer hover:text-red-300`}><Link to="/products">Products</Link></li>
                        <li className={`${path.includes("about") ? 'text-red-500 border-b-2' : 'text-black border-none'} text-white cursor-pointer hover:text-red-300`}><Link to="/">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar