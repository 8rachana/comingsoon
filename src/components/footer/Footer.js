import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/ftr_logo.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import line from "../../assets/curves.png";
const footer = () => {
  return (
    <div className="ft-main">
      <div className="ft-top">
        <div className="ft-left">
          <img src={footerlogo} alt="greoilc" className="ft-logo" />
          <p className="ft-det">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
          <div className="ft-scl">
            <FaInstagram className="ins-logo" />
            <FiTwitter className="twt-logo" />
            <FaFacebookF className="fbk-logo" />
          </div>
        </div>
        <div className="ft-right">
          <img src={line} />
          <div className="ft-grid">
            <h2>Home</h2>
            <h2>Booking</h2>
            <h2>Top Doctors</h2>
            <h2>Our Services</h2>
            <h2>Reviews</h2>
            <h2>Insurance</h2>
          </div>
        </div>
      </div>
      <div>
        <p className="ft-detail">
          About Us | Privacy Policy | Terms of Conditions
        </p>
        <hr style={{ border: "1px solid white" }} />
        <p className="ft-cpy">Copywrite 2022. All rights reserved.</p>
      </div>
    </div>
  );
};

export default footer;
