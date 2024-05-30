import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import AboutUs from './Pages/About-us/About-us'; // Use consistent naming conventions
import Services from './Pages/Services/Services';
import Store from './Pages/Store/Store';
import JoinUs from './Pages/Join-us/Join-us';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/Contact-us/Contact-us';

import Home_en from './Pages-en/Home-en/Home-en.jsx';
import AboutUs_en from './Pages-en/Pages-en/About-us-en/About-us-en.jsx'; // Use consistent naming conventions
import Services_en from './Pages-en/Pages-en/Services-en/Services-en.jsx';
import Store_en from './Pages-en/Pages-en/Store-en/Store-en.jsx';
import JoinUs_en from './Pages-en/Pages-en/Join-us-en/Join-us-en.jsx';
import Blog_en from './Pages-en/Pages-en/Blog-en/Blog-en.jsx';
import ContactUs_en from './Pages-en/Pages-en/Contact-us-en/Contact-us-en.jsx';
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

           {/* Arabic pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/store" element={<Store />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
           {/* Arabic pages */}
           
           

          {/* English pages */}
          <Route path="/en/" element={<Home_en />} />
          <Route path="/en/about-us" element={<AboutUs_en />} />
          <Route path="/en/services" element={<Services_en />} />
          <Route path="/en/store" element={<Store_en />} />
          <Route path="/en/join-us" element={<JoinUs_en />} />
          <Route path="/en/blog" element={<Blog_en />} />
          <Route path="/en/contact-us" element={<ContactUs_en />} />
          {/* English pages */}
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
