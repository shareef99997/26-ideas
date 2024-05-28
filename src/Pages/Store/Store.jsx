import NavBar from '../../Home/Header/NavBar';
import './Store.css'
function Store() {
  return (
    <div className="Store " id="Header">

        <div className="Store-Header Page-Header">
        <NavBar currentPage="store"/>
          <h2 className="Page-Title"> متاجرنا </h2>
        </div>
      
        {/* Page Body */}
        <div>
          <h1>hey</h1>
        </div>
    </div>
  );
}

export default Store;