/* eslint-disable jsx-a11y/anchor-is-valid */
import './Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Offers() {
  return (
    <div className="Offers" id="Offers">
      {/* Title Section */}
        <h2 className='Offers-Title'>  عروضنا  </h2>
        <p className="Offers-Description">
          اكتشف عروضنا
        </p>
      {/* Title Section */}

      {/* Slider Section */}
      <section className="Offers-Slider-section">
            <div className="img-wrapper">
            <Link to="/contact-us">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{
                  delay: 2500, // 3 seconds delay between slides
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Scrollbar]} // Include required modules
              >
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../Assets/Images/project-management.jpg')} alt="AI Illustration 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../Assets/Images/project-management.jpg')}alt="AI Illustration 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../Assets/Images/project-management.jpg')} alt="AI Illustration 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../Assets/Images/project-management.jpg')} alt="AI Illustration 3" />
                </SwiperSlide>
              </Swiper>
            </Link>
              
            </div>
      </section>
      {/* Slider Section */}

      <div className="Button-Container">
        <button className="Learn-More-Button"> اطلب خدمتك الآن </button>
      </div>
    </div>
  );
}

export default Offers;
