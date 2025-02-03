import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import logo from '../../Assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import { FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ background: "beige" }}>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ display: "flex", flexDirection: "column" }}>

        <div className="container" style={{ paddingInline: "0px" }}>
          <div className="navbar-logo">
            <a className="nav-link" href="/#home">
              <img src={logo} alt="Logo" />
            </a>
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
              <button className="book-free-counsultaion-btn"> <a href="/#contact-me"> Book Free Consultation </a></button>
            </div>
          </div>
        </div>
      </nav>
      <div className='sub-header-main'>
        <div className="container nav-upper-text res-none">
          <p className='nav-header-text'>
            Integrative Counsellor for Children, Young people and Adults. Online, by phone and in-person in Walthamstow, East London
          </p>
          <div className='nav-icon-parent'>
            <a href="tel:+447777966289">
              <FaPhone className='nav-icons-header-phone' />
            </a>|
            <a href="mailto:cavecounselling@outlook.com">
              <IoIosMail className='nav-icons-header-mail' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
