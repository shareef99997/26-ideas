import './NavBar.css';
import React, { useState, useEffect } from 'react';



function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  ///burger menu ///
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  ///burger menu ///
  ///Scroll Sensor///
  
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100); // You can adjust the scroll offset value as needed
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  ///Scroll Sensor///

  

  return (
    <nav className={scrolled ? 'scrolled' : ''} >

      <div className="nav-content">

        <div className={`logo ${scrolled ? 'scrolled-logo' : ''}`}>
          <a href="/ar">
            <img
              src={require('../../Assets/Logo/LOGO.png')}
              alt="Main Logo"
              
            />
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <li className='cbl'><button className='Contact-btn'> تواصل معنا </button></li>
          <li><a href=""lang="ar"> انضم الينا </a></li>
          <li><a href=""lang="ar"> متاجرنا </a></li>
          <li><a href=""lang="ar"> خدماتنا </a></li>
          <li><a href=""lang="ar">من نحن</a></li>
          <li className='home-nav-'><a href="" lang="ar">الرئيسية</a></li>
        </ul>
        <div className='Cont'><button className='Contact-btn'> تواصل معنا </button></div>   
        <div className='lang'>
          <a href='#' className='en'>English</a>
          <div className="lang-dropdown">
            <a href='' lang="ar">العربية</a>
          </div>
        </div>
        
        <div className={`burger-menu ${menuOpen ? 'toggle' : ''} ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
