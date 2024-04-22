import React from 'react'

const ProductCart = () => {
  return (
    <div className='bg-slate-100 overflow-hidden'>  
        <div className='min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto'>
            <div className="w-full h-full bg-white">
                <div className="h-full mx-auto"> 
                    <div className="flex justify-around items-center pb-5">
                        <h1 className="text-md font-serif pt-16">สินค้าทั้งหมด</h1>
                        <h1 className="text-md font-serif pt-16">ทั้งหมด <span className="font-bold text-red-500">3</span> ชิ้น</h1>
                    </div>
                    <div className="w-full h-fit bg-slate-100 p-1 flex flex-col gap-2 py-2 items-center justify-center">

                    </div>
                    <div className="w-full bg-white h-20 flex items-center justify-end gap-10 pr-10">
                        <h1 className="font-bold">ทั้งหมด <span className="text-red-500">102,000</span> บาท</h1>
                        <button className="bg-red-500 px-3 text-sm h-9 rounded-md font-bold text-white hover:bg-red-800">ชำระเงิน</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart