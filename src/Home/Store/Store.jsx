import './Store.css';
import { useEffect, useRef } from 'react';

function Store() {
  const storeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            // Optionally stop observing once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const storeSection = storeRef.current;
    const children = storeSection.querySelectorAll('.fade-in-element');

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <div className="Store" id="Store" ref={storeRef}>
      <h1 className='Store-Title fade-in-element hidden'> ابرز منتجاتنا </h1>
      <p className="Store-Description fade-in-element hidden">
        تعرف على  ابرز منتجات متجرنا
      </p>
      <div className="MostOrderedProducts">
      <h2> </h2>
      <div className="MostOrderedProducts-Grid">
        {/* Product 1 */}
        <div className="MostOrderedProduct-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/Door.webp')} alt="Product 1" className="MostOrderedProduct-Image" />
          <div className="MostOrderedProduct-Description">
            <h3>   Hikvision محطة باب وحدات للفيلا  </h3>
            <p> محطة الباب المعيارية من سلسلة محطة باب وحدات للفيلا </p>
            <div><h4>  438 &nbsp; SAR </h4></div>
            <button className="buy-button">
                <i className="fas fa-shopping-basket"></i> شراء
              </button>
          </div>
        </div>
        {/* Product 2 */}
        <div className="MostOrderedProduct-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/Door.webp')} alt="Product 1" className="MostOrderedProduct-Image" />
          <div className="MostOrderedProduct-Description">
            <h3>   Hikvision محطة باب وحدات للفيلا  </h3>
            <p> محطة الباب المعيارية من سلسلة محطة باب وحدات للفيلا </p>
            <div><h4>  438 &nbsp; SAR </h4></div>
            <button className="buy-button">
                <i className="fas fa-shopping-basket"></i> شراء
              </button>
          </div>
        </div>
        {/* Product 3 */}
        <div className="MostOrderedProduct-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/Door.webp')} alt="Product 1" className="MostOrderedProduct-Image" />
          <div className="MostOrderedProduct-Description">
            <h3>   Hikvision محطة باب وحدات للفيلا  </h3>
            <p> محطة الباب المعيارية من سلسلة محطة باب وحدات للفيلا </p>
            <div><h4>  438 &nbsp; SAR </h4></div>
            <button className="buy-button">
                <i className="fas fa-shopping-basket"></i> شراء
              </button>
          </div>
        </div>
        {/* Product 4 */}
        <div className="MostOrderedProduct-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/Door.webp')} alt="Product 1" className="MostOrderedProduct-Image" />
          <div className="MostOrderedProduct-Description">
            <h3>   Hikvision محطة باب وحدات للفيلا  </h3>
            <p> محطة الباب المعيارية من سلسلة محطة باب وحدات للفيلا </p>
            <div><h4>  438 &nbsp; SAR </h4></div>
            <button className="buy-button">
                <i className="fas fa-shopping-basket"></i> شراء
              </button>
          </div>
        </div>
        {/* Product 5 */}
        <div className="MostOrderedProduct-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/Door.webp')} alt="Product 1" className="MostOrderedProduct-Image" />
          <div className="MostOrderedProduct-Description">
            <h3>   Hikvision محطة باب وحدات للفيلا  </h3>
            <p> محطة الباب المعيارية من سلسلة محطة باب وحدات للفيلا </p>
            <div><h4>  438 &nbsp; SAR </h4></div>
            <button className="buy-button">
                <i className="fas fa-shopping-basket"></i> شراء
              </button>
          </div>
        </div>
        {/* Product 6 */}
        <div className="MostOrderedProduct-Box fade-in-element hidden">
          <img src={require('../../Assets/Images/Door.webp')} alt="Product 1" className="MostOrderedProduct-Image" />
          <div className="MostOrderedProduct-Description">
            <h3>   Hikvision محطة باب وحدات للفيلا  </h3>
            <p> محطة الباب المعيارية من سلسلة محطة باب وحدات للفيلا </p>
            <div><h4>  438 &nbsp; SAR </h4></div>
            <button className="buy-button">
                <i className="fas fa-shopping-basket"></i> شراء
              </button>
          </div>
        </div>
        
      </div>
      <div className="Button-Container fade-in-element hidden">
        <button className="Learn-More-Button-Store">تعرف على منتجاتنا</button>
      </div>
    </div>
    </div>
  );
}

export default Store;
