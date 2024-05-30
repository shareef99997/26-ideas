/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import Header_en from './Header-en/Header-en';
import Services_en from './Services-en/Services-en';
import Offers_en from './Offers-en/Offers-en';
import About_en from './About-en/About-en';
import Footer_en from '../Home-en/Footer-en/Footer-en';
import Contact_en from '../Home-en/Contact-en/Contact-en';


function Home() {
  return (
    <div className="Home" lang="en">
      
      <Header_en />
      <About_en />
      <Services_en />
      <Offers_en />
      <Contact_en />
      <Footer_en />
    </div>
  );
}

export default Home;
