import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex items-center justify-center px-20 pt-6 pb-5'>
        <div className='h-96 w-full flex flex-col items-start justify-between pr-6'>
            <div className='flex flex-row justify-between w-full'>
                <h3>Hello</h3>
                <h3>Bye</h3>
            </div>
            <h3 className='text-6xl	'>Discover The Experience</h3>
            <div className='flex space-x-3'>
                <button className='bg-black p-4 rounded'>Check Menu</button>
                <button className='bg-slate-500 rounded p-4	'>How To Order</button>
            </div>
        </div>
        <div className='bg-slate-400 h-96 w-full m-auto  rounded-xl	p-6'>
        <h3>Discover The Experience</h3>
        </div>
        
    </div>
    {/* Adding the new divs using Tailwind CSS */}
  
  <div className="px-20 flex justify-between items-center space-x-2">
    <div className='w-10/12 flex items-center  space-x-2	'>
    <div className="bg-red-500 w-full	rounded h-48">Div 1</div>
    <div className="bg-blue-500 w-full rounded h-48">Div 2</div>
    </div>
    <div className='bg-red-500 w-1/3 rounded h-48'>auto</div>  
  </div>
    </>
    
  )
}

export default Hero