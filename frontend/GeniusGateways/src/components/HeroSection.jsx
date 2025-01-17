import React from "react";
import "./../styles/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Seamless <span className="highlight">Visa Solutions</span>
          <br /> for Your <span className="highlight">Global Journey</span>!
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
