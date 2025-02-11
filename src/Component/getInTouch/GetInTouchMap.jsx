import React, { useEffect, useState } from "react";
import { message, Button } from "antd"; 
import "./GetInTouchMap.css";

function GetInTouchMap() {
    const [loading, setLoading] = useState(false); 
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
      });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);
    
        const response = await fetch("https://cavecounselling.com/send-email.php", {
          method: "POST",
          body: formDataToSend,
        });
    
        const result = await response.text();
    
        if (result === "success") {
            setFormData({
                firstName: "",
                lastName: "",
                subject: "",
                email: "",
                message: "",
              });
            message.success("Email sent successfully!");
        } else {
            message.error("Failed to send email.");
        }
    setLoading(false)

      };

    return (
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
                        </div>
                    </div>
                </div>
                <div className="contact-us-form-container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8">
                            <form
                                // id="contactForm"
                                // action="https://formsubmit.co/sarimsaleem07@gmail.com"
                                // method="POST"
                                onSubmit={sendEmail}
                            >
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="fst-lst col-md-6 col-12">
                                            <label className="contact-label">First Name</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="firstName"
                                                placeholder="John *"
                                                value={formData?.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-6 col-md-6 col-12 email">
                                            <label className="contact-label">Last Name</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="lastName"
                                                placeholder="Doe *"
                                                value={formData?.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="fst-lst col-md-6 col-12">
                                            <label className="contact-label">E-mail</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                placeholder="example@example.com *"
                                                value={formData?.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-6 col-md-6 col-12 email">
                                            <label className="contact-label">Subject</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="subject"
                                                placeholder="Your subject *"
                                                value={formData?.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-section">
                                    <label className="contact-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your message..."
                                        rows="8"
                                        value={formData?.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="contact-btn">
                                    <Button htmlType="submit" loading={loading} disabled={loading}>
                                        {loading ? "Sending..." : "Send Your Message"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouchMap;