import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Content.css";
import Background from "../../assets/background.png";
import cards from "../../assets/cards.png";
import graphs from "../../assets/graphs.png";
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import responsive from "../../assets/cardsresponsive.png";

const Content = () => {
  return (
    <div className="cnt-main">
      <div className="cnt-left">
          <div class="search-container">
            <input
              type="text"
              placeholder="Search doctor"
              name="search"
              className="src-input"
            />
            <IoSearch className="src-icon" />
          </div>
        <div className="text-paragraph">
          <div className="src-paragraph">
            <p className="src-text1">
              The Countdown is on{" "}
              <span className="src-text2">- get Ready for our app launch.</span>
            </p>
            <p className="src-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus.
            </p>
          </div>

          <div className="graphs-data">
            <div className="cnt-display">
              <div className="cnt-doc">
                <FaUserDoctor style={{ color: "E957C9", fontSize: "24px" }} />
                <div className="cnt-count">
                  <p className="cnt-ttl">Total Doctors</p>
                  <p className="cnt-num">15,000+</p>
                </div>
              </div>
              <div className="cnt-pat">
                <BsFillPersonFill
                  style={{ color: "E957C9", fontSize: "28px" }}
                />
                <div className="cnt-count">
                  <p className="cnt-ttl">Total Patients</p>
                  <p className="cnt-num">15+ Lakh</p>
                </div>
              </div>
            </div>
            <div>
              <img src={graphs} alt="graphs" className="cnt-graphs" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cnt-right"> */}
      <img src={cards} alt="notifications" className="cnt-card cnt-right" />
      <img
        src={responsive}
        alt="notifications"
        className="cnt-card cnt-right-res"
      />

      {/* </div> */}
    </div>
  );
};

export default Content;
