import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./cookieConsent.css"
import { RxCookie } from "react-icons/rx";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = Cookies.get("user");
        const declined = localStorage.getItem("cookieDeclined");

        if (!consent && !declined) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("user", "true", { expires: 365 });
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieDeclined", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="cookieContainer">
                {/* <h1 className="cookie-heading">Wellcome To Cave Counselling</h1> */}
                <div className="cookie-icon-parent">
                    <RxCookie />
                </div>
                <p className="cookie-text">By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run efficiently.</p>
                <div className="cookie-btn-container" >
                    <button onClick={declineCookies} className="declineBtn" >Decline</button>
                    <button onClick={acceptCookies} className="acceptBtn" >Accept</button>
                </div>
            </div>
        </>
    );
};

export default CookieConsent;