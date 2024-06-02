import React, { useState, useEffect } from 'react';
import './Header.css';
import NavBar_en from './NavBar-en';
import { ReactTyped } from 'react-typed';

function Header_en() {
  const [showDescription, setShowDescription] = useState(false);


  return (
    <header className="Home-Header" id="Header" >
      <video autoPlay muted loop className="header-video">
        <source src={require('../../../Assets/Videos/IT-Background (online-video-cutter.com).mp4')} />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <NavBar_en currentPage="home"/>
      <div className="Header-Body">
        <div className="home-content">
          <h1><ReactTyped
            strings={['Your first step towards your digital future']}
            typeSpeed={10}
            onComplete={() => setShowDescription(true)}
            startDelay={100}
          /></h1>
          <p>
          {showDescription && (
            
              <ReactTyped
              strings={[
                'We are here to provide you with the best modern technical solutions. Whether you are looking for software development, e-commerce, or technical consulting, we are here to serve you.',
              ]}
              typeSpeed={5}
              startDelay={400} // Small delay before starting the paragraph typing
              />
            
            
          )}</p>
          <a href="#About"><button >  Take your step now </button></a>
        </div>
      </div>
    </header>
  );
}

export default Header_en;
