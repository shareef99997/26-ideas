import './Services.css';
import { useEffect, useRef } from 'react';

function Services() {
  const servicesRef = useRef(null);

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
    <div className="Services" id="Services" ref={servicesRef}>
      <h1 className='Services-Title fade-in-element hidden'>خدماتنا</h1>
      <p className="Services-Description fade-in-element hidden">
        الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
      </p>
      <div className="Services-Grid fade-in-element hidden">
        <div className="Service-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/web.png')} alt="Web Development" className="Service-Image" />
          <h2>حلول الذكاء الاصطناعي</h2>
          <p>نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات وتصميم وتطوير روبوتات ذكية للقطاعات المختلفة</p>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/web.png')} alt="Cloud Services" className="Service-Image" />
          <h2>تطوير المواقع الإلكترونية</h2>
          <p>نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول</p>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/web.png')} alt="Cloud Services" className="Service-Image" />
          <h2>تطوير تطبيقات الجوال</h2>
          <p>نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول</p>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/web.png')} alt="Mobile Development" className="Service-Image" />
          <h2>التسويق الإلكتروني</h2>
          <p>ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني</p>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/web.png')} alt="Cyber Security" className="Service-Image" />
          <h2>منتجات التقنية مبتكرة</h2>
          <p>نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل والمهام اليومية.</p>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/web.png')} alt="Cyber Security" className="Service-Image" />
          <h2>الاستشارات</h2>
          <p>نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجيات وأدوات حديثة</p>
        </div>
      </div>
      <div className="Button-Container fade-in-element hidden">
        <button className="Learn-More-Button">تعرف على خدماتنا</button>
      </div>
    </div>
  );
}

export default Services;
