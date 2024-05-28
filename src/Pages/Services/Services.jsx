import NavBar from '../../Home/Header/NavBar';
import './Services.css'
function Services() {
  return (
    <div className="Services " id="Header">

        <div className="Services-Header Page-Header">
        <NavBar currentPage="services"/>
          <h2 className="Page-Title"> خدماتنا </h2>
        </div>
      
        {/* Page Body */}
        <div>
          <h1>hey</h1>
        </div>
    </div>
  );
}

export default Services;