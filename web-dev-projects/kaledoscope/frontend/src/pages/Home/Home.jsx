import React from 'react';
import Appbar from '../../components/nabvar/Navbar';

const Home = () => {
  return (
    <>
      <Appbar />
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', pointerEvents: 'none', // This prevents the overlay from blocking clicks
 }}>
        <iframe
        
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/DU6-fZjqrEo?autoplay=1&loop=1&controls=0&mute=1"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe>
      </div>
    </>
  );
};

export default Home;
