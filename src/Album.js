import React, { useState, useEffect, useRef } from 'react';
import AlbumBground from './AlbumBground';
import './Album.css';

import UpWhiteWave from './img/UpWhiteWave.png'; // Import the SVG
import UpGreyWave from './img/UpGreyWave.png'; // Import the SVG
import BottomWhiteWave from './img/BottomWhiteWave.png'; // Import the SVG for bottom
import BottomGreyWave from './img/BottomGreyWave.png'; // Import the SVG for bottom
import WelcomeImage from './img/Welcome.png'; // Import Welcome.png

const importAll = (r) => r.keys().map(r);
const albumPhotos = importAll(require.context('./img/Album', false, /\.png$/));

function Album() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const photoHeight = 288; // 照片高度
  const gap = 40; // 照片之間的間隔
  const totalHeight = albumPhotos.length * (photoHeight + gap);

  const animate = () => {
    if (!isPaused) {
      setOffset((prevOffset) => {
        const newOffset = (prevOffset + 1) % totalHeight;
        if (newOffset === 0) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = `translateY(0px)`;
          void containerRef.current.offsetHeight; // 強制重排
          containerRef.current.style.transition = 'transform 0.1s linear';
        }
        return newOffset;
      });
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div id="album" className="album-container">
      <img src={UpWhiteWave} alt="Top Decorative Wave" className="top-wave white-wave" /> {/* SVG at the top */}
      <img src={UpGreyWave} alt="Top Decorative Wave" className="top-wave grey-wave" /> {/* SVG at the top */}
      
      <AlbumBground />

      <a href="https://dtd.ntue.edu.tw/#/" target="_blank" rel="noopener noreferrer">
        <img src={WelcomeImage} alt="Welcome" className="welcome-image" /> {/* Welcome.png */}
      </a>
      <img src={BottomWhiteWave} alt="Bottom Decorative Wave" className="bottom-wave white-wave" /> {/* SVG at the bottom */}
      <img src={BottomGreyWave} alt="Bottom Decorative Wave" className="bottom-wave grey-wave" /> {/* SVG at the bottom */}
      
      <div className="album-content">
        {/* Album content here */}
      </div>
      <div 
        className="album-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={containerRef}
          className="album-photo-container"
          style={{
            transform: `translateY(-${offset}px)`,
            height: `${totalHeight * 2}px`, // 雙倍高度以實現無縫循環
          }}
        >
          {[...albumPhotos, ...albumPhotos].map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Album Photo ${index % albumPhotos.length + 1}`}
              className="album-photo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Album;
