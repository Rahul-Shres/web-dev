import React from 'react';
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const YoutubePage = () => {
  return (
    <div className='h-screen xl:h-full w-screen flex justify-center items-center overflow-y-auto'>
      <div className='max-w-screen p-8 mt-4 mb-16 text-center '>
      <div className='text-center mb-8 mx-auto pt-14'>
    <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
    Peek Into 
    </h1>
    <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
        <span className="text-blue-500">Our World</span>
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
        <h1 className="mx-auto mt-4 text-pretty mb-28  text-2xl w-4/5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Dolore ea, vitae maiores laborum soluta corporis impedit quia itaque illum fugiat?
        </h1>
        <div className='flex items-center  text-left justify-center items-center space-x-4 mb-10'>
          <iframe
            className="w-2/5 h-72 rounded-md"
            src="https://www.youtube.com/embed/wcy2NbyToyY?si=eTz85pP59ezdxKew"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='w-2/5'>
            
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, excepturi quas explicabo est quis praesentium, facilis natus libero facere dolorem vitae iusto voluptatibus vel voluptatum, laudantium saepe tempora! Praesentium aut, illum, doloribus labore perferendis eum voluptates quia, vero delectus corporis vel animi beatae laudantium ea ducimus. Id dolore animi facere?</p>
          
          </div>
          </div>

          <div className='min-w-64 mx-auto mb-30 text-center mt-40 mb-40'>
            <h1 className='text-center text-xl lg:mx-auto lg:w-4/5 leading-10	'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium fuga ducimus odit, illo natus ratione nobis quibusdam labore cupiditate deserunt aliquam voluptatem sit reiciendis, dicta aspernatur officia! Repellendus, quas! Consequuntur nemo, iste veritatis officia voluptatibus perspiciatis velit voluptates doloremque. Rerum, voluptas possimus vero ab molestiae alias suscipit optio amet corrupti.</h1>
            <Link to="https://www.youtube.com/@kaleidoscopemusicacademy8891" target="_blank" rel="noopener noreferrer">
  <Button color="primary" variant="shadow" className='mt-10'>
    Shadow
  </Button>
</Link>
            </div>

          
      </div>
    </div>
  );
};

export default YoutubePage;
