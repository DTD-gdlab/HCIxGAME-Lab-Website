import React from 'react';
import AlbumBground from './AlbumBground';
import './Album.css';

import UpWhiteWave from './img/UpWhiteWave.png'; // Import the SVG
import UpGreyWave from './img/UpGreyWave.png'; // Import the SVG
import BottomWhiteWave from './img/BottomWhiteWave.png'; // Import the SVG for bottom
import BottomGreyWave from './img/BottomGreyWave.png'; // Import the SVG for bottom
import WelcomeImage from './img/Welcome.png'; // Import Welcome.png

// Import Album Photos
import AlbumPhoto01 from './img/Album/AlbumPhoto01.png';
import AlbumPhoto02 from './img/Album/AlbumPhoto02.png';
import AlbumPhoto03 from './img/Album/AlbumPhoto03.png';
import AlbumPhoto04 from './img/Album/AlbumPhoto04.png';
import AlbumPhoto05 from './img/Album/AlbumPhoto05.png';
import AlbumPhoto06 from './img/Album/AlbumPhoto06.png';
import AlbumPhoto07 from './img/Album/AlbumPhoto07.png';
import AlbumPhoto08 from './img/Album/AlbumPhoto08.png';
import AlbumPhoto09 from './img/Album/AlbumPhoto09.png';
import AlbumPhoto10 from './img/Album/AlbumPhoto10.png';

const albumPhotos = [
  AlbumPhoto01,
  AlbumPhoto02,
  AlbumPhoto03,
  AlbumPhoto04,
  AlbumPhoto05,
  AlbumPhoto06,
  AlbumPhoto07,
  AlbumPhoto08,
  AlbumPhoto09,
  AlbumPhoto10,
];

function Album() {
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
      <div className="album-block">
        {albumPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Album Photo ${index + 1}`} className="album-photo" />
        ))}
      </div>
    </div>
  );
}

export default Album;
