import React, { useRef } from 'react';
import Appbar from '../../components/nabvar/Navbar';
import Copy from './copy/Copy';
import Horizontal from './horizontal/Horizontal';
import Example from './horizontal/HorizontalScrollCarousel';
import Footer from './footer/Footer';
import OurTeams from './ourTeam/OurTeams';
import Faq from './faq/Faq';
import Testimonial from './Testimonial.jsx/Testimonial';
import BookDemo from './booking/BookDemo';
import AboutUs from './about/AboutUs';
import GallaryPage from './gallary/GallaryPage';
import AdminDashboard from '../admin/dashboard/AdminDashboard';
import Features from './features/features';
import YoutubePage from './youtubePage/YoutubePage';
import GuitarClass from './Courses/GuitarClass';

const Home = () => {
  const iframeRef = useRef(null);

  const handleVideoEnd = () => {
    // Reload the video when it ends to achieve looping
    iframeRef.current.src += '&autoplay=1';
  };

  return (
    <>
      <Appbar />
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Color overlay */}
        <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    background: 'rgb(2, 0, 36)',
    background: 'linear-gradient(180deg,  rgba(255,255,255,0) 15%, rgba(0,0,0,1) 100%)',
  }}
></div>

        {/* YouTube iframe */}
        {/* <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/watch?v=rLB4gZEkBKY"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          ref={iframeRef}
          onEnded={handleVideoEnd}
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe> */}
        <iframe 
        className="mx-auto w-screen h-screen rounded-md mb-16"
        src="https://www.youtube.com/embed/rLB4gZEkBKY?si=sNRjvo9D9Nl2ieFd&mute=1&autoplay=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share" allowfullscreen>

        </iframe>
      </div>
      
      <GuitarClass />
      {/* <AdminDashboard /> */}
       {/* <OurClients /> */}
       {/* <AboutUs /> */}
       {/* <FaqPage /> */}
      <Features />
      <Copy />
      <Example />
      <OurTeams />
     
      <Testimonial />
      <YoutubePage />
      <GallaryPage />
     
      
      <BookDemo />
      <Faq />
      
      <Footer />

    </>
  );
};

export default Home;
