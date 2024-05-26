import './Home.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Market from './Market/Market';
import Footer from './Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import React, { useState, useEffect } from 'react';


function Home() {

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
    <div className="Home">
      <a className="whatsappa" href="https://api.whatsapp.com/send?phone=966566664530" target="_blank" rel="noopener noreferrer">
      <nav className="whatsapp-button">
       
          <div>
          <img src={require('../Assets/Icons/whatsapp.png')} alt="WhatsApp" />
          </div>
          
        <h3>تواصل معنا</h3>
      </nav>
      </a> 
      <a className={`up-arrow ${scrolled ? 'scrolled-arrow' : ''}`} onClick={scrollToHeader}>
        <div className="arrow-button">
          <img src={require('../Assets/Icons/up-arrow.png')}/>
        </div>
      </a> 
      <Header />
      <About />
      <Services />
      <Market />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
