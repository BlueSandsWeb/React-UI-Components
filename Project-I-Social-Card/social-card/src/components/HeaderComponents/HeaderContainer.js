import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
  return (
    // Header Components go here
    <div className="HeaderContainer">
      <ImageThumbnail />
      <div className="Header">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}

export default HeaderContainer;