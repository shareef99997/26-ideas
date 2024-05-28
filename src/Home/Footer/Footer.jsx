import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faLinkedinIn,faXTwitter);

function Footer() {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-Body">
        <div className="Footer-Content">

          <div className="Footer-Section news-section" >
            <h2>متابعة نشرتنا الإخبارية</h2>
            <div className="newsletter-input">
              <button type="submit"> اشترك </button>
              <input  type="email" placeholder="البريد الإلكتروني" />
            </div>
          </div>
          <div className="Footer-Section services-footer" lang="ar">
            <h2> خدماتنا </h2>
            <div className="Services-Links">
              <ul>
                <li><a href="" > تطوير البرمجيات </a></li>
                <li><a href="">   التسويق  </a></li>
                <li><a href="" >  الإستشارات  </a></li>
                <li><a href="" >  حلول الذكاء الاصطناعي  </a></li>
                <li><a href="" >  ...المزيد  </a></li>
              </ul>
              
            </div>
          </div>
          <div className="Footer-Section links-footer" lang="ar">
            <h2>روابط سريعة</h2>
            <ul>
              <li><a > <Link className='link' to="/" lang="ar">الرئيسية</Link> </a></li>
              <li><a > <Link className='link' to="/about-us" lang="ar">من نحن</Link></a></li>
              <li><a > <Link className='link' to="/services" lang="ar">خدماتنا</Link> </a></li>
              <li><a > <Link className='link' to="/store" lang="ar">متجرنا</Link> </a></li>
              <li><a > <Link className='link' to="/join-us" lang="ar">انضم الينا</Link> </a></li>
              <li><a > <Link className='link' to="/blog" lang="ar">المدونة</Link> </a></li>
              <li><a > <Link className='link' to="/contact-us" lang="ar"> تواصل معنا </Link> </a></li>
            
            </ul>
          </div>
          <div className="Footer-Section about-footer">
            <div className='Footer-img-Wrapper'>
              <img src={require('../../Assets/Logo/LOGO.png')} alt="Logo" />
            </div>
            <ul>          
            <li className="question" lang="ar">    في خدمتكم للجواب على جميع استفسراتكم  </li>
            <li className="email">it@26ideas.sa</li>
              <li className="phone" lang="ar">00966566664530</li>
              <li className="location" lang="ar">المملكة العربية السعودية - الرياض</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="Footer-Copyright">
        <div className="Footer-Copyright-Content">
        <div className="Social-Media-Buttons">
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://X.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
        </div>
          <p>   2024 | &copy;كل الحقوق محفوظة لصالح 26 فكرة لتقنية المعلومات  </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
