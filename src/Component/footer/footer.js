import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import Logo from '../../Assets/logo.png';
import "./footer.css";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';

const { Title, Text } = Typography; 

const Footer = () => {
    return (
        <>
            <Layout.Footer className="footer" style={{ backgroundColor: '#f8f8f8', color: '#626262', padding: '40px 0 0 0' }}>
                <Container>
                    <Row gutter={[16, 16]} style={{ paddingBottom: "30px" }}>

                        {/* Left Column (CAVE EXPERTISE) */}
                        <Col xs={24} sm={12} md={12} lg={8}>
                            <Title level={4} style={{ color: '#000' }}>CAVE EXPERTISE & SERVICES</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Cave Mapping & Exploration</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Speleological Research</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Ecological Preservation</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Tourism Development</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Risk Assessment & Safety Protocols</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Geological Surveying</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Speleological Research</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Educational Workshops</Text>
                        </Col>

                        {/* Center Column (Map) */}
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
                            <Title level={4} style={{ color: '#000' }}>Contact Us</Title>
                            <Title level={5} style={{ color: '#000', marginBlock: "5px" }}>Head Office</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Wood street Walthamstow, east London.</Text>
                            <Title level={5} style={{ color: '#000', marginBlock: "5px" }}>Phone Number</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>
                                <a style={{ display: 'block', color: '#626262' }} href="tel:+07777966289">T: 07777 966 289</a>
                            </Text>
                            <Title level={5} style={{ color: '#000', marginBlock: "5px" }}>Email Address</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>
                                <a style={{ display: 'block', color: '#626262' }} className='link-footer' href="mailto:cavecounselling@outlook.com">
                                    cavecounselling@outlook.com
                                </a>
                            </Text>

                            {/* Uncomment and update Instagram link if needed */}
                            {/* 
    <Title level={5} style={{ color: '#000', marginBlock: "5px" }}>Instagram</Title>
    <Text style={{ display: 'block', color: '#626262' }}><a href="">cavecounselling</a></Text>
    */}
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
                        <div className="footer-icons">
                            <a href="#" className="icon facebook"><FacebookOutlined /></a>
                            <a href="#" className="icon instagram"><InstagramOutlined /></a>
                            <a href="#" className="icon linkedin"><LinkedinOutlined /></a>
                        </div>
                    </div>
                </Container>
            </Layout.Footer>

            <div className="footer-content" style={{ background: "var(--second-bg-color)", }}>
                <Container >
                    <div className="sub-footer-content">
                        <div className="footer-text">
                            <Text style={{ color: 'var(--text-color)' }}>
                                © {new Date().getFullYear()} Cave Consulting. All Rights Reserved.
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