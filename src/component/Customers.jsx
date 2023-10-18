import React from 'react'
import costomer from "../assets/costomer.png"
import   chart from "../assets/chart.png"


const Customers = () => {
  return (
  
    <>
    <div className='flex lg:flex-row flex-col mx-10 lg:gap-1 gap-6'>

   {/* customers chart */}
    <div className='lg:w-[750px] bg-white lg:h-[320px] w-80 shadow-lg rounded-xl'>
    <div className='pt-3 px-6 flex justify-between '>
      <div>
<h1 className='text-base font-semibold text-gray-900 '>Customers</h1>
<p className='text-[11px] text-gray-700'>Customers that buy products</p>
</div>
<select className='bg-[#d8b2d830] text-[10px] h-6 w-20 rounded-lg p-1 focus:outline-none'> 
<option selected >Quarterly</option>
<option >Yearly</option>
</select>
</div>
<img src={chart} alt='' className='lg:w-[700px] lg:h-60 lg:ml-6 lg:p-1 p-3 lg:mt-4'/>
  </div>

    {/* customer card */}
    <div className='w-72 bg-white lg:h-[320px] lg:ml-9 shadow-lg rounded-xl hover:scale-105'>
      <div className='pt-6 px-6'>
<h1 className='text-base font-semibold text-gray-900 '>Customers</h1>
<p className='text-[11px] text-gray-700'>Customers that buy products</p>
</div>
<img src={costomer} alt='' className='w-52 p-2 mx-8 mt-4' />
    </div>
    </div>
    </>
  )
}

export default Customers