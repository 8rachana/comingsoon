import React, { useState, useEffect } from "react";
import "./Specialists.css";
import boy from "../../assets/boy.svg";
import medicine from "../../assets/medicine.svg";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaAward, FaTooth } from "react-icons/fa6";
import { PiHeadsetFill } from "react-icons/pi";
import ReactStars from "react-rating-stars-component";
import person from "../../assets/person.png";
import Pagination from "../../components/Pagination";

const Specialists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const doctorList = [
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
    {
      name: "Dr. Julie Smith",
      specialty: "Dental Surgeon",
      image: person,
    },
  ];

  const [doctorsPerPage] = useState(3);
  const totalDoctors = doctorList.length;

  useEffect(() => {
    const totalPages = Math.ceil(totalDoctors / doctorsPerPage);
    setTotalPages(totalPages);
  }, [totalDoctors, doctorsPerPage]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
 const handlePageChange = (newPage) => {
   setCurrentPage(newPage);
 };
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = Math.min(startIndex + doctorsPerPage, totalDoctors);
  const displayedDoctors = doctorList.slice(startIndex, endIndex);

  return (
    <div className="spec-main">
      <div className="spec-one">
        <div className="spec-ttl">
          <p className="spec-ttl1">Our Specialists</p>
          <p className="spec-page">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </p>
        </div>
        <div className="spec-doclist" onScroll={handleScroll}>
          {displayedDoctors.map((doctor, index) => (
            <div className="spec-doc" key={index}>
              <img
                src={doctor.image}
                className="spec-img"
                alt={`Dr. ${doctor.name}`}
              />
              <p className="spec-docname">{doctor.name}</p>
              <p className="spec-docspec">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="spec-two">
        <div className="spec-two-left">
          <div className="spec-two-ttl">
            <p className="del-ttl1">
              <AiFillThunderbolt /> Lightning Fast Delivery
            </p>
            <p className="del-ttl2">Book Medicines</p>
            <span className="del-ttl3"> From Us.</span>
          </div>
          <div className="medicine-abt">
            <img src={medicine} alt="medicine" className="medicine-icon" />
            <div className="del-btn-cnt">
              <p className="del-cnt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
              </p>
              <button className="del-btn">Know more</button>
            </div>
          </div>
        </div>
        <img src={boy} alt="boy" className="delivery-boy" />
      </div>
      <div className="spec-three">
        <div className="amnt-icons">
          <div className="amen-icon">
            <FaAward className="amenities-icon" />
            <p className="amenities">Certified Doctors</p>
          </div>
          <div className="amen-icon">
            <FaTooth className="amenities-icon" />
            <p className="amenities">Amenities</p>
          </div>
          <div className="amen-icon">
            <PiHeadsetFill className="amenities-icon" />
            <p className="amenities">24/7 Support</p>
          </div>
        </div>
        <div className="reviews">
          <div className="rev-ttl">
            <p className="rev-ttl1">1800+ Reviews</p>
            <p className="rev-ttl2">1/3</p>
          </div>
          <div className="rev-customers">
            <img className="cus-img" src={person} />
            <div className="cust-detail">
              <p className="cust-name">Melvin Dennis</p>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                activeColor="#E957C9"
                value={5}
                color="#E957C9"
              />
              <p className="cust-cnt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis amet molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla egets accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                maecenas eget condimentum velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
