import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import FetchAllPosts from '../../Function/Post/FetchAllPosts';

const Post_Temp = () => {
  const [loading, setLoading] = useState(false);
  const [subStates, setSubStates] = useState({});
  const [postDot, setPostDot] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const posts = await FetchAllPosts();
        setData(posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const subscribe = (postId) => {
    setSubStates((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));

    const isSubscribed = subStates[postId];

    const message = isSubscribed ? 'unFollow successfully' : 'Follow successfully';

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: message,
    });
  };

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
  };

  return (
    <>
      {loading ? (
        <div className="loader flex justify-center items-center h-full w-full">
          <img src="../../../public/img/story/story4.jpg" alt="" />
        </div>
      ) : (
        <>
          {data.map((post, index) => (
            <div key={post.id} className="w-full flex flex-col gap-3 bg-gray-100 h-auto p-5">
              <div className="flex justify-between items-center relative">
                <Link to={`/profile/${post.userId}`}>
                  <div className="flex justify-start items-center gap-2 p-1">
                    {post.profile ? (
                      <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src={post.profile} alt="profile" />
                    ) : (
                      <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src="../../../public/img/profile/profile-icon.png" alt="profile" />
                    )}
                    <div>
                      <h1 className="text-sm">{post.fullName}</h1>
                      <h1 className="text-xs text-red-500 font-medium">{convertTimeToAgo(post.create)}</h1>
                    </div>
                  </div>
                </Link>
                <button onClick={() => subscribe(post.id)} className="text-xs border mr-10 p-1 bg-black text-white font-sans hover:bg-gray-800 cursor-pointer">
                  {subStates[post.id] ? 'unFollow -' : 'Follow +'}
                </button>
                <p onClick={() => setPostDot(!postDot)} className="absolute right-0 top-0 font-bold cursor-pointer hover:text-gray-400">&#9776;</p>
                <ul className={`${postDot ? 'block' : 'hidden'} absolute h-32 w-28 right-0 top-6 bg-slate-400 flex flex-col justify-start p-2`}>
                  <li className="cursor-pointer font-semibold hover:text-slate-300">Edit</li>
                  <li className="cursor-pointer font-semibold hover:text-slate-300">Report</li>
                </ul>
              </div>
              <div className="w-full min-h-max flex flex-col gap-2">
                <h1 className="text-md font-medium bg-white p-1">{post.title}</h1>
                <div className="flex gap-2 w-full max-h-fit">
                  {post.imageUrl && (
                    <>
                      <img key={post.id} src={post.imageUrl} alt={`Thumbnail ${post.id}`} onClick={() => document.getElementById('my_modal_2').showModal()} className="cursor-pointer w-full sm:h-72 object-cover border shadow-2xl overflow-hidden" />
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                          <img key={post.id} src={post.imageUrl} alt={`Thumbnail ${post.id}`} className="cursor-pointer w-full sm:h-72 object-cover border shadow-2xl overflow-hidden" />
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </>
                  )}
                </div>
                <div className="flex sm:items-center flex-col sm:flex-row gap-3 sm:gap-8">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <img className="w-6 h-6 object-cover shadow-2xl overflow-hidden" src="../public/img/icon/like.png" alt="like_icon" />
                    <p className="text-xs text-blue-500 font-medium">{post.likes} Likes</p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center"></div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Post_Temp;
