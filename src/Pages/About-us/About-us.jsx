import NavBar from "../../Home/Header/NavBar";
import './About-us.css'
import React, { useEffect, useRef } from 'react';

function About_us() {

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftSectionRef.current) {
      leftSectionRef.current.classList.add('hidden');
      leftSectionRef.current.dataset.animation = 'fade-in-left';
      observer.observe(leftSectionRef.current);
    }

    if (rightSectionRef.current) {
      rightSectionRef.current.classList.add('hidden');
      rightSectionRef.current.dataset.animation = 'fade-in-right';
      observer.observe(rightSectionRef.current);
    }

    if (logoRef.current) {
      logoRef.current.classList.add('hidden');
      logoRef.current.dataset.animation = 'fade-in-top';
      observer.observe(logoRef.current);
    }

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, []);

  return (
    <div className="About-us " id="Header">

        <div className="About-us-Header Page-Header">
          <NavBar/>
          <h2 className="Page-Title"> من نحن  </h2>
        </div>
      
        {/* Page Body */}
        <div className={'About-us-Body Page-Body'} >

          <div className="About-us-content A-one">
           
          </div>
          <div className="About-us-content A-two">
           
          </div>
          <div className="About-us-content A-three">
           
          </div>
        </div>
    </div>
  );
}

export default About_us;