import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <>
    <div className='w-11/12  h-20 flex items-center justify-between mx-auto'>
    {/* Logo */}
    <div>
        <h1 className='text-3xl font-bold text-skin-primaryBlue'>Sora</h1>
    </div>
    {/* Menus */}
   
        <ul className='flex items-center justify-between space-x-8 text-xl font-medium'>
            <li ><button class="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
      <span class="relative z-10">Slide hover</span>
    </button></li>
            <li>Availability</li>
            <li>Research</li>
        </ul>
   
    {/* Search Button */}
    <div className='flex space-x-5 text-xl font-bold'>
    <i class="ri-search-line"></i>
    <i class="ri-menu-4-line text-skin-primaryBlue"></i>
    </div>
    </div>
    </>
  )
}

export default Navbar