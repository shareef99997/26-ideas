import React, { useEffect, useState } from 'react';
import './Header.css';
import NavBar from './NavBar';
import Typed from 'react-typed';

function Header() {

  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 5000); // 5000 milliseconds delay before showing the description
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="Home-Header">
      <video autoPlay muted loop className="header-video">
        <source src={require('../../Assets/Videos/IT-Background (online-video-cutter.com).mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <NavBar />
      <div className="Header-Body">
        <div className="home-content">
         <Typed
            strings={['خطوتك الأولى لمستقبلك الرقمي']}
            typeSpeed={50}
            onComplete={() => setShowDescription(true)}
          />
          {showDescription && (
            <Typed
              strings={[
                'نحن هنا لنقدم لك أفضل الحلول التقنية الحديثة. سواء كنت تبحث عن تطوير البرمجيات، التجارة الإلكترونية أو استشارات تقنية فإننا هنا لخدمتك',
              ]}
              typeSpeed={50}
            />
          )}
          <button>إتخذ خطوتك الآن</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
