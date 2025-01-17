import React from "react";
import "./../styles/universities.css";

// Import flag images
import finland from "../assets/finland.jpg";
import uk from "../assets/uk.png";
import us from "../assets/us.png";
import germany from "../assets/germany.jpg";


const Universities = () => {
  return (
    <section className="universities-section">
      <div className="section-header">
        <h2>
          <span className="divider"></span>
          Meet the Universities
        </h2>
        {/* <div className="navigation-buttons">
          <button className="nav-btn prev">
            <i>&#8592;</i>
          </button>
          <button className="nav-btn next">
            <i>&#8594;</i>
          </button>
        </div> */}
      </div>
      <div className="universities-container">
        <div className="university">
          <img src={finland} alt="Finland" />
          <p>Finland</p>
        </div>
        <div className="university">
          <img src={uk} alt="United Kingdom" />
          <p>United Kingdom (UK)</p>
        </div>
        <div className="university">
          <img src={us} alt="United States of America" />
          <p>United States Of America</p>
        </div>
        <div className="university">
          <img src={germany} alt="Germany" />
          <p>Germany</p>
        </div>
      </div>
    </section>
  );
};

export default Universities;
