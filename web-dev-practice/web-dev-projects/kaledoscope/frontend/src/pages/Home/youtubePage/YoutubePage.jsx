import React from 'react';
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const YoutubePage = () => {
  return (
    <div className='h-screen xl:h-full w-screen flex justify-center items-center overflow-y-auto'>
      <div className='max-w-screen p-8 mt-4 mb-16 text-center '>
      <div className='text-center mb-8 mx-auto pt-14'>
    <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
    Exploring the Harmonic Hues of 
    </h1>
    <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
        <span className="text-blue-500">Kaleidoscope Music Academy</span>
    </h1>
</div>
        <iframe
          className="mx-auto w-full h-screen rounded-md mb-16"
          src="https://www.youtube.com/embed/KhEHfAOoLKs?si=rCDB2fb-ns-sh4dl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '15px' }}
        ></iframe>
        <h1 className="mx-auto mt-4 text-pretty mb-16 font-bold text-2xl w-4/5">
        Nestled in the heart of Kathmandu, since 1985, lies a haven for music enthusiasts: <br /> the Kaleidoscope Music Academy.
        </h1>
        <div className='flex items-center  text-left justify-center items-center space-x-4 '>
          <iframe
            className="w-2/5 h-72 rounded-md"
            src="https://www.youtube.com/embed/wcy2NbyToyY?si=eTz85pP59ezdxKew"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='w-2/5'>
            
            <p className='text-xl leading-8'>Kaleidoscope Music Academy stands as a testament to the power of music education in shaping the future of Nepal’s cultural landscape. By offering a blend of traditional and contemporary music lessons, the academy paints a kaleidoscopic picture of opportunities for every student who walks through its doors. As the academy continues to evolve, it remains a beacon of hope for those who believe in the transformative power of music.</p>
          
          </div>
          </div>

          <div className='min-w-64 mx-auto mb-30 text-center mt-40 mb-40'>
            <h1 className='text-center text-xl lg:mx-auto lg:w-4/5 leading-10	'>This prestigious institution, established in 1985, has been cultivating a love for music in generations of Nepalis. With its rich history and dedication to excellence, the academy offers a nurturing environment where students of all ages and skill levels can discover their musical potential. So, whether you're a budding musician taking your first steps or a seasoned player seeking to refine your craft, the Kaleidoscope Music Academy welcomes you to join its vibrant musical community.</h1>
            <Link to="https://www.youtube.com/@kaleidoscopemusicacademy8891" target="_blank" rel="noopener noreferrer">
  <Button color="danger" variant="shadow" className='mt-10'>
    Click To Visit Our Youtube Chanel
  </Button>
</Link>
            </div>

          
      </div>
    </div>
  );
};

export default YoutubePage;
