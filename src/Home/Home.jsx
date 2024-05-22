import './Home.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Store from './Store/Store';
import Footer from './Footer/Footer';

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
      <Services />
      <Store />
      <Footer />
    </div>
  );
}

export default Home;
