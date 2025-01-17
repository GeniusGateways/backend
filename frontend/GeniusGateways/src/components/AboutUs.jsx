import React from "react";
import "./../styles/aboutUs.css";

import Group_88 from "../assets/Group_88.png"

const AboutUs = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <div className="icon-circle"></div>
          <h1>
            Effortless <span className="highlight">Emigration</span>,<br /> 
            Boundless <span className="highlight">Opportunities!</span>
          </h1>
          <p>
            Genius Gateways, based in Mumbai, specializes in swift document attestation and visa stamping services for
            the USA, UK, Canada, Australia, Europe, and Gulf countries. With expert guidance and secure processing,
            they ensure hassle-free legalization of personal, educational, and corporate documents across India.
          </p>
          <a href="#" className="cta-link">
            See more Informations <span className="arrow">&rarr;</span>
          </a>
        </div>
        <div className="image">
          <img src={Group_88} alt="Team" className="image-content" />
          {/* <div className="play-button">
            <div className="play-icon">&#9658;</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
