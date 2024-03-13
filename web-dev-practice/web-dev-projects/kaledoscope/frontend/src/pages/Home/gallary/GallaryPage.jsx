import React from 'react'
import history from '../../../assets/history.jpg'
import band from '../../../assets/band.jpg'
import guitar from '../../../assets/guitar.jpg'
import nabin from '../../../assets/nabin.jpg'
import vocal from '../../../assets/vocal.jpg'
import hero from '../../../assets/hero.jpg'
import team from '../../../assets/team.jpg'
import jam from '../../../assets/jam.jpg'

const GallaryPage = () => {
  return (
    <>
    {/* <!-- Masonry Cards --> */}
<div className="w-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-56 bg-slate-50">
<div className='text-center mb-8 mx-auto pt-14'>
    <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
    Peek Into 
    </h1>
    <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
        <span className="text-blue-500">Our World</span>
    </h1>
</div>
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-12 gap-6">
    <div className="sm:self-end col-span-12 sm:col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-1">
      {/* <!-- Card --> */}
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={band} alt="Image Description" />
        </div>
        {/* <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
            Workplace personalities
          </div>
        </div> */}
      </a>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      {/* <!-- Card --> */}
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={history} alt="Image Description" />
        </div>
        
      </a>
      {/* <!-- End Card --> */}
    </div>

    <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
      {/* <!-- Card --> */}
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={vocal} alt="Image Description" />
        </div>
        {/* <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
            Women in engineering
          </div>
        </div> */}
      </a>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}

      {/* <!-- Third Card --> */}
      <div className="col-span-12 md:col-span-4">
      
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={jam} alt="Image Description" />
        </div>
        
      </a>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}
    <div className="col-span-12 md:col-span-4">
      
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={team} alt="Image Description" />
        </div>
        
      </a>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}
    <div className="col-span-12 md:col-span-4">
      
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={hero} alt="Image Description" />
        </div>
        
      </a>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}

    <div className="col-span-12 md:col-span-4">
      {/* <!-- Card --> */}
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={guitar} alt="Image Description" />
        </div>
       
      </a>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}
    <div className="col-span-12 md:col-span-7">
      {/* <!-- Card --> */}
      <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={nabin} alt="Image Description" />
        </div>
        
      </a>
      {/* <!-- End Card --> */}
    </div>   
    
      
    
    {/* <!-- old Col --> */}

  
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Masonry Cards --> */}
    </>
  )
}

export default GallaryPage