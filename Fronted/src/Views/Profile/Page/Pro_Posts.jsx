import React from 'react'
import Post_Temp from '../../../Components/Main/Post_Temp'

const Pro_Posts = () => {
  return (
    <div>
        <h1 className='text-center text-md'>2 Posts</h1>
        <div className='flex flex-wrap gap-5 mt-5'>
            <Post_Temp/>
        </div>
    </div>
  )
}

export default Pro_Posts