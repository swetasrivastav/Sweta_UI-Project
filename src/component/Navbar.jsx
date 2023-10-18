import React from 'react'
import dashboard from "../assets/dashboard.png"
import dashicon from "../assets/dashicon.png"
import product from "../assets/product.png"
import customericon from "../assets/customericon.png"
import income from "../assets/income.png"
import promote from "../assets/promote.png"
import rightarrow from "../assets/rightarrow.svg"
import help from "../assets/help.png"
import downarrow from "../assets/downarrow.svg"
import image03 from "../assets/image03.png"



const Navbar = () => {
const nav = [
    {
      name: "Dashborad",
      img: dashicon,
     
    },
    {
      name: "Product",
      img: product,
     
    },
    {
      name: "Customers",
      img: customericon,
     
    },
    {
      name: "Income",
      img: income,
     
    },
    {
      name: "Promote",
      img: promote,
     
    },
    {
      name: "Help",
      img: help,
       },
  ];
  return (
    <>
    <div className=' flex gap-2 ml-6 mt-6 mb-10 cursor-pointer hover:scale-105 '>
    
       <img src={dashboard} alt='' className='w-5 h-5 mt-1'/>
      <h1 className='text-xl text-white font-semibold '>Dashboard</h1>
      </div>
    <ul className="flex flex-col text-white  gap-6">
          {nav.map((value,i) => (
            <li key={i}>
             <div className='flex justify-between mx-7 hover:bg-[#3b3e6fcf]  hover:h-9 hover:p-2 hover:rounded-lg'>
              <div className='flex gap-4 cursor-pointer  '>
          <img src={value.img} alt='' className='w-4 h-4 mt-1'/> 
            <p className='text-sm font-Poppins '>{value.name}</p> 
            </div>
            <div>

          <img src={rightarrow} alt='' className='w-3'/> 
            </div>
           
            </div>
     
             </li>
          ))}
        </ul>
   <div className='bg-[#3b3e6fcf] items-center mt-[350px] flex  w-52 mx-6 h-10  rounded-lg'>
   <div className="avatar ">
  <div className="w-8 h-8 rounded-full ml-4">
    <img src={image03} alt='' />
  </div>
    </div>
 <div className=' flex justify-between  '>
  <div className='ml-2'>

  <h2 className='text-white text-[11px]'>Evano</h2>
  <p className='text-white text-[9px]'>Project Manager</p>
  </div>
  <div>

<img src={downarrow} alt='' className='w-4 ml-14 mt-2 '/> 
  </div>
</div>

    
   </div>
    

 
      </>

  )
}

export default Navbar