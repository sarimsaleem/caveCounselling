import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import Logo from '../../Assets/mainfooter.png';
import "./footer.css";
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <>
            <Layout.Footer className="footer" style={{ backgroundColor: 'var(--them-secondary)', color: 'var(--them-color)', padding: '40px 0 0 0' }}>
                <Container>
                    <Row gutter={[16, 16]} style={{ paddingBottom: "30px" }}>

                        <Col xs={24} sm={12} md={12} lg={8}>
                            <Title level={4} style={{ color: 'var(--text-color)' }}>CAVE EXPERTISE & SERVICES</Title>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Cave Mapping & Exploration</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Speleological Research</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Ecological Preservation</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Tourism Development</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Risk Assessment & Safety Protocols</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Geological Surveying</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Speleological Research</Text>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Educational Workshops</Text>
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={10}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40803.235262064105!2d-0.26674749999999997!3d51.5287393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1698793256143!5m2!1sen!2s" width="85%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Col>

                        <Col xs={24} sm={12} md={7} lg={6}>
                            <Title level={4} style={{ color: 'var(--text-color)' }}>Contact Us</Title>
                            <Title level={5} style={{ color: 'var(--text-color)', marginBlock: "5px" }}>Head Office</Title>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>Wood street Walthamstow, east London.</Text>
                            <Title level={5} style={{ color: 'var(--text-color)', marginBlock: "5px" }}>Phone Number</Title>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>
                                <a style={{ display: 'block', color: 'var(--text-color)' }} href="tel:+07777966289">T: 07777 966 289</a>
                            </Text>
                            <Title level={5} style={{ color: 'var(--text-color)', marginBlock: "5px" }}>Email Address</Title>
                            <Text style={{ display: 'block', color: 'var(--text-color)' }}>
                                <a style={{ display: 'block', color: 'var(--text-color)' }} className='link-footer' href="mailto:cavecounselling@outlook.com">
                                    cavecounselling@outlook.com
                                </a>
                            </Text>
                        </Col>
                    </Row>

                    <hr style={{ margin: "0" }} />
                    <div className="footer-container">
                        <div className="footer-links">
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Our Services</a>
                            <a href="#">FAQ</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className='footer-icons'>
                            <a href="#" className="icon linkedin"> <i><FaInstagram size={30} /></i></a>
                            <a href="#" className="icon linkedin"> <i><FaFacebook size={30} /></i></a>
                            <a href="#" className="icon linkedin"> <i><FaLinkedin size={30} /></i></a>
                        </div>
                    </div>
                </Container>
            </Layout.Footer>

            <div className="footer-content" style={{ background: "var(--second-bg-color)", }}>
                <Container >
                    <div className="sub-footer-content">
                        <div className="footer-text">
                            <Text style={{ color: 'var(--text-color)' }}>
                                © {new Date().getFullYear()} Cave Counselling. All Rights Reserved.
                            </Text>
                        </div>
                        <div className="footer-logo">
                            <img src={Logo} alt="Cave Consulting Logo" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Footer;

// import React from 'react';
// import Logo from '../../Assets/mainfooter.png';
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
// // import './footer.css';

// const Testimonials = () => {
//   return (

//     <>
//       <footer className="footer" style={{ backgroundColor: 'var(--them-secondary)', color: 'var(--them-color)', padding: '40px 0 0 0' }}>
//         <div className="container">
//           <div className="row">


//             <div className="col-sm-12 col-md-6 col-lg-4">

//               <div className="footer-section">
//                 <h4 style={{ color: 'var(--text-color)', fontSize: "20px", marginBottom: "15px" }} >CAVE EXPERTISE & SERVICES</h4>
//                 <ul className='list' style={{ listStyle: "none", padding: "0" }}>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Cave Mapping & Exploration</li>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Speleological Research</li>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Ecological Preservation</li>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Tourism Development</li>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Risk Assessment & Safety Protocols</li>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Geological Surveying</li>
//                   <li style={{ color: 'var(--text-color)', lineHeight: "2" }} >Educational Workshops</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-sm-12 col-md-6 col-lg-4">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40803.235262064105!2d-0.26674749999999997!3d51.5287393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1698793256143!5m2!1sen!2s" width="85%"
//                 height="270"
//                 style={{ border: 0, marginBlock: "15px"  }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>

//             <div className="col-sm-12 col-md-6 col-lg-4">
//               <div className="footer-section">
//                 <h4 style={{ color: 'var(--text-color)', fontSize: "20px", marginBlock: "15px" }} >Contact Us</h4>
//                 <h5 style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >Head Office</h5>
//                 <p style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }}>Wood street Walthamstow, east London.</p>
//                 <h5 style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }}>Phone Number</h5>
//                 <p><a href="tel:+07777966289" style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >T: 07777 966 289</a></p>
//                 <h5 style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >Email Address</h5>
//                 <p><a href="mailto:cavecounselling@outlook.com" style={{ color: 'var(--text-color)', lineHeight: "2", margin: "0" }} >cavecounselling@outlook.com</a></p>
//               </div>
//             </div>
//           </div>
//           <hr />
//           <div className="footer-container">
//             <div className="footer-links">
//               <a href="#">Home</a>
//               <a href="#">About Us</a>
//               <a href="#">Our Services</a>
//               <a href="#">FAQ</a>
//               <a href="#">Contact</a>
//             </div>
//             <div className="footer-icons">
//               <a href="#" className="icon linkedin"> <i><FaInstagram size={30} /></i></a>
//               <a href="#" className="icon linkedin"> <i><FaFacebook size={30} /></i></a>
//               <a href="#" className="icon linkedin"> <i><FaLinkedin size={30} /></i></a>
//             </div>
//           </div>
//         </div>
//       </footer>



//       <div className="footer-content" style={{ background: "var(--second-bg-color)", }}>
//         <div className="container">
//           <div className="sub-footer-content">
//             <div className="footer-text">
//               <p style={{ color: 'var(--text-color)', margin: "0" }} >© {new Date().getFullYear()} Cave Counselling. All Rights Reserved.</p>
//             </div>
//             <div className="footer-logo">
//               <img src={Logo} alt="Cave Consulting Logo" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Testimonials;
