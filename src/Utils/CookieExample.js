import React, { useEffect, useState } from "react";
import { setCookie, getCookie, removeCookie } from "./CookieHelper";

const CookieExample = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = getCookie("userToken");
    if (savedToken) {
      setToken(savedToken);
    }       
  }, []);

  const handleLogin = () => {
    setCookie("userToken", "new_token_value", 7);
    setToken("new_token_value");
  };

  const handleLogout = () => {
    removeCookie("userToken");
    setToken("");
  };

  return (
    <div>
      <h2>Token: {token || "No token found"}</h2>
      <button onClick={handleLogin}>Set Cookie</button>
      <button onClick={handleLogout}>Remove Cookie</button>
    </div>
  );
};

export default CookieExample;