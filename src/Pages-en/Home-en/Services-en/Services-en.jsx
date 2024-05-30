import React, { useEffect, useRef } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

function Services_en() {
  const servicesRef = useRef(null);

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
    <div className="Services" id="Services" ref={servicesRef}>
      <div className='title-wrapper'>
        <h2 className='Services-Title fade-in-element hidden'>Our Services</h2>
      </div>
      <p className="Services-Description fade-in-element hidden">
        The services we offer are specially designed to meet your needs.
      </p>

      <div className="Services-Grid fade-in-element hidden">
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-robot Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>AI Solutions</h3>
            <p>We offer custom applications utilizing AI technologies such as deep learning and data analysis, and we design and develop intelligent robots for various sectors.</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-laptop-code Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>Web Development</h3>
            <p>We provide innovative web design and development, as well as mobile application development.</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-mobile-alt Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>Mobile App Development</h3>
            <p>We offer innovative design for mobile application development.</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-bullhorn Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>Digital Marketing</h3>
            <p>Promote your products or services through social media, online advertising, and email marketing.</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-lightbulb Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>Innovative Tech Products</h3>
            <p>We offer smart devices that integrate with AI software to assist with work and daily tasks.</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-handshake Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>Consulting</h3>
            <p>We help businesses and individuals achieve their tech goals with modern software and tools.</p>
          </div>
        </div>
      </div>

      <div className="Button-Container fade-in-element hidden">
        <Link className='link' to="/en/Services">
          <button className="Learn-More-Button">Learn About Our Services</button>
        </Link>
      </div>
    </div>
  );
}

export default Services_en;
