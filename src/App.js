import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import MobileNavbar from './component/MobileNavbar'


const App = () => {
  return (
    <div className='flex bg-[#f2f2f214] '>
      <div className='w-64  bg-[#030333] hidden lg:block'>
       <Navbar/> 
      </div>
      <div className='overflow-x-hidden overflow-y-hidden'>
         <Home/>
      </div>
   <div className='lg:hidden  '>
      <MobileNavbar/>
      </div>
     
     </div>
  )
}

export default App