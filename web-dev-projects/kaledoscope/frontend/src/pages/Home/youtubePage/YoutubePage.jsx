import React from 'react';

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
        <h1 className="mx-auto mt-4 text-pretty mb-28  text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Dolore ea, vitae maiores laborum soluta corporis impedit quia itaque illum fugiat?
        </h1>
        <div className='flex items-center  text-left mx-auto space-x-4 mb-10'>
          <iframe
            className="w-3/5 h-72 rounded-md"
            src="https://www.youtube.com/embed/wcy2NbyToyY?si=eTz85pP59ezdxKew"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='w-2/5'>
            <h1 className='text-lgmb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <h1 className='text-lg  mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p className=''>
              Suscipit fugiat omnis illo tempore eos sapiente minima dolores quos esse sint!
            </p>
            <p className=''>
              Suscipit fugiat omnis illo tempore eos sapiente minima dolores quos esse sint!
            </p>
          </div>
          </div>

          <div className='min-w-64 mx-auto mb-30 text-center mt-16'>
            <h1 className='text-center text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium fuga ducimus odit, illo natus ratione nobis quibusdam labore cupiditate deserunt aliquam voluptatem sit reiciendis, dicta aspernatur officia! Repellendus, quas! Consequuntur nemo, iste veritatis officia voluptatibus perspiciatis velit voluptates doloremque. Rerum, voluptas possimus vero ab molestiae alias suscipit optio amet corrupti.</h1>
            </div>

          
      </div>
    </div>
  );
};

export default YoutubePage;
