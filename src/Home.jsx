import './Home.css';
import Header from './Home/Header/Header';
import About from './Home/About/About';
import Services from './Home/Services/Services';
import Products from './Home/Products/Products';
import Footer from './Home/Footer/Footer';

function Home() {
  return (
    <div className="Home">
      <Header />
      <About />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
