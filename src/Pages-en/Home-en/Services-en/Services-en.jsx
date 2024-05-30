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
    <div className="Services" id="Services" ref={servicesRef} >
      <div className='title-wrapper'>
        <h2 className='Services-Title fade-in-element hidden'>خدماتنا</h2>
      </div>
      <p className="Services-Description fade-in-element hidden">
        الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
      </p>

      <div className="Services-Grid fade-in-element hidden">
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-robot Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>حلول الذكاء الاصطناعي</h3>
            <p>نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات وتصميم وتطوير روبوتات ذكية للقطاعات المختلفة</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-laptop-code Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>تطوير المواقع الإلكترونية</h3>
            <p>نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-mobile-alt Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>تطوير تطبيقات الجوال</h3>
            <p>نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-bullhorn Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>التسويق الإلكتروني</h3>
            <p>ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-lightbulb Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>منتجات تقنية مبتكرة</h3>
            <p>نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل والمهام اليومية.</p>
          </div>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <div className="Service-Upper" lang="en">
            <i className="fas fa-handshake Service-Icon"></i>
          </div>
          <div className="Service-Lower">
            <h3>الاستشارات</h3>
            <p>نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجيات وأدوات حديثة</p>
          </div>
        </div>
      </div>

      <div className="Button-Container fade-in-element hidden">
        <Link className='link' to="/en/Services" >
            <button className="Learn-More-Button">تعرف على خدماتنا</button>
          </Link>
      </div>
    </div>
  );
}

export default Services_en;
