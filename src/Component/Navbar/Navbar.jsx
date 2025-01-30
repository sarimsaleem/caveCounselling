import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ display: "flex", flexDirection: "column" }}>
     
      <div className="container" style={{ paddingInline: "0px" }}>
        <div className="navbar-logo">
          <Link className="nav-link" to="home">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" onClick={handleMenuClick} aria-controls="navbarNav" aria-expanded={menuOpen ? 'true' : 'false'} aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#home">Home</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#services">My Services</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#about-me">About Me</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#faq">FAQ</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#contact-me">Contact Me</HashLink>
            </li>
          </ul>
          <div className="navbar-icons">
            <button className="btn btn-outline-primary">Book Free Consultation</button>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Header;
