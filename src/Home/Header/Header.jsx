import './Header.css';
import NavBar from './NavBar';
function Header() {
  return (
    <div className="Home-Header">
      <header>
       <NavBar />
       <body className='Header-Body'>
        <h1>26 IDEAS FOR MARKETING SERVICES</h1>
       </body>
      </header>
    </div>
  );
}

export default Header;