import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./cookieConsent.css";
import { RxCookie } from "react-icons/rx";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consentGiven = localStorage.getItem("cookieConsent");
        const declined = localStorage.getItem("cookieDeclined");

        if (!consentGiven && !declined) {
            setIsVisible(true);

            Object.keys(Cookies.get()).forEach(cookieName => {
                Cookies.remove(cookieName, { path: "/", secure: true, sameSite:"none"});
            });
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true"); 
        Cookies.set("user", "true", { expires: 365, path: "/", secure: true, sameSite: "Strict" });
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieDeclined", "true");

        Object.keys(Cookies.get()).forEach(cookieName => {
            Cookies.remove(cookieName, { path: "/", secure: true, sameSite: "Strict" });
        });
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookieContainer">
            <div className="cookie-icon-parent">
                <RxCookie />
            </div>
            <p className="cookie-text">
                By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run efficiently.
            </p>
            <div className="cookie-btn-container">
                <button onClick={declineCookies} className="declineBtn">Decline</button>
                <button onClick={acceptCookies} className="acceptBtn">Accept</button>
            </div>
        </div>
    );
};

export default CookieConsent;