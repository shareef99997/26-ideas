import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className={`logo ${scrolled ? 'scrolled-logo' : ''}`}>
          <Link to="/">
            <img src={require('../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </Link>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          
          <li className={`${currentPage === 'home' ? 'active' : ''}`}>
            <Link to="/" > الرئيسية </Link>
          </li>
          <li className={`${currentPage === 'about-us' ? 'active' : ''}`}>
            <Link to="/about-us" >من نحن</Link>
          </li>
          <li className={`${currentPage === 'services' ? 'active' : ''}`}>
            <Link to="/services" >خدماتنا</Link>
          </li>
          <li className={`${currentPage === 'store' ? 'active' : ''}`}>
            <a href="http://www.nextech-sa.com" target="_blank" >متجرنا</a>
          </li>
          <li className={`${currentPage === 'join-us' ? 'active' : ''}`}>
            <Link to="/join-us" >انضم الينا</Link>
          </li>
          <li className={`${currentPage === 'blog' ? 'active' : ''}`}>
            <Link to="/blog" >المدونة</Link>
          </li>
          <li className={`cbl ${currentPage === 'contact-us' ? 'active' : ''}`}>
            <Link to="/contact-us">
              <button className="Contact-btn" > اطلب عرض سعر </button>
            </Link>
          </li>
        </ul>
        <div className="Cont">
          <Link to="/contact-us">
            <button className="Contact-btn" id='Contact-btn'> اطلب عرض سعر  </button>
          </Link>
        </div>
        <div className="lang">
          <a className="en">
            العربية
          </a>
          <div className="lang-dropdown">
            <Link to="/en/" > 
              <a>
                English
              </a>
            </Link> 
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
