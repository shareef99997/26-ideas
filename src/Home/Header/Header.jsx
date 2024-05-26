import React, { useState } from 'react';
import './Header.css';
import NavBar from './NavBar';
import { ReactTyped } from 'react-typed';

function Header() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <header className="Home-Header" id="Header">
      <video autoPlay muted loop className="header-video">
        <source src={require('../../Assets/Videos/IT-Background (online-video-cutter.com).mp4')} />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <NavBar />
      <div className="Header-Body">
        <div className="home-content">
          <h1><ReactTyped
            strings={['خطوتك الأولى نحو مستقبلك الرقمي']}
            typeSpeed={30}
            onComplete={() => setShowDescription(true)}
          /></h1>
          <p>
          {showDescription && (
            
              <ReactTyped
              strings={[
                'نحن هنا لنقدم لك أفضل الحلول التقنية الحديثة. سواء كنت تبحث عن تطوير البرمجيات، التجارة الإلكترونية أو استشارات تقنية فإننا هنا لخدمتك',
              ]}
              typeSpeed={10}
              startDelay={500} // Small delay before starting the paragraph typing
              />
            
            
          )}</p>
          <a href="#About"><button lang="ar">إتخذ خطوتك الآن</button></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
