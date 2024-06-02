
import './Store.css'
import NavBar from "../../Home-en/Header-en/NavBar-en";
import Footer from '../../Home-en/Footer-en/Footer-en';
import Contact from '../../Home-en/Contact-en/Contact-en';

function Store_en() {
  return (
    <div className="Store " id="Store" lang="en">

        <div className="Store-Header Page-Header-en">
        <NavBar currentPage="store"/>
          <h2 className="Page-Title-en"> متاجرنا </h2>
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

export default Store_en;