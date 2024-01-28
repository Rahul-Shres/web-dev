import React, { useRef } from 'react';
import Appbar from '../../components/nabvar/Navbar';
import Copy from './copy/Copy';
import Horizontal from './horizontal/Horizontal';
import Features from './features/Features';
import Example from './horizontal/HorizontalScrollCarousel';
import Footer from './footer/Footer';
import OurTeams from './ourTeam/OurTeams';
import OurClients from './ourClients/OurClients';
import Faq from './faq/Faq';
import FaqPage from './faq/FaqPage';
import Testimonial from './Testimonial.jsx/Testimonial';
import BookDemo from './booking/BookDemo';
import AboutUs from './about/AboutUs';
import GuitarClass from './Courses/GuitarClass';
import GallaryPage from './gallary/GallaryPage';

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
    background: 'linear-gradient(180deg,  rgba(255,255,255,0) 10%, rgba(255,255,255,1) 100%)',
  }}
></div>

        {/* YouTube iframe */}
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jwggNJyI4JI?si=FlQPwtSHHiRvwWwT&autoplay=1&mute=1&loop=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          ref={iframeRef}
          onEnded={handleVideoEnd}
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe>
      </div>
      <GallaryPage />
      <GuitarClass />
      <Testimonial />
      <Features />
      <Copy />
      <Example />
      <OurTeams />
      <BookDemo />
      <OurClients />
      <AboutUs />
      <Faq />
      <FaqPage />
      <Footer />

    </>
  );
};

export default Home;
