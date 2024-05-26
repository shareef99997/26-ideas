/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Market from './Market/Market';
import About from './About/About';



function Home() {
  return (
    <div className="Home">
      
      <Header />
      <About />
      <Services />
      <Market />
    </div>
  );
}

export default Home;
