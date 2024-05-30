import React, { useEffect, useRef } from 'react';
import './Services.css'
import { Link } from 'react-router-dom';
import NavBar from "../../Home-en/Header-en/NavBar-en";
import Footer from '../../Home-en/Footer-en/Footer-en';
import Contact from '../../Home-en/Contact-en/Contact-en';

function Services_en() {  
  
  const servicesRef = useRef(null);
  const MarketRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            // Optionally stop observing once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const MarketSection = MarketRef.current;
    const children = MarketSection.querySelectorAll('.fade-in-element');

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const servicesSection = servicesRef.current;
    const children = servicesSection.querySelectorAll('.fade-in-element');

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <div className="Services-page " id="Services-page" lang="en">

        <div className="Services-Header Page-Header-en">
        <NavBar currentPage="services"/>
          <h3 className="Page-Title-en"> Our Services </h3>
        </div>
      
        {/* Page Body */}
        <div className='Services-Page-Body Page-Body'>
          
          <section className="Services" id="Services" ref={servicesRef}>
            <div className='title-wrapper'>
              <h1 className='Services-Title fade-in-element hidden'>Our Services</h1>
            </div>
            <p className="Services-Description fade-in-element hidden">
              The services we offer are designed to meet your needs
            </p>

            <div className="Services-Grid fade-in-element hidden">
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-robot Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>AI Solutions</h3>
                  <p>We provide custom applications utilizing AI technologies like deep learning, data analysis, and design and development of intelligent robots for various sectors.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-laptop-code Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>Web Development</h3>
                  <p>We offer innovative design and development of websites and mobile application development.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-mobile-alt Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>Mobile App Development</h3>
                  <p>We offer innovative design for mobile application development.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-bullhorn Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>Digital Marketing</h3>
                  <p>Promote your products or services through social media, online advertising, and email marketing.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-lightbulb Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>Innovative Tech Products</h3>
                  <p>We provide smart devices compatible with AI software for business and daily tasks.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-handshake Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>Consultations</h3>
                  <p>We help businesses and individuals achieve their technical goals with modern software and tools.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-cogs Service-Icon"></i> {/* ERP Icon */}
                </div>
                <div className="Service-Lower">
                  <h3>Enterprise Resource Planning (ERP)</h3>
                  <p>This software helps companies improve sales processes and provide a seamless customer experience. Features include sales tracking, inventory management, and data analytics for smarter decision-making.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-warehouse Service-Icon"></i> {/* Inventory Management Icon */}
                </div>
                <div className="Service-Lower">
                  <h3>Inventory Management Software</h3>
                  <p>This software helps companies efficiently organize warehouses by facilitating receiving, shipping, storage, and inventory processes, improving data accuracy and decision-making.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-cash-register Service-Icon"></i> {/* Sales and POS Icon */}
                </div>
                <div className="Service-Lower">
                  <h3>Sales and POS Management Software</h3>
                  <p>This software helps companies improve sales processes and provide a seamless customer experience. Features include sales tracking, inventory management, and data analytics for smarter decision-making.</p>
                </div>
              </div>
            </div>

            <div className="Button-Container fade-in-element hidden">
              <Link to="/en/contact-us" > <button className="Learn-More-Button"> Request your service now </button> </Link>
              
            </div>
          </section>
          <section className="Market" id="Market" ref={MarketRef}>
            {/* Title Section */}
            <h1 className='Market-Title fade-in-element hidden'> Our Marketing Services </h1>
            <p className="Market-Description fade-in-element hidden">
                Discover our marketing services
            </p>
            {/* Title Section */}

            {/* Grid Section */}
              <div className="Markets-Grid fade-in-element hidden">
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div market-pic'lang="en">
                      <h3> Digital Marketing </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> Web page management </li>
                          <li> Social media management </li>
                          <li>Direct marketing</li>
                        </ul>
                    </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div data-pic'lang="en">
                      <h3> Data Analysis </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> Marketing data analysis </li>
                            <li> Parallel market data analysis </li>
                            <li> Financial data analysis </li>
                          </ul>
                    </div>         
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div manage-pic'lang="en">
                      <h3> Project Management </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> Project development </li>
                            <li> Strategic planning </li>
                            <li> Project feasibility study </li>
                          </ul>
                          </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div ad-pic'lang="en">
                      <h3> Advertising </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> Advertisement design </li>
                          <li> Advertising video design </li>
                          <li> Graphic design </li>
                        </ul>
                    </div>
                  </div>
              </div>
            {/* Grid Section */}
          </section>
        </div>
        
        <Contact />
        <Footer />
    </div>
  );
}

export default Services_en;
