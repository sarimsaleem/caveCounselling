import React, { useEffect, useState } from "react";
import { message, Button } from "antd"; 
import "./GetInTouchMap.css";

function GetInTouchMap() {
    const [loading, setLoading] = useState(false); 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        const form = document.getElementById("contactForm");

        if (form) {
            const handleSubmit = async (event) => {
                event.preventDefault();
                setLoading(true); 

                let formData = new FormData(form);

                try {
                    let response = await fetch(form.action, {
                        method: form.method,
                        body: formData,
                    });

                    if (response.ok) {
                        message.success("Thank you! Your message has been sent."); 
                        form.reset();
                    } else {
                        message.error("Something went wrong. Please try again.");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    message.error("An error occurred. Please try again.");
                } finally {
                    setLoading(false); 
                }
            };

            form.addEventListener("submit", handleSubmit);

            return () => {
                form.removeEventListener("submit", handleSubmit);
            };
        }
    }, []);

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
                                id="contactForm"
                                action="https://formsubmit.co/0f2fde426d460ef8d304fb6dcc84e445"
                                method="POST"
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
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
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
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
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
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
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
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="box" />
                                <input type="hidden" name="_subject" value={`Request For Appointment From ${firstName}`} />

                                <div className="text-section">
                                    <label className="contact-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your message..."
                                        rows="8"
                                        value={messageText}
                                        onChange={(e) => setMessageText(e.target.value)}
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
