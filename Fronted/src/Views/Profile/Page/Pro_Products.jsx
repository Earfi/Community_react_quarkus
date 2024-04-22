import React from 'react' 
import Items from '../../../Components/Products/Items'

const Pro_Products = () => {
  return (
    <div>
        <h1 className='text-center text-md'>4 Products</h1>
        <div className='flex flex-wrap gap-5 mt-5'>
            <Items/>
        </div>
    </div>
  )
}

export default Pro_Products