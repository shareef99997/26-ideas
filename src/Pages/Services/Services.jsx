import React, { useEffect, useRef } from 'react';
import NavBar from '../../Home/Header/NavBar';
import './Services.css'
function Services() {  
  
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
    <div className="Services-page " id="Header">

        <div className="Services-Header Page-Header">
        <NavBar currentPage="services"/>
          <h2 className="Page-Title"> خدماتنا </h2>
        </div>
      
        {/* Page Body */}
        <div className='Services-Page-Body Page-Body'>
          
          <section className="Services" id="Services" ref={servicesRef}>
            <div className='title-wrapper'>
              <h1 className='Services-Title fade-in-element hidden'>خدماتنا</h1>
            </div>
            <p className="Services-Description fade-in-element hidden">
              الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
            </p>

            <div className="Services-Grid fade-in-element hidden">
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper">
                  <i className="fas fa-robot Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h2>حلول الذكاء الاصطناعي</h2>
                  <p>نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات وتصميم وتطوير روبوتات ذكية للقطاعات المختلفة</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper">
                  <i className="fas fa-laptop-code Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h2>تطوير المواقع الإلكترونية</h2>
                  <p>نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper">
                  <i className="fas fa-mobile-alt Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h2>تطوير تطبيقات الجوال</h2>
                  <p>نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper">
                  <i className="fas fa-bullhorn Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h2>التسويق الإلكتروني</h2>
                  <p>ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper">
                  <i className="fas fa-lightbulb Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h2>منتجات تقنية مبتكرة</h2>
                  <p>نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل والمهام اليومية.</p>
                </div>
              </div>
              <div className="Service-Box fade-in-element hidden">
                <div className="Service-Upper">
                  <i className="fas fa-handshake Service-Icon"></i>
                </div>
                <div className="Service-Lower">
                  <h2>الاستشارات</h2>
                  <p>نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجيات وأدوات حديثة</p>
                </div>
              </div>
            </div>

            <div className="Button-Container fade-in-element hidden">
              <button className="Learn-More-Button">تعرف على خدماتنا</button>
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
                    <div className='Title-div market-pic'>
                      <h2> التسويق الإلكتروني </h2>
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
                    <div className='Title-div data-pic'>
                      <h2> تحليل البيانات </h2>
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
                    <div className='Title-div manage-pic'>
                      <h2> إدارة المشاريع </h2>
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
                    <div className='Title-div ad-pic'>
                      <h2> دعاية و إعلان </h2>
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
        

    </div>
  );
}

export default Services;