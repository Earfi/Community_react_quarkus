import { useState } from 'react'
import './App.css'  
import Post_Temp from './Components/Main/Post_Temp'
import Story from './Components/Main/Story'
import { useNavigate } from 'react-router-dom';
import FetchAddPosts from './Function/Post/FetchAddPosts';

function App() { 
  const navigate = useNavigate();


  const [openPost,setOpenPost] = useState(false)
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const post = () => {
    const token = localStorage.getItem("token");
    if(token){
      setOpenPost(!openPost)
    }else{
      navigate('/login'); 
    }  
  }

  const postPost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', image);
      const res = await FetchAddPosts(formData);

    } catch (error) {
        console.error("Error Post data:", error);
    }

  }


  return (
    <div className={`w-full overflow-y-auto relative h-screen border pb-16`}>
      
        <>
          <div className='h-full w-full overflow-y-auto transition-all duration-700  flex flex-col gap-5 p-3 sm:px-10 sm:pb-16 mx-auto '>
            
            {/* Story */}
            {/* <Story/> */}
            {/* Post */}

            <div className='relative'>
              <p onClick={() => post()} type="text" className='w-full h-10 border rounded-md p-2 text-gray-500'>Post Something ...</p>
              <img className=' absolute top-2 right-3 sm:right-8 cursor-pointer w-7 h-7 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/img.png" alt="img-logo" />
            </div>
            
            <Post_Temp/> 

          </div>

            {/* Post Add Relative */}
            <div className={`absolute h-screen w-full backdrop-blur-3xl ${openPost ? 'top-0' : 'top-[-100%]'} left-0 right-0 bottom-0 flex justify-center items-start pt-20 transition-all duration-700`}>
            <div className='h-96 w-full sm:w-[500px] bg-white px-5 pt-16 rounded-xl flex flex-col gap-2 relative'>
              <p onClick={() => setOpenPost(!openPost)} className='absolute right-2 top-2 text-xl cursor-pointer'>&#10006;</p>
              <input 
                onChange={e => setTitle(e.target.value)}
                className='w-full h-10 border p-1 rounded-lg shadow-sm resize-none' 
                type="text" 
                placeholder='Title ...' 
              />


              <div className='w-full flex-col sm:flex-row flex sm:justify-between sm:items-center gap-3'>
                <div className='flex items-center gap-2'>
                  <img className='cursor-pointer w-7 h-7 object-cover shadow-2xl overflow-hidden' src="../public/img/icon/img.png" alt="img-logo" />
                  {/* <p className='text-sm'>Choose your images</p> */}
                  <input type="file" onChange={e => setImage(e.target.files[0])} />
                </div>
                <button className='border px-2 py-1'>ความรู้สึก</button>
              </div>
              <button onClick={() => postPost()} className='w-[90%] mx-auto bg-gray-300 font-bold text-white py-2 rounded-md hover:bg-gray-500 bottom-5 left-0 right-0 absolute'>POST</button>
            </div>
          </div>
        </>
    </div>
  )
}

export default App
