import './Header.css';
import NavBar from './NavBar';
import Slider from 'react-slick';
import aiImage from '../../Assets/Images/AI.png';
import marketImage from '../../Assets/Images/market.png'; 
import webImage from '../../Assets/Images/web.png'; 

function Header() {

  return (
    <header className="Home-Header">
      <NavBar />
      <div className='Header-Body'>
        <h1>خطوتك الأولى لمستقبلك الرقمي</h1>
        <div className="home-content">

          <section className="left-section">
            {/* <div className='img-container'> */}
                <div>
                  <img className='home-pic' src={require('../../Assets/Images/AI.png')} alt="AI Illustration" />
                </div>

            {/* </div> */}
          </section>

          <section className="middle-section">
            <a href="#start">ابدأ الآن</a>
          </section>

          <section className="right-section">
            <h1>نقدم لك أفضل الحلول التقنية الحديثة</h1>
            <p>سواء كنت تبحث عن تطوير البرمجيات، التجارة الإلكترونية، التسويق الرقمي، أو الاستشارات التقنية، بإستخدام تقنيات الذكاء الاصطناعي لتحليل البيانات وتوجيه القرارات. دعنا نساعدك في استخدام البيانات والأدوات الحديثة بذكاء لتحقيق أهدافك التقنية</p>
          </section>
          
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,165.3C672,171,768,149,864,144C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
