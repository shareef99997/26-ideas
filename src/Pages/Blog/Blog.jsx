import NavBar from '../../Home/Header/NavBar';
import './Blog.css'
function Blog() {
  return (
    <div className="Blog " id="Header">

        <div className="Blog-Header Page-Header">
        <NavBar currentPage="blog"/>
          <h2 className="Page-Title"> المدونة </h2>
        </div>
      
        {/* Page Body */}
        <div>
          
        </div>
    </div>
  );
}

export default Blog;