import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar_en({ currentPage }) {
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
            <img src={require('../../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </Link>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <li className={`${currentPage === 'home' ? 'active' : ''}`}>
            <Link to="/en/">Home</Link>
          </li>
          <li className={`${currentPage === 'about-us' ? 'active' : ''}`}>
            <Link to="/en/about-us">About Us</Link>
          </li>
          <li className={`${currentPage === 'services' ? 'active' : ''}`}>
            <Link to="/en/services">Services</Link>
          </li>
          <li className={`${currentPage === 'store' ? 'active' : ''}`}>
            <a href="" target="_blank">Store</a>
          </li>
          <li className={`${currentPage === 'join-us' ? 'active' : ''}`}>
            <Link to="/en/join-us">Join Us</Link>
          </li>
          <li className={`${currentPage === 'blog' ? 'active' : ''}`}>
            <Link to="/en/blog">Blog</Link>
          </li>
          <li className={`cbl ${currentPage === 'contact-us' ? 'active' : ''}`}>
            <Link to="/en/contact-us">
              <button className="Contact-btn">Request a Quote</button>
            </Link>
          </li>
        </ul>
        <div className="Cont">
          <Link to="/en/contact-us">
            <button className="Contact-btn">Request a Quote</button>
          </Link>
        </div>
        <div className="lang">
        
          <a  className="en">
            English
          </a>
        
          <div className="lang-dropdown">
          <Link to="/" > 
            <a>
              العربية
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

export default NavBar_en;
