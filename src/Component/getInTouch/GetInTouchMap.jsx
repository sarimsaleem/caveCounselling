import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./GetInTouchMap.css";

function GetInTouchMap() {
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_sazi7cx",  
            "template_qpd1758", 
            form.current,
            "XwTfcKiagzY0CXetf" 
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                event.target.reset(); 
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Something went wrong. Please try again.");
            }
        );
    };

    return (
        <>
            <div className="contact-us-form section-padding" id="contact-me">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-us-form-heading heading-with-sub">
                                <h3 className="p-0">Get In Touch With Me</h3>
                                <h6 className="p-0 m-0">
                                    Fill the form below so I can get to know you and your needs better.
                                </h6>
                                <p>
                                    Feel free to contact me if you have any questions about how counseling works, or to
                                    arrange an initial assessment appointment.
                                </p>
                                <p>
                                    Booking an initial session of counseling can often help in your decision about
                                    whether counseling is right for you or your child. There is no obligation to
                                    continue after this initial session.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-form-container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8">
                                <form ref={form} id="contactForm" onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <div className="row" style={{ marginBottom: "0px" }}>
                                            <div className="fst-lst col-md-6 col-12">
                                                <label className='contact-label' htmlFor="">First Name</label>
                                                <input className="form-control" type="text" name="firstName" id="firstName" placeholder="John *" required />
                                            </div>
                                            <div className="col-6 col-md-6 col-12 email">
                                                <label className='contact-label' htmlFor="">Last Name</label>
                                                <input className="form-control" type="text" name="lastName" id="lastName" placeholder="Doe *" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row" style={{ marginBottom: "0px" }}>
                                            <div className="fst-lst col-md-6 col-12">
                                                <label className='contact-label' htmlFor="">E-mail</label>
                                                <input className="form-control" type="email" name="email" id="email" placeholder="example@example.com *" required />
                                            </div>

                                            <div className="col-6 col-md-6 col-12 email">
                                                <label className='contact-label' htmlFor="">Subject</label>
                                                <input className="form-control" type="text" name="subject" id="subject" placeholder="Your subject *" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-section">
                                        <label className='contact-label' htmlFor="">Message</label>
                                        <textarea className="form-control" name="message" id="message" placeholder="Your message..." rows="8" required></textarea>
                                    </div>
                                    <div className="contact-btn">
                                        <button type="submit">Send Your Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetInTouchMap;

