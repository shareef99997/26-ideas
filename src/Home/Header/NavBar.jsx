import './NavBar.css';
import React, { useState } from 'react';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <a href="/ar">
            <img src={require('../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>

          <li><button className='Contact-btn'> تواصل معنا </button></li>
          <li><a href="">مشاريعنا</a></li>
          <li><a href="">خدماتنا</a></li>
          <li><a href="">من نحن</a></li>
          <li><a href="">الرئيسية</a></li>
          
        </ul>
        <div className='lang'>
          <a href='#' className='en'>English</a>
          <div className="lang-dropdown">
            <a href=''>العربية</a>
          </div>
        </div>
        <div className={`burger-menu ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;