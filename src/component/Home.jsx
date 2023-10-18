import React from 'react'
import earningicon from "../assets/earningicon.png"
import ordericon from "../assets/ordericon.png"
import balanceicon from "../assets/balanceicon.png"
import salesicon from "../assets/salesicon.png"

import arrowicon from "../assets/arrowicon.png"
import downarrowicon from "../assets/downarrowicon.png"
import Customers from './Customers'
import ProductSell from './ProductSell'


const Home = () => {
  return (
    <>
    <div className=' flex lg:justify-between lg:mx-10 lg:mt-0 mt-16 ml-10 '>
     <h1 className='text-xl font-medium text-gray-900 my-6'>Hello Sweta 👋</h1>
     
     <div class=" relative  mt-6 text-gray-600 ">
        <input class=" bg-white shadow-md cursor-pointer h-8 w-32 lg:w-44 px-6  rounded-sm text-sm focus:outline-none"
          type="search"  placeholder="Search"/>
        <button type="submit" class="absolute left-1 top-0 mt-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
 </button>
      </div>
   </div>
    <div className='flex lg:flex-row flex-col lg:mx-10  ml-16 gap-6 '>
      {/* 1st cart */}
          <div className='w-64  bg-white shadow-lg rounded-md flex gap-2 px-3 hover:scale-105 '> 
          <img src={earningicon} alt='' className='w-24 py-8 px-1 '/>
          <div className='mt-10'>
            <h3 className='text-xs font-normal' >Eraning</h3>
            <h1 className='text-xl font-bold'>$198k</h1>
            <div className='flex'>
            <img src={arrowicon} alt='' className='w-3 px-0.5 py-1'/>
         <p className='text-sm font-medium'><span className='text-green-500 font-bold'>37.8%</span>this month</p>
            </div>
          </div>
          </div>
          {/* 2nd cart */}
          <div className='w-64  bg-white shadow-lg rounded-md flex gap-2 px-3 hover:scale-105'> 
          <img src={ordericon} alt='' className='w-24 py-8 px-1 '/>
          <div className='mt-10'>
            <h3 className='text-xs font-normal' >Eraning</h3>
            <h1 className='text-xl font-bold'>$2.4k</h1>
            <div className='flex'>
            <img src={downarrowicon}  alt='' className='w-3 px-0.5 py-1'/>
         <p className='text-sm font-medium'><span className='text-red-500 font-bold'>2%</span>this month</p>
            </div>
          </div>
          </div>
          {/* 3rd card */}
          <div className='w-64  bg-white shadow-lg rounded-md flex gap-2 px-3 hover:scale-105'> 
          <img src={balanceicon} alt='' className='w-24 py-8 px-1 '/>
          <div className='mt-10'>
            <h3 className='text-xs font-normal' >Eraning</h3>
            <h1 className='text-xl font-bold'>$2.4k</h1>
            <div className='flex'>
            <img src={downarrowicon} alt='' className='w-3 px-0.5 py-1 '/>
         <p className='text-sm font-medium'><span className='text-red-500 font-bold'>2%</span>this month</p>
            </div>
          </div>
          </div>
          {/* 4th card */}
          <div className='w-64  bg-white shadow-lg rounded-md flex gap-2 px-3 hover:scale-105'> 
          <img src={salesicon} alt='' className='w-24 py-8 px-1 '/>
          <div className='mt-10'>
            <h3 className='text-xs font-normal' >Eraning</h3>
            <h1 className='text-xl font-bold'>$89k</h1>
            <div className='flex'>
            <img src={arrowicon} alt='' className='w-3 px-0.5 py-1'/>
         <p className='text-sm font-medium'><span className='text-green-500 font-bold'>11%</span>this month</p>
            </div>
            
          </div>
          </div>
           </div>
            <div className='mt-6'>
              <Customers/>
          </div>
        <div className='lg:mx-10 mt-6 mb-4 '> 
          <ProductSell/>
          </div> 
    </>
  )
}

export default Home