import React, { useState } from 'react'

const Story = () => {
    // const [story,setStory] = useState([])
    const [story,setStory] = useState([
        {
          "image":"../public/img/story/story1.jpg",
          "username":"Pichaya Chantrasriwong",
          "profile":"../public/img/story/profile1.jpg"
        },
        {
          "image":"../public/img/story/story2.jpg",
          "username":"Somchai Jaidee",
          "profile":"../public/img/story/profile2.jpg"
        },
        {
          "image":"../public/img/story/story3.jpg",
          "username":"Sompong Thongdee",
          "profile":"../public/img/story/profile3.jpg"
        },
        {
          "image":"../public/img/story/story4.jpg",
          "username":"Lomphong Manee",
          "profile":"../public/img/story/profile4.jpg"
        }
    ])

  return (
    <div className='w-full min-h-32 bg-gray-100 p-1 overflow-x-auto flex gap-5'>
        {story.map((s,index) => (
          <div key={index} className='relative h-full w-20 bg-white rounded-xl overflow-hidden'>
            <img className='absolute top-1 left-1 w-8 h-8 rounded-full object-cover border shadow-2xl' src={s.profile} alt="profile" />
            <img className='w-full h-full object-cover' src={s.image} alt="story" />
            <p className='absolute bottom-1 left-1 text-sm font-bold text-white shadow-2xl'>{s.username}</p>
          </div>
        ))}
    </div> 
  )
}

export default Story