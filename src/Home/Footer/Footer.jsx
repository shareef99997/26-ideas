import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok);


function Footer() {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-Body">
        <div className="Footer-Content">

          <div className="Footer-Section about-footer">
            <div className='Footer-img-Wrapper'>
              <img src={require('../../Assets/Logo/LOGO.png')} alt="Logo" />
            </div>
            <ul>          
            <li className="question" >    في خدمتكم للجواب على جميع استفسراتكم  </li>
            <li className="email">it@26ideas.sa</li>
              <li className="phone" >00966566664530</li>
              <li className="location" >المملكة العربية السعودية - الرياض</li>

            </ul>
          </div>
          <div className="Footer-Section links-footer" >
            <h2>روابط سريعة</h2>
            <ul>
              <li><Link className='link' to="/" >الرئيسية</Link> </li>
              <li> <Link className='link' to="/about-us" >من نحن</Link></li>
              <li> <Link className='link' to="/services" >خدماتنا</Link> </li>
              <li><a href="http://www.nextech-sa.com" target="_blank" rel="noopener noreferrer" className='link' >متجرنا</a></li>
              <li> <Link className='link' to="/join-us" >انضم الينا</Link> </li>
              <li> <Link className='link' to="/blog" >المدونة</Link> </li>
              <li> <Link className='link' to="/contact-us" > تواصل معنا </Link> </li>
            
            </ul>
          </div>
          <div className="Footer-Section services-footer" >
            <h2> خدماتنا </h2>
            <div className="Services-Links">
              <ul>
                <li> <Link className='link' to="/services" >تطوير البرمجيات </Link></li>
                <li> <Link className='link' to="/services" >التسويق</Link> </li>
                <li> <Link className='link' to="/services" >الإستشارات</Link> </li>
                <li> <Link className='link' to="/services" > حلول الذكاء الاصطناعي </Link></li>
                <li> <Link className='link' to="/services" >المزيد...</Link> </li>
              </ul>
              
            </div>
          </div>
          <div className="Footer-Section news-section" >
            <h2>متابعة نشرتنا الإخبارية</h2>
            <div className="newsletter-input">
              <button type="submit"> اشترك </button>
              <input  type="email" placeholder="البريد الإلكتروني" />
            </div>
          </div>
          
          
          
        </div>
      </div>
      <div className="Footer-Copyright">
        <div className="Footer-Copyright-Content">
        
          <p>   2024 | &copy;كل الحقوق محفوظة لصالح 26 فكرة لتقنية المعلومات  </p>
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

export default Footer;
