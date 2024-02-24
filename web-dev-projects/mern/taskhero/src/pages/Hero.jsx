import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex items-center justify-center p-20'>
        <div className='h-96 w-full flex flex-col items-start justify-between p-6'>
            <div className='flex flex-row justify-between w-full'>
                <h3>Hello</h3>
                <h3>Bye</h3>
            </div>
            <h3 className='text-6xl	'>Discover The Experience</h3>
            <div className='gap-3'>
                <button className='bg-black p-4 rounded'>Check Menu</button>
                <button className='bg-slate-500 rounded p-4 ml-3	'>How To Order</button>
            </div>
        </div>
        <div className='bg-slate-400 h-96 w-full m-auto  rounded-xl	p-6'>
        <h3>Discover The Experience</h3>
        </div>
        
    </div>
    {/* Adding the new divs using Tailwind CSS */}
    <div className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        <div className="bg-red-500 col-span-1">Div 1</div>
        <div className="bg-blue-500 col-span-1 ">Div 2</div>
        <div className="bg-green-500">Div 3</div>
      </div>
    </>
    
  )
}

export default Hero