/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Offers from './Offers/Offers';
import About from './About/About';
import Footer from '../Home/Footer/Footer';
import Contact from '../Home/Contact/Contact';


function Home() {
  return (
    <div className="Home" lang="ar">
      
      <Header />
      <About />
      <Services />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
