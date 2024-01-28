import React, { useRef } from 'react';
import Appbar from '../../components/nabvar/Navbar';
import Features from './features/features';
import Copy from './copy/Copy';
import Horizontal from './horizontal/Horizontal';

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
      <Features />
      <Copy />
      <Horizontal />
    </>
  );
};

export default Home;
