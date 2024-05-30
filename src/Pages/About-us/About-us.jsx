import React, { useEffect, useRef } from 'react';
import NavBar from "../../Home/Header/NavBar";
import './About-us.css';
import '../Pages.css';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';

function About_us() {

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
    <div className="About-us" id="About-us" lang="ar">
      <div className="About-us-Header Page-Header">
        <NavBar currentPage="about-us"/>
        <h3 className="Page-Title">  من نحن  </h3>
      </div>

      <div className="About-us-Body Page-Body">

        <div className="About-us-section" >
          
        <section className="About-us-content A-one">
          <div className="left-section-ab" ref={leftSectionRef1}>
            <img src={require('../../Assets/Images/project-management-about.jpg')} alt="About 1" />
          </div>
          <div className="right-section-ab" ref={rightSectionRef1}>
            <h1> 26 فكرة لتقنية المعلومات </h1>
          <div className="About-us-description">
            <div className="description-wrapper">
              <p>             
                نحن فريق متخصص في تقنية المعلومات، نقدم حلولًا مبتكرة تعزز الإنتاجية وتسهم في نمو الأعمال. <br />
                نستخدم تقنيات الذكاء الاصطناعي المتقدمة لتحسين الأداء التجاري وأتمتة العمليات، مما يساعد في حل التحديات التقليدية وتعزيز النجاح المستدام.<br />
                  خدماتنا تشمل معالجة المعلومات، إدارة قواعد البيانات، وتحليل البيانات لاستخراج تقارير تفصيلية تدعم اتخاذ القرارات الاستراتيجية. <br />كما نوفر حلول التجارة الإلكترونية 
                لتقليل التكاليف وحماية البيانات و من التخصصات التي نهتم بها في مجال تقنية المعلومات والتكنولوجيا الحديثة الآتي
                <span className="col">:</span>
            </p>
            </div>
              <div className="dropdown-title">
                <h3 className="dropdown-title-h3"> تقنية المعلومات </h3>
                <div className="dropdown-content">
                  <p>  نعتمد علي أحدث تقنيات و الأدوات من عالم تقنية المعلومات والذكاء الاصطناعي لخدمتك و التي تساعدك في التطوير و أتمتة العمليات وتحسين أداء الشركات و المؤسسات لتوزيع  </p>
                </div>
              </div>
              <div className="dropdown-title">
                <h3 className="dropdown-title-h3"> التسويق </h3>
                <div className="dropdown-content">
                  <p>  يشمل استخدام الوسائط الرقمية للترويج لمنتجاتك أو خدماتك. يمكن أن يكون ذلك من خلال الإعلانات عبر الإنترنت، والتسويق عبر وسائل التواصل الاجتماعي، والتسويق عبر البريد الإلكتروني.  </p>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section className="About-us-content A-two">
          <div className="right-section-ab" ref={rightSectionRef2}>
          <h1> تقنية المعلومات </h1>
          <div className="About-us-description">
            <p> تخصصنا في مجال تقنية المعلومات يلعب دورًا حيويًا في تطوير الأعمال وتحسين الإنتاجية و مواكبة التطور الحديث و تقنيات الذكاء الاصطناعي التي تساعد في سرعة تحقيق النجاح المستدام لأعمالك . <br /><br />
            و نعتمد علي أحدث تقنيات و الأدوات من عالم تقنية المعلومات والذكاء الاصطناعي لخدمتك و التي تساعدك في التطوير و أتمتة العمليات وتحسين أداء الشركات و المؤسسات لتوزيع و رقابة مهام الأفراد والموظفين اليومية و تفاصيل العمليات اليومية للأعمال.<br /><br />
              و تساعد هذه البرمجيات في خدمة وتطوير معظم المجالات المختلفة مثل ( الطب ، الإدارة ، المصارف ، والتعليم و الخدمات المنزلية..ألخ ) .  </p>
            <div className="dropdown-title">
              <h3 className="dropdown-title-h3">  منتجات التقنية مبتكرة </h3>
              <div className="dropdown-content">
                <p>  نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل و المهام اليومية , إضافة لذلك تطبيقات وبرمجيات مبتكرة لحل المشكلات المعقدة . </p>
              </div>
            </div>
            <div className="dropdown-title">
              <h3 className="dropdown-title-h3"> 	تطوير المواقع الإلكترونية وتطبيقات الجوال </h3>
              <div className="dropdown-content">
                <p> نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية  و تطوير تطبيقات الهاتف المحمول (Android و iOS و Windows Phone). </p>
              </div>
            </div>
            <div className="dropdown-title">
              <h3 className="dropdown-title-h3"> 	حلول الذكاء الاصطناعي   </h3>
              <div className="dropdown-content">
                <p> نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات و تصميم وتطوير روبوتات ذكية للقطاعات المختلفة </p>
              </div>
            </div>
            <div className="dropdown-title">
              <h3 className="dropdown-title-h3"> 	الاستشارات   </h3>
              <div className="dropdown-content">
                <p>  نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجات و أدوات حديثة.</p>
              </div>
            </div>
            <div className="dropdown-title">
              <h3 className="dropdown-title-h3"> 	حلول الأمان والشبكات  </h3>
              <div className="dropdown-content">
                <p>  تأمين البيانات والشبكات ضد التهديدات الرقمية بمعدات وأجهزة حديثة ومتطورة . </p>
              </div>
            </div>
            <div className="dropdown-title">
              <h3 className="dropdown-title-h3"> 	الإستضافة و المخدمات   </h3>
              <div className="dropdown-content">
                <p>  توفير خدمات الاستضافة على خوادم عالية المواصفات وتقنيات حديثة. </p>
              </div>
            </div>
          </div>
          </div>

          <div className="left-section-ab" ref={leftSectionRef2}>
            <img src={require('../../Assets/Images/development.jpg')} alt="About 2" />
          </div>
        
        </section>

        <section className="About-us-content A-three">
          <div className="left-section-ab" ref={leftSectionRef3}>
            <img src={require('../../Assets/Images/phone.jpg')} alt="About 3" />
          </div>
          <div className="right-section-ab" ref={rightSectionRef3}>
            <h1> التسويق </h1>
            <div className="About-us-description">
              <p>   يشمل استخدام الوسائط الرقمية للترويج لمنتجاتك أو خدماتك. يمكن أن يكون ذلك من خلال الإعلانات عبر الإنترنت، والتسويق عبر وسائل التواصل الاجتماعي، والتسويق عبر البريد الإلكتروني. تسويق حول نطاق واسع يمكنك الوصول إلى جمهور عالمي من خلال موقعك الإلكتروني. </p>
              <div className="dropdown-title">
                <h3 className="dropdown-title-h3"> التجارة الإلكترونية </h3>
                <div className="dropdown-content">
                  <p> تجهيز منصات إلكترونية لعمليات الشراء و البيع للمنتجات أو الخدمات عبر الإنترنت. تشمل جميع الأنشطة التجارية التي يمكن أن تتم عبر شبكة الويب ، مثل البيع بالجملة والتجزئة والمزادات. </p>
                </div>
              </div>
              <div className="dropdown-title">
                <h3 className="dropdown-title-h3"> 	التسويق الإلكتروني </h3>
                <div className="dropdown-content">
                  <p> يشمل استخدام الوسائط الرقمية للترويج لمنتجاتك أو خدماتك. يمكن أن يكون ذلك من خلال الإعلانات عبر الإنترنت، والتسويق عبر وسائل التواصل الاجتماعي، والتسويق عبر البريد الإلكتروني. </p>
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

export default About_us;
