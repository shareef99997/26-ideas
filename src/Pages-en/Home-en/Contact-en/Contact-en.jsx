import './Contact.css';
import { Link } from 'react-router-dom';
function Contact_en() {
  return (
    <div className="Contact" id="Contact" >
      <div className='Contact-Body'>
        <div className="content-wrapper">
          <h2 className="contact-heading"> لبدأ مشروعك الآن او للإستفسارات </h2>
          <Link className='link' to="/en/contact-us" >
            <button className="contact-button">
              <i className="fas fa-phone"></i>  إتصل بنا
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact_en;
