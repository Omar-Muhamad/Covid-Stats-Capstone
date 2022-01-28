import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <header className="header">
      <Link to="/" className="logo">
        Logo
      </Link>
      <nav className="nav">
        <ul className="navLinks">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
