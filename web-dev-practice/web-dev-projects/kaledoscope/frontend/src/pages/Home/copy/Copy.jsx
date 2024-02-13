import React from 'react'
import Frame from './Frame'
import { motion } from "framer-motion"
const Copy = () => {
  return (
    <div className='min-h-screen+32 w-screen bg-blue-900 '>
        {/* <!-- Testimonials --> */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
<div className=" mt-32 h-screen+32 relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white text-black ">
  {/* <!-- Blockquote --> */}
  <blockquote className="text-center lg:mx-auto lg:w-4/5 mt-32 ">
   

    <div className="">
    <section className="text-blue-600	">
      <div className="font-bold 	 text-3xl">Your Melody, Your Journey</div>
      <div className="text-1xl	 text-gray-500 mb-4">Where Your Passion Grooves with Proficiency!</div>
    </section>
    <div className='h-56 mb-5'>
      <Frame />
      </div>
      <p className=" text-lg sm:text-2xl md:text-3xl  font-medium text-gray-800 mb-52">
      
        <span className=" text-lg text-gray-80  ">Immerse yourself in the vibrant rhythm of Kaleidoscope Music Academy! Here, we invite you to go beyond the ordinary and dive into a musical odyssey where your creativity takes center stage. Express yourself, refine your skills, and master the art of music under the expert guidance of our talented instructors. </span>
      </p>
      
    
    </div>

   
  </blockquote>
  {/* <!-- End Blockquote --> */}
</div>
</motion.div>
{/* <!-- End Testimonials --> */}
    </div>
  )
}

export default Copy