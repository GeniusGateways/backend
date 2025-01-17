import React, { useState } from 'react';
import "./../styles/services.css";

// Import icons directly
import visaIcon from "../assets/visaIcon.png";
import emigrationIcon from "../assets/emigrationIcon.png";
import servicesIcon from "./../assets/servicesIcon.png";

const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // Define services with direct icon imports
  const services = [
    {
      title: 'Visa Application',
      description: 'Genius Gateways provides comprehensive visa application support, including document preparation, biometric assistance, and smooth processing for global travel and relocation.',
      icon: visaIcon,
    },
    {
      title: 'Visa Emigration Services',
      description: 'Genius Gateways offers expert visa services, ensuring smooth processing for study, work, family, and travel visas worldwide.',
      icon: emigrationIcon,
    },
    {
      title: 'Emigration Services',
      description: 'Genius Gateways offers expert emigration services, assisting with documentation, visa processing, and seamless relocation to destinations worldwide.',
      icon: servicesIcon,
    },
  ];

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Services we offer</h2>

      <div className="services-slider">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Slider navigation */}
      <div className="slider-navigation">
        {services.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="slider-pagination">
        <span className="page-number">{String(activeIndex + 1).padStart(2, '0')}</span>
        <div className="page-line"></div>
        <span className="page-number">{String(services.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default ServicesSlider;
