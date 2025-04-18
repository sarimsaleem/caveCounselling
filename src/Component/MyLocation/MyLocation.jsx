import React from 'react'
import fees from "../../Assets/fees.webp"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const MyLocation = () => {

    const infoCards = [
        {
            title: "Head Office",
            address: "Wood street Walthamstow, east London​",
            icon: <FaMapMarkerAlt />,
            link: "https://www.google.com/maps/search/?api=1&query=Wood+street+Walthamstow+east+London"
        },
        {
            title: "Phone Number",
            address: "07777 966 289",
            icon: <FaPhoneAlt />,
            link: "tel:+447777966289"
        },
        {
            title: "Send Email",
            address: "cavecounselling@outlook.com",
            icon: <FaEnvelope />,
            link: "mailto:cavecounselling@outlook.com"
        },
        {
            title: "Instagram",
            address: "cave_counselling",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/cave_counselling/"
        },
    ];


    return (
        <>
            <div className="contact-us section-padding" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
                            <div className="contact-us-heading heading-with-sub">
                                <h3 className="p-0">My Location</h3>
                            </div>
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="row">
                            <div className="col-md-6 col-xl-8 col-lg-8 col-sm-12">
                                <div className="map-section">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40803.235262064105!2d-0.26674749999999997!3d51.5287393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1698793256143!5m2!1sen!2s"
                                        style={{
                                            width: "100%",
                                            height: "390px",
                                        }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    >
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12"  >
                                <div className="info-cards-container">
                                    <div className="info-cards">
                                        {infoCards.map((card, index) => (
                                            <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--second-bg-color)", width: "100%" }}>
                                                <div className="info-card" key={index}>
                                                    <div className="info-card-icon">
                                                        {card.icon}
                                                    </div>
                                                    <div className="info-card-content">
                                                        <h4>{card.title}</h4>
                                                        {card.link ? (
                                                            <p>
                                                                {card.address}
                                                            </p>
                                                        ) : (
                                                            <p>{card.address}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fees-availability section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className='fees-availability-img '>
                                <img className='' src={fees} alt='About Us' />
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-12 col-lg-6'>
                            <div className='fees-availability-content'>
                                <div className="heading-with-sub about-heading">
                                    <h3 className="p-0">Fees & Availability</h3>
                                    <h6 className="p-0 m-0">Flexible scheduling and transparent pricing tailored for you.</h6>
                                </div>
                                <div className='about-para'>

                                    <p style={{ marginBottom: "10px" }}>If you or your child would like an in-person counselling session, I am based in in Walthamstow, east London. The closest train station is Wood street, and there is paid parking available on the side roads.</p>

                                    <p style={{ marginBottom: "10px" }}>I also offer online sessions for those who don’t live in the area, can’t travel or simply don’t want to do in-person counselling and feel more comfortable online.
                                    </p>

                                    <p style={{ marginBottom: "10px" }}><span className='para-bold'>Pricing & Session length : </span></p>

                                    <p style={{ marginBottom: "10px" }}>Individual Adult Counselling  (50 minutes) - £50 </p>

                                    <p style={{ marginBottom: "10px" }}>Child and Young person Counselling (50 minutes) - £50</p>

                                    <p style={{ marginBottom: "10px" }}>Please note I also have a limited number of slots for low-income clients and students, so please contact me to discuss this.</p>

                                    <p style={{ marginBottom: "10px" }}><span className='para-bold'>Appointments are currently available : </span></p>

                                    <p style={{ marginBottom: "10px" }}>In person sessions: Monday, Tuesdays and Thursdays 9am- 8pm.</p>

                                    <p style={{ marginBottom: "10px" }}>Online, evening and weekend sessions are also available. Please contact me to discuss.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyLocation