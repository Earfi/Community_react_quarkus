import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import FetchUserProfileNoLogin from '../../Function/FetchUserProfileNoLogin';
import FetchPostImg from '../../Function/Post/FetchPostImg';
import FetchAllPostsById from '../../Function/Post/FetchAllPostsById';

const Post_TempById = () => {
    const [postDot,setPostDot] = useState(false);

    const [data,setData] = useState([])
    const [profiles,setProfiles] = useState([])
    
    const [imgPost,setImgPost] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token"); 
          if (token) {
              const decodedToken = jwtDecode(token);
              const posts = await FetchAllPostsById(decodedToken.userId);
              const img = posts.map(img => FetchPostImg(img.id));
              const promises = posts.map(post => FetchUserProfileNoLogin(post.userId));
              const profiles = await Promise.all(promises);
              const images = await Promise.all(img);
              
              setData(posts);
              setImgPost(images);
              setProfiles(profiles);
          }


        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();

    }, []);
    
  const convertTimeToAgo = (timeString) => { 
    const postDate = new Date(timeString);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} นาทีที่ผ่านมา`;
    }
  
    const hours = Math.floor(minutes / 60);
    return `${hours} ชั่วโมงที่ผ่านมา`;
  }

  return (
    <>
        {data.map((post, index) => (
          <div key={post.id} className='w-full flex flex-col gap-3 bg-gray-100 h-auto p-5'>
            <div className='flex justify-between items-center relative'>
              <Link to="/profile">
                <div className='flex justify-start items-center gap-2 p-1'>
                  {profiles[index] ? (
                      <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src={profiles[index]} alt="profile" />
                  ) : (
                      <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src="../../../public/img/profile/profile-icon.png" alt="profile" />
                  )}
                  <div>
                    <h1 className='text-sm'>{post.fullName}</h1>
                    <h1 className='text-xs text-red-500 font-medium'>{convertTimeToAgo(post.create)}</h1>
                  </div>
                </div>
              </Link>
              <p onClick={() => setPostDot(!postDot)} className='absolute right-0 top-0 font-bold cursor-pointer hover:text-gray-400'>&#9776;</p>
              <ul className={`${postDot ? 'block':'hidden'} absolute h-32 w-28 right-0 top-6 bg-slate-400 flex flex-col justify-start p-2`}>
                <li className='cursor-pointer font-semibold hover:text-slate-300'>Edit</li> 
                <li className='cursor-pointer font-semibold hover:text-slate-300'>Report</li> 
              </ul>
            </div>
            <div className='w-full min-h-max flex flex-col gap-2'>
                <h1 className='text-md font-medium bg-white p-1'>{post.title}</h1>
                <div className='flex gap-2 w-full max-h-fit'>
                    {imgPost[index] ? (
                      <img className='cursor-pointer w-auto h-56 object-cover border shadow-2xl overflow-hidden' src={imgPost[index]} alt="img_post" /> 
                    ) : (
                      <></>
                    )}
                </div>
                <div className='flex sm:items-center flex-col sm:flex-row gap-3 sm:gap-8'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-6 h-6 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/like.png" alt="like_icon" />
                        <p className='text-xs text-blue-500 font-medium'>{post.likes} Likes</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-5 h-5 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/comment.png" alt="share_icon" />
                        <p className='text-xs text-gray-500 font-medium'>{post.comments} Comments</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-4 h-4 object-cover shadow-2xl' src="../public/img/icon/share.png" alt="share_icon" />
                        <p className='text-xs text-red-500 font-medium'>{post.shares} Shares</p>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <button className='text-xs sm:text-sm w-48 border text-white bg-blue-500 hover:bg-blue-300'>Like</button>
                    <button className='text-xs sm:text-sm w-48 border text-white bg-gray-500 hover:bg-gray-300'>Comments</button>
                    <button className='text-xs sm:text-sm w-48 border text-white bg-red-500 hover:bg-red-300'>Share</button>
                </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Post_TempById