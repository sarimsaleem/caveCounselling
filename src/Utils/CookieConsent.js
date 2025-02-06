import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./cookieConsent.css"

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
    localStorage.setItem("cookieDeclined", "true"); // Remember that the user declined
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookieContainer">
      <p className="cookie-text">This website uses cookies to enhance your experience.</p>
      <div className="cookie-btn-container" >
        <button onClick={acceptCookies} className="acceptBtn" >Accept</button>
        <button onClick={declineCookies} className="declineBtn" >Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;