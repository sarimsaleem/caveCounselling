import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" />
          {/* <h4>CAVE <span>COUNSELLING</span></h4> */}
        </div>
        <button className="navbar-toggler" type="button" onClick={handleMenuClick} aria-controls="navbarNav" aria-expanded={menuOpen ? 'true' : 'false'} aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link"  onClick={() => navigate('/')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">My Services</a>
            </li>
            <li className="nav-item">
            <a className="nav-link"  href='#about-us'>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#contact-us'>Contact Us</a>
            </li>
          </ul>
          <div className="navbar-icons">
            <button className="btn btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
