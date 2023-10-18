import React from 'react'
import img01 from "../assets/img01.png"
import img02 from "../assets/img02.png"
// import  search from "../assets/search.svg"


const ProductSell = () => {
  const Product_Items = [
    {
      title: "Abstract 3D",
      description: "There are many variations of passages of Lorem Ipsum",
     stock:"32 in stock",
     price:"$ 45.99",
     totalsales:"20",
     img:img01
    },
    {
      title: "Sarphens Illustration",
      description: "There are many variations of passages of Lorem Ipsum",
     stock:"32 in stock",
     price:"$ 45.99",
     totalsales:"20",
     img:img02
    },
   
    ];
  return (
    <>
    <div className='w-full h-fit bg-white shadow-2xl rounded-xl'>
 <div className='flex justify-between'>
  <h1 className='text-lg px-4 mt-6 font-bold text-gray-900'>Product Sell</h1>
  <div  className='flex p-5 gap-4 mr-2'>
        <div class=" relative  text-gray-600 ">
        <input class=" bg-[#d8b2d830] cursor-pointer h-8 lg:w-36 w-24 px-6  rounded-lg text-sm focus:outline-none"
          type="search"  placeholder="Search"/>
        <button type="submit" class="absolute left-1 top-0 mt-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
 </button>
      </div>
<select className='bg-[#d8b2d830] text-[10px] h-8 w-24 rounded-lg p-1 focus:outline-none'> 
<option selected >last 30 days</option>
<option >last 15 days</option>
</select>
 </div>
 </div>
 
           <div className='flex justify-between ' >
         <h3 className='text-xs font-semibold text-gray-400  px-4'>Product Name</h3>
         <div className='flex lg:space-x-16 lg:mr-4 mb-2 lg:px-4 space-x-4'>
        <h3 className='text-xs font-semibold text-gray-400'>Stock</h3>
        <h3 className='text-xs font-semibold text-gray-400'>Price</h3>
        <h3 className='text-xs font-semibold text-gray-400'>Total Sales</h3>
        </div>
      </div>
   <hr/>
     <div >
        {
          Product_Items.map((value,i)=>(
            <div key={i} className='flex lg:justify-between' >
              <div className='flex lg:flex-row flex-col lg:py-1 lg:items-center mt-2  gap-3 lg:ml-0 ml-4'>
                
              <img src={value.img} alt='abstract3d' className='w-16 h-12 rounded-lg lg:ml-4 ' />
              <div className='lg:mb-0 mb-4 flex flex-col '>
             <h2 className=' text-gray-900 font-semibold lg:text-base text-sm'>{value.title}
             </h2>
             <p className='text-xs '>{value.description}</p>
             </div>
             </div>
             <div className='flex lg:gap-12 lg:mr-16 gap-6 mr-2 items-center'>
                 <p className='text-xs font-semibold '>{value.stock}</p>
                 <p className='text-xs font-extrabold'>{value.price}</p>
                <p className='font-semibold text-xs'>{value.totalsales}</p>
                </div>
                </div>

          ))}
           </div>
    
  
    </div>
    
    
    
    
    </>
  )
}

export default ProductSell
