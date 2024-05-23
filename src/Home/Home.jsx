import './Home.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Market from './Market/Market';
import Footer from './Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';

function Home() {
  return (
    <div className="Home">
      <a className="whatsappa" href="https://api.whatsapp.com/send?phone=966566664530" target="_blank" rel="noopener noreferrer">
      <nav className="whatsapp-button">
       
          <div>
          <img src={require('../Assets/Icons/whatsapp.png')} alt="WhatsApp" />
          </div>
          
        <h3>تواصل معنا</h3>
      </nav>
     </a> 
      <Header />
      <About/>
      <Services />
      <Market />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
