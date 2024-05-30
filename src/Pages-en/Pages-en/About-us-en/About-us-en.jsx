import React, { useEffect, useRef } from 'react';
import NavBar from "../../Home-en/Header-en/NavBar-en";
import Footer from '../../Home-en/Footer-en/Footer-en';
import Contact from '../../Home-en/Contact-en/Contact-en';
import './About-us.css';
import '../Pages.css';

function About_us_en() {
  const leftSectionRef1 = useRef(null);
  const rightSectionRef1 = useRef(null);
  const leftSectionRef2 = useRef(null);
  const rightSectionRef2 = useRef(null);
  const leftSectionRef3 = useRef(null);
  const rightSectionRef3 = useRef(null);

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

    const sections = [
      { left: leftSectionRef1, right: rightSectionRef1 },
      { left: leftSectionRef2, right: rightSectionRef2 },
      { left: leftSectionRef3, right: rightSectionRef3 },
    ];

    sections.forEach((section, index) => {
      if (section.left.current) {
        section.left.current.classList.add('hidden');
        section.left.current.dataset.animation = index % 2 === 0 ? 'fade-in-right' : 'fade-in-left';
        observer.observe(section.left.current);
      }

      if (section.right.current) {
        section.right.current.classList.add('hidden');
        section.right.current.dataset.animation = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
        observer.observe(section.right.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.left.current) observer.unobserve(section.left.current);
        if (section.right.current) observer.unobserve(section.right.current);
      });
    };
  }, []);

  return (
    <div className="About-us" id="About-us" lang="en">
      <div className="About-us-Header Page-Header-en ">
        <NavBar currentPage="about-us"/>
        <h3 className="Page-Title-en">About Us</h3>
      </div>

      <div className="About-us-Body Page-Body-en">
        <div className="About-us-section">
          <section className="About-us-content A-one">
            <div className="left-section-en" ref={leftSectionRef1}>
              <img src={require('../../../Assets/Images/project-management-about.jpg')} alt="About 1" />
            </div>
            <div className="right-section-en" ref={rightSectionRef1}>
              <h1>26 Ideas for Information Technology</h1>
              <div className="About-us-description">
                <div className="description-wrapper">
                  <p>
                    We are a team specialized in information technology, providing innovative solutions that enhance productivity and contribute to business growth. <br />
                    We use advanced artificial intelligence techniques to improve business performance and automate processes, helping solve traditional challenges and promote sustainable success. <br />
                    Our services include information processing, database management, and data analysis to extract detailed reports that support strategic decision-making. <br />
                    We also provide e-commerce solutions to reduce costs and protect data. Our areas of expertise in the field of information technology and modern technology include:
                  </p>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Information Technology</h3>
                  <div className="dropdown-content">
                    <p>We use the latest techniques and tools from the world of information technology and artificial intelligence to serve you, which help in developing and automating processes and improving the performance of companies and institutions.</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Marketing</h3>
                  <div className="dropdown-content">
                    <p>Includes the use of digital media to promote your products or services. This can be through online advertising, social media marketing, and email marketing.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="About-us-content A-two">
            <div className="right-section-en" ref={rightSectionRef2}>
              <h1>Information Technology</h1>
              <div className="About-us-description">
                <p>
                  Our specialization in information technology plays a vital role in business development and productivity improvement. By keeping up with modern development and artificial intelligence techniques, we help achieve sustainable success for your business quickly. <br /><br />
                  We use the latest technologies and tools from the world of information technology and artificial intelligence to serve you, which help in development, process automation, and improving the performance of companies and institutions. These softwares serve and develop various fields such as (medicine, administration, banking, education, and home services, etc.). <br /><br />
                </p>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Innovative Tech Products</h3>
                  <div className="dropdown-content">
                    <p>We offer smart devices that are compatible with AI software to serve daily tasks, in addition to innovative applications and software to solve complex problems.</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Website and Mobile App Development</h3>
                  <div className="dropdown-content">
                    <p>We offer innovative design and development of websites and mobile applications (Android, iOS, and Windows Phone).</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">AI Solutions</h3>
                  <div className="dropdown-content">
                    <p>We provide custom applications leveraging AI techniques like deep learning and data analysis, and design and develop smart robots for various sectors.</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Consulting</h3>
                  <div className="dropdown-content">
                    <p>We help companies and individuals achieve their technical goals with modern software and tools.</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Security and Networking Solutions</h3>
                  <div className="dropdown-content">
                    <p>Secure data and networks against digital threats with modern and advanced equipment.</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Hosting and Servers</h3>
                  <div className="dropdown-content">
                    <p>Provide hosting services on high-spec servers with modern technologies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-section-en" ref={leftSectionRef2}>
              <img src={require('../../../Assets/Images/development.jpg')} alt="About 2" />
            </div>
          </section>

          <section className="About-us-content A-three">
            <div className="left-section-en" ref={leftSectionRef3}>
              <img src={require('../../../Assets/Images/phone.jpg')} alt="About 3" />
            </div>
            <div className="right-section-en" ref={rightSectionRef3}>
              <h1>Marketing</h1>
              <div className="About-us-description">
                <p>
                  Includes the use of digital media to promote your products or services. This can be through online advertising, social media marketing, and email marketing. Marketing across a wide range allows you to reach a global audience through your website.
                </p>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">E-commerce</h3>
                  <div className="dropdown-content">
                    <p>Setting up electronic platforms for buying and selling products or services online. Includes all commercial activities that can take place on the web, such as wholesale, retail, and auctions.</p>
                  </div>
                </div>
                <div className="dropdown-title-en">
                  <h3 className="dropdown-title-en-h3">Digital Marketing</h3>
                  <div className="dropdown-content">
                    <p>Includes the use of digital media to promote your products or services. This can be through online advertising, social media marketing, and email marketing.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default About_us_en;
