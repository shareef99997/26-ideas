import './Home.css';
import Header from './Header/Header';
import About from './About/About';
import Services from './Services/Services';
import Products from './Products/Products';
import Footer from './Footer/Footer';

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
