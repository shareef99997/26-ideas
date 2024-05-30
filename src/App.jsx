import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Footer from './Home/Footer/Footer';
import Contact from './Home/Contact/Contact';
import AboutUs from './Pages/About-us/About-us'; // Use consistent naming conventions
import Services from './Pages/Services/Services';
import Store from './Pages/Store/Store';
import JoinUs from './Pages/Join-us/Join-us';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/Contact-us/Contact-us';
import ScrollToTop from './Pages/ScrollToTop.jsx'; 
import React, { useState, useEffect } from 'react';

function App() {

  const [scrolled, setScrolled] = useState(false);

  const scrollToHeader = () => {
    const header = document.getElementById('Header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 400); // You can adjust the scroll offset value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <Router>
      <ScrollToTop /> {/* Ensure this component is placed inside the Router */}
      <div className="Home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/store" element={<Store />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        
        <a className="whatsappa" href="https://api.whatsapp.com/send?phone=966566664530" target="_blank" rel="noopener noreferrer">
          <nav className="whatsapp-button">
            <div>
              <img src={require('./Assets/Icons/whatsapp.png')} alt="WhatsApp" />
            </div>
            <h3> Whatsapp </h3>
          </nav>
        </a>
        <a className={`up-arrow ${scrolled ? 'scrolled-arrow' : ''}`} onClick={scrollToHeader}>
          <div className="arrow-button">
            <img src={require('./Assets/Icons/up-arrow.png')} alt="Up Arrow" />
          </div>
        </a>
        
      </div>
    </Router>
  );
}

export default App;
