import React from 'react';
import HeroSection from './Hero/HeroSection';
import Display from './Hero/Display';

const Home = () => {
  return (
    <>
      <div className='w-10/12 mx-auto'>
        <HeroSection />
        <Display />
      </div>
    </>
  );
};

export default Home;
