import { useState } from 'react'; 
import './navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Timi Blaze
      </div>
    <div className={`hamburger ${menuOpen ? 'active' : ''}`}
    onClick={()=> setMenuOpen(!menuOpen)} >
      <span></span>
      <span></span>
      <span></span>
    </div>


      <div className={`navbar-links ${menuOpen ? 'open' : '' }  `}>
        <ul>
          <li><a href="#Hero" onClick={()=> setMenuOpen(false)}>
            Home</a></li>
          <li><a href="#skills" onClick={()=> setMenuOpen(false)}>
            Skills</a></li>
          <li><a href="#skills"  onClick={()=> setMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={()=> setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact"  onClick={()=> setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;