import NavBar from '../../Home/Header/NavBar';
import './Store.css'
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';

function Store() {
  return (
    <div className="Store " id="Store" lang="ar">

        <div className="Store-Header Page-Header">
        <NavBar currentPage="store"/>
          <h2 className="Page-Title"> متاجرنا </h2>
        </div>
      
        {/* Page Body */}
        <div>
          <h1>hey</h1>
        </div>
        <Contact />
        <Footer />
    </div>
  );
}

export default Store;