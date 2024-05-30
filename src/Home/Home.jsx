/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Offers from './Offers/Offers';
import About from './About/About';



function Home() {
  return (
    <div className="Home">
      
      <Header />
      <About />
      <Services />
      <Offers />
    </div>
  );
}

export default Home;
