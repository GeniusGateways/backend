import React from "react";
import "./../styles/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="section-header">
        <h2>Why Choose Us ?</h2>
      </div>
      <div className="description">
        <span className="quote left-quote">“</span>
        <p>
          Genius Gateways stands out for its expertise, quick processing, and
          reliable document attestation and visa stamping services. With a team
          of skilled professionals, modern technology, and a customer-focused
          approach, we ensure secure, hassle-free legalization for individuals
          and businesses across India.
        </p>
        <span className="quote right-quote">”</span>
      </div>
      <div className="stats-container">
        <div className="stat-box">
          <h3>2.5 Lac</h3>
          <p>Application</p>
        </div>
        <div className="stat-box">
          <h3>3000+</h3>
          <p>Visas</p>
        </div>
        <div className="stat-box">
          <h3>50K+</h3>
          <p>Students</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
