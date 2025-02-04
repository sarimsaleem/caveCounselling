import React from 'react';
import Logo from '../../Assets/mainfooter.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import './footer.css';

const Testimonials = () => {
  return (

    <>
      <footer className="footer" style={{ backgroundColor: 'var(--them-secondary)', color: 'var(--them-color)', paddingBlock: '40px' }}>
        <div className="container">
          <div className="row">

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-section">
                <h4 style={{ color: 'var(--text-color)', fontSize: "20px", marginBlock: "15px" }} >Contact Us</h4>
                <h6 style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >Head Office</h6>
                <p style={{ color: 'var(--text-color)', lineHeight: "2" }}>Wood street Walthamstow, east London.</p>
                <h6 style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }}>Phone Number</h6>
                <p style={{margin: ""}}><a href="tel:+07777966289" style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >T: 07777 966 289</a></p>
                <h6 style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >Email Address</h6>
                <p style={{margin: ""}}><a href="mailto:cavecounselling@outlook.com" style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >cavecounselling@outlook.com</a></p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40803.235262064105!2d-0.26674749999999997!3d51.5287393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1698793256143!5m2!1sen!2s" width="85%"
                height="270"
                style={{ border: 0, marginBlock: "15px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-section">
                <h4 style={{ color: 'var(--text-color)', fontSize: "20px", marginBlock: "15px" }}>Menu</h4>
                <ul className='list' style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ color: 'var(--text-color)', lineHeight: "2" }} ><a style={{textDecoration:"none", color:"var(--text-color)"}} href="/#home"> Home </a></li>
                  <li style={{ color: 'var(--text-color)', lineHeight: "2" }} ><a style={{textDecoration:"none", color:"var(--text-color)"}} href="/#services">My Services</a></li>
                  <li style={{ color: 'var(--text-color)', lineHeight: "2" }} ><a style={{textDecoration:"none", color:"var(--text-color)"}} href="/#about-me">About Us</a></li>
                  <li style={{ color: 'var(--text-color)', lineHeight: "2" }} ><a style={{textDecoration:"none", color:"var(--text-color)"}} href="/#faq">FAQ</a></li>
                  <li style={{ color: 'var(--text-color)', lineHeight: "2" }} ><a style={{textDecoration:"none", color:"var(--text-color)"}} href="/#contact-me">Contact Me</a></li>
                </ul>
                <div className="footer-icons">
                  <a href="https://www.instagram.com/cave_counselling/?igsh=d2wyZHltcXZwcGZu#" className="icon linkedin"> <i><FaInstagram size={30} /></i></a>
                  {/* <a href="#" className="icon linkedin"> <i><FaFacebook size={30} /></i></a> */}
                  <a href="https://www.linkedin.com/in/shama-iqbal-68682430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="icon linkedin"> <i><FaLinkedin size={30} /></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>



      <div className="footer-content" style={{ background: "var(--second-bg-color)", }}>
        <div className="container">
          <div className="sub-footer-content">
            <div className="footer-text">
              <p style={{ color: 'var(--text-color)', margin: "0" }} >© {new Date().getFullYear()} Cave Counselling. All Rights Reserved.</p>
            </div>
            <div className="footer-logo">
              <img src={Logo} alt="Cave Consulting Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
