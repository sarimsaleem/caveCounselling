import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


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
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`} style={{ display: "flex", flexDirection: "column" }} >
      <div className={`container nav-upper-text res-none ${scrolled ? 'ds-none' : ''}`} >
        <p className='nav-header-text'>Integrative Counsellor for Children, Young people and Adults. Online, by phone and in-person in Walthamstow, East London</p>
        <div className='nav-icon-parent'>
          <a href="tel:+447777966289">
            <FaPhone className='nav-icons-header-phone'  />
          </a>|
          <a href="mailto:cavecounselling@outlook.com">
            <IoIosMail className='nav-icons-header-mail'  />
          </a>
        </div>
      </div>
      <div className="container" style={{ paddingInline: "0px" }}>
        <div className="navbar-logo" >
          <Link className="nav-link" to="home"  >
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
              <HashLink className="nav-link" smooth to="/#about-us">About Me</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#faq">FAQ</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#contact-us">Contact Me</HashLink>
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
