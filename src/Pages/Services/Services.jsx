import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import NavBar from '../../Home/Header/NavBar';
import './Services.css'
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';

function Services() {  
  
  const servicesRef = useRef(null);
  const MarketRef = useRef(null);
  const OffersRef = useRef(null);

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

    const OffersSection = OffersRef.current;
    const children = OffersSection.querySelectorAll('.fade-in-element');

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
    <div className="Services-page " id="Services-page" lang="ar">

        <div className="Services-Header Page-Header">
        <NavBar currentPage="services"/>
          <h3 className="Page-Title"> خدماتنا </h3>
        </div>
      
        {/* Page Body */}
        <div className='Services-Page-Body Page-Body'>

          <section className="Offers" id="Offers"   ref={OffersRef}>
            {/* Title Section */}
            <h2 className='Offers-Title fade-in-element hidden'>  عروضنا  </h2>
            <p className="Offers-Description fade-in-element hidden">
              اكتشف عروضنا
            </p>
            {/* Title Section */}

            {/* Slider Section */}
            <section className="Offers-Slider-section fade-in-element hidden">
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

            <div className="Button-Container fade-in-element hidden">
              <Link className='link' to="//contact-us" >
                  <button className="Learn-More-Button"> اطلب خدمتك الآن </button>
                </Link>
            </div>
          </section>
          
          <section className="Services" id="Services" ref={servicesRef}>
            <div className='title-wrapper'>
              <h1 className='Services-Title fade-in-element hidden'>خدماتنا</h1>
            </div>
            <p className="Services-Description fade-in-element hidden">
              الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
            </p>

            <div className="Services-Grid fade-in-element hidden">
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-robot Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>حلول الذكاء الاصطناعي</h3>
                  <p>نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات وتصميم وتطوير روبوتات ذكية للقطاعات المختلفة</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-laptop-code Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>تطوير المواقع الإلكترونية</h3>
                  <p>نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-mobile-alt Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>تطوير تطبيقات الجوال</h3>
                  <p>نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-bullhorn Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>التسويق الإلكتروني</h3>
                  <p>ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-lightbulb Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>منتجات تقنية مبتكرة</h3>
                  <p>نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل والمهام اليومية.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-handshake Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h3>الاستشارات</h3>
                  <p>نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجيات وأدوات حديثة</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-cogs Service-Icon"></i> {/* ERP Icon */}
                </div>
                <div className="Service-Lower">
                  <h3> (ERP) تخطيط موارد المؤسسات </h3>
                  <p> تساعد هذه البرمجيات الشركات على تحسين عمليات البيع وتقديم تجربة سلسة للعملاء. تتضمن ميزات مثل تتبع المبيعات، إدارة المخزون، وتحليلات البيانات لاتخاذ قرارات أكثر ذكاءً. </p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-warehouse Service-Icon"></i> {/* Inventory Management Icon */}
                </div>
                <div className="Service-Lower">
                  <h3> برمجيات إدارة المخزون </h3>
                  <p> تساعد هذه البرمجيات الشركات على تنظيم المخازن بكفاءة، من خلال تسهيل عمليات الاستلام، التسليم، التخزين، والجرد، مما يساهم في تحسين دقة البيانات واتخاذ قرارات أفضل </p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper"lang="en">
                  <i className="fas fa-cash-register Service-Icon"></i> {/* Sales and POS Icon */}
                </div>
                <div className="Service-Lower">
                  <h3> برمجيات إدارة المبيعات و نقاط البيع </h3>
                  <p> تساعد هذه البرمجيات الشركات على تحسين عمليات البيع وتقديم تجربة سلسة للعملاء. تتضمن ميزات مثل تتبع المبيعات، إدارة المخزون، وتحليلات البيانات لاتخاذ قرارات أكثر ذكاءً. </p>
                </div>
              </div>





            </div>

            <div className="Button-Container fade-in-element hidden">
              <Link to="/contact-us" > <button className="Learn-More-Button"> إطلب خدمتك الآن </button> </Link>
              
            </div>
          </section>

          <section className="Market" id="Market" ref={MarketRef}>
            {/* Title Section */}
            <h1 className='Market-Title fade-in-element hidden'> خدماتنا التسويقية </h1>
            <p className="Market-Description fade-in-element hidden">
                تعرف على خدماتنا التسويقية 
            </p>
            {/* Title Section */}

            {/* Grid Section */}
              <div className="Markets-Grid fade-in-element hidden">
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div market-pic'lang="en">
                      <h3> التسويق الإلكتروني </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> ادارة صفحات الويب </li>
                          <li> ادارة صفحات التواصل الأجتماعي </li>
                          <li>التسويق المباشر</li>
                        </ul>
                    </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div data-pic'lang="en">
                      <h3> تحليل البيانات </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> تحليل البيانات التسويقة </li>
                            <li> تحليل بيانات السوق الموازي </li>
                            <li> تحليل البيانات المالية </li>
                          </ul>
                    </div>         
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div manage-pic'lang="en">
                      <h3> إدارة المشاريع </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> تطوير المشاريع </li>
                            <li> وضع خطط استراتيجية </li>
                            <li> دراسة جدوى المشاريع </li>
                          </ul>                
                    </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div ad-pic'lang="en">
                      <h3> دعاية و إعلان </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> تصميم اعلانات و دعاية </li>
                          <li>تصميم فيديوهات للدعاية والأعلان</li>
                          <li> تصميم جرافيك </li>
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

export default Services;