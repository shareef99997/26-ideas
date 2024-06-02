import './Market.css';
import { useEffect, useRef } from 'react';

function Market() {
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

  return (
    <div className="Market" id="Market" ref={MarketRef}>
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
    </div>
  );
}

export default Market;
