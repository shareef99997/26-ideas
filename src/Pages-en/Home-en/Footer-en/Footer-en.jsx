import './Footer.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok);

function Footer_en() {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-Body">
        <div className="Footer-Content">

          <div className="Footer-Section-en about-footer-en">
            <div className='Footer-img-Wrapper'>
              <img src={require('../../../Assets/Logo/LOGO.png')} alt="Logo" />
            </div>
            <ul>
              <li className="question">We are here to answer all your inquiries</li>
              <li className="email">it@26ideas.sa</li>
              <li className="phone">00966566664530</li>
              <li className="location">Saudi Arabia - Riyadh</li>
            </ul>
          </div>

          <div className="Footer-Section-en links-footer-en">
            <h2>Quick Links</h2>
            <ul>
              <li><Link className='link' to="/en/">Home</Link></li>
              <li><Link className='link' to="/en/about-us">About Us</Link></li>
              <li><Link className='link' to="/en/services">Our Services</Link></li>
              <li><a href="http://www.nextech-sa.com" target="_blank" rel="noopener noreferrer" className='link'>Our Store</a></li>
              <li><Link className='link' to="/en/join-us">Join Us</Link></li>
              <li><Link className='link' to="/en/blog">Blog</Link></li>
              <li><Link className='link' to="/en/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="Footer-Section-en services-footer-en">
            <h2>Our Services</h2>
            <div className="Services-Links">
              <ul>
                <li><Link className='link' to="/en/services">Software Development</Link></li>
                <li><Link className='link' to="/en/services">Marketing</Link></li>
                <li><Link className='link' to="/en/services">Consulting</Link></li>
                <li><Link className='link' to="/en/services">AI Solutions</Link></li>
                <li><Link className='link' to="/en/services">More...</Link></li>
              </ul>
            </div>
          </div>

          <div className="Footer-Section-en news-section-en">
            <h2>Follow Our Newsletter</h2>
            <div className="newsletter-input">
              <button type="submit">Subscribe</button>
              <input type="email" placeholder="Email Address" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="Footer-Copyright">
        <div className="Footer-Copyright-Content">
          <p>2024 | &copy; All rights reserved to 26 Ideas for Information Technology</p>
          <div className="Social-Media-Buttons">
          <a href="https://www.instagram.com/26ideasit?igsh=MTB3aG8yYjdvMHpucw%3D%3D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/people/26ideasit/61556228715389/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.snapchat.com/add/twentysixideas?sender_web_id=90b82284-b8fa-4394-a5c0-a390106eb680&device_type=desktop&is_copy_url=true" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchat} /></a>
            <a href="https://x.com/26ideasit?t=1Ol8-gsECv1qCCpcQ9MdQQ&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.tiktok.com/@26ideasit?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_en;
