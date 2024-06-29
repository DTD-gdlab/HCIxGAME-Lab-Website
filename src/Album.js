import React from 'react';
import AlbumBground from './AlbumBground';
import './Album.css';

function Album() {
  return (
    <div id="album" className="album-container">
      <AlbumBground />
      <div className="album-content">
        {/* Album content here */}
      </div>
    </div>
  );
}

export default Album;