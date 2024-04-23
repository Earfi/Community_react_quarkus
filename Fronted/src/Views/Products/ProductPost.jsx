import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPost = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    title_cart: '',
    title: '',
    description: '',
    img: '',
    category: '',
    weight: '',
    dimensions: '',
    stock: 0,
    price: 0,
    outOfStock: false,
    createdAt: null,
    updatedAt: null,
    rating: null,
    reviews: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = () => { 
    console.log(productData);
  };

  return (
    <div className='bg-slate-100 overflow-hidden relative'>  
      <p className='rotate-180 text-3xl cursor-pointer float-start absolute top-2 left-0 sm:text-2' onClick={() => navigate(-1)}>&#10145;</p>
      <div className='min-h-[100vh] h-full w-full flex flex-col gap-5 md:w-[700px] p-3 sm:p-10 bg-white mx-auto'>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-md font-semibold mb-6">Add Product</h1>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label htmlFor="title_cart" className="block text-sm font-medium text-gray-700">Title (Cart)</label>
              <input type="text" name="title_cart" id="title_cart" value={productData.title_cart} onChange={handleChange} placeholder='ใช้แสดงชื่อสินค้าหน้าตัวอย่าง' className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" name="title" id="title" value={productData.title} onChange={handleChange} placeholder='ชื่อสินค้า' className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea 
                name="description" 
                id="description" 
                value={productData.description} 
                onChange={handleChange} 
                placeholder='รายละเอียดสินค้า'
                className="p-1 h-96 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-y"
                required>
              </textarea>
            </div>
            <div className="mb-4"> 
              <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image (Max 5 Images)</label>
              <input type="file" name="img" id="img" value={productData.img} onChange={handleChange} className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" multiple/>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <input type="text" name="category" id="category" value={productData.category} onChange={handleChange} placeholder='หมวดหมู่สินค้า' className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
              <input type="text" name="weight" id="weight" value={productData.weight} onChange={handleChange} placeholder='น้ำหนักสินค้า' className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">Dimensions (W x H)</label>
              <input type="text" name="dimensions" id="dimensions" value={productData.dimensions} onChange={handleChange} placeholder='ขนาดสินค้า กว้าง X ยาว' className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
              <input type="number" name="stock" id="stock" value={productData.stock} onChange={handleChange} className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" name="price" id="price" value={productData.price} onChange={handleChange} className="p-1 h-10 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
            </div>
            {/* <div className="mb-4">
              <label htmlFor="outOfStock" className="block text-sm font-medium text-gray-700">Out of Stock</label>
              <input type="checkbox" name="outOfStock" id="outOfStock" checked={productData.outOfStock} onChange={handleChange} className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            </div> */} 
            <button type="button" onClick={handleSubmit} className="w-full bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md">POST</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPost;
