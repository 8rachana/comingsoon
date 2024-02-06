import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import header from "../../assets/header.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hd-main">
      <div className="hd-hamburger" onClick={toggleMenu}>
        <div className="hd-line"></div>
        <div className="hd-line"></div>
        <div className="hd-line"></div>
      </div>
      <img src={logo} alt="greoilc" className="hd-logo" />
      <img src={header} alt="greoilc" className="hd-header" />

      <div className={`hd-menu ${isOpen ? "open" : ""}`}>
        <button className="hd-btn1">Home</button>
        <button className="hd-btn2">Services</button>
        <button className="hd-btn3">Booking</button>
        <button className="hd-btn4">Contact</button>
      </div>
    </div>
  );
};

export default Header;
