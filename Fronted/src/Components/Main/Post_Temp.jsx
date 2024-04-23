import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Post_Temp = () => {
    const [postDot,setPostDot] = useState(false);

    const [infoPost,setInfoPost] = useState([
      {
        "id" : "1",
        "profile" : "../public/img/profile/profile.jpg",
        "username" : "Pichaya Chantrasriwong",
        "time_post" : "30", 
        "title_post" : "I am Batman ??",
        "img_post": "../public/img/batman.jpg",
        "likes_post": "210",
        "comments_post": "12",
        "shares_post": "5",
        
      },
      {
        "id" : "2",
        "profile" : "../public/img/2009-BMW-HP2-Sport.jpg",
        "username" : "Pichaya Chantrasriwong",
        "time_post" : "45", 
        "title_post" : "BMW HP2 SPORT ",
        "img_post": "../public/img/2009-BMW-HP2-Sport.jpg",
        "likes_post": "359",
        "comments_post": "25",
        "shares_post": "32",
      }
    ]) 
  return (
    <>
        {infoPost.map((post, index) => (
          <div key={post.id} className='w-full flex flex-col gap-3 md:w-[600px] bg-gray-100 h-full min-h-[420px] p-5 overflow-hidden'>
            <div className='flex justify-between items-center relative'>
              <Link to="/profile">
                <div className='flex justify-start items-center gap-2 p-1'>
                  <img className='cursor-pointer w-10 h-10 object-cover rounded-full border shadow-2xl overflow-hidden' src={post.profile} alt="profile" />
                  <div>
                    <h1 className='text-sm'>{post.username}</h1>
                    <h1 className='text-xs text-red-500 font-medium'>{post.time_post} นาที ที่ผ่านมา</h1>
                  </div>
                </div>
              </Link>
              <p onClick={() => setPostDot(!postDot)} className='absolute right-0 top-0 font-bold cursor-pointer hover:text-gray-400'>&#9776;</p>
              <ul className={`${postDot ? 'block':'hidden'} absolute h-32 w-28 right-0 top-6 bg-slate-400 flex flex-col justify-start p-2`}>
                <li className='cursor-pointer font-semibold hover:text-slate-300'>Edit</li> 
                <li className='cursor-pointer font-semibold hover:text-slate-300'>Report</li> 
              </ul>
            </div>
            <div className='w-full h-full flex flex-col gap-2'>
                <h1 className='text-md font-medium bg-white p-1'>{post.title_post}</h1>
                <div className='flex gap-2 w-full'>
                    <img className='cursor-pointer w-auto h-56 object-cover border shadow-2xl overflow-hidden' src={post.img_post} alt="img_post" /> 
                </div>
                <div className='flex sm:items-center flex-col sm:flex-row gap-3 sm:gap-8'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-6 h-6 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/like.png" alt="like_icon" />
                        <p className='text-xs text-blue-500 font-medium'>{post.likes_post} Likes</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-5 h-5 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/comment.png" alt="share_icon" />
                        <p className='text-xs text-gray-500 font-medium'>{post.comments_post} Comments</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-4 h-4 object-cover shadow-2xl' src="../public/img/icon/share.png" alt="share_icon" />
                        <p className='text-xs text-red-500 font-medium'>{post.shares_post} Shares</p>
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

export default Post_Temp