import React, { useRef } from 'react';
import Appbar from '../../components/nabvar/Navbar';

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
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jwggNJyI4JI?si=FlQPwtSHHiRvwWwT&autoplay=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          ref={iframeRef}
          onEnded={handleVideoEnd}
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe>
      </div>
    </>
  );
};

export default Home;
