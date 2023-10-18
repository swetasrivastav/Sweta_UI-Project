import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import dashboard from "../assets/dashboard.png"
import dashicon from "../assets/dashicon.png"
import product from "../assets/product.png"
import customericon from "../assets/customericon.png"
import income from "../assets/income.png"
import promote from "../assets/promote.png"
import rightarrow from "../assets/rightarrow.svg"
import help from "../assets/help.png"

const MobileNavbar = () => {
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
  const [open, setOpen] = useState(false);

  return (

    <>
    <div className="mt-4 mr-8 bg-slate-200">
  <Bars3Icon
          className="w-8 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
       <div
       className={`fixed flex flex-col  top-0 right-0 bg-[#030333] h-screen transition-all duration-200 ease-out ${
         open ? "w-60" : "w-0"
       }`}
     >
       <div className="border-b flex justify-end text-white p-6 py-4">
         <XMarkIcon
           className="w-6 cursor-pointer"
           onClick={() => setOpen(false)}
         />
       </div>
       <div className="flex  mt-8 ml-6  gap-2 hover:scale-105">
       <img src={dashboard} alt='' className='w-5 h-5 mt-1'/>

       <h1 className='text-lg text-white '>Dashboard</h1>
       </div>
     <ul className=" flex flex-col  text-sm gap-4 font-semibold cursor-pointer p-7  text-white">
     {nav.map((value,i) => (
            <li key={i}>
              <div className='flex justify-between hover:bg-[#3b3e6fcf]  hover:h-9 hover:p-2 hover:rounded-lg  '>
              <div className='flex gap-4 '>
          <img src={value.img} alt='' className='w-4 h-4 mt-1'/> 
            <p className='text-sm'>{value.name}</p> 
             </div>
             <div>
          <img src={rightarrow} alt='' className='w-3'/> 

             </div>
             </div>
             </li>
          ))}
     
       </ul>
        </div>
     </>
  )
}

export default MobileNavbar