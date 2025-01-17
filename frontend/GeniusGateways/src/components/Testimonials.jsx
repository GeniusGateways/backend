import React, { useState } from "react";
import "./../styles/testimonials.css";
import testinomial_1 from "../assets/testinomial_1.jpg";
import test_3 from "../assets/test_3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I am extremely satisfied with the Fuel Ethanol Plant from SAR Chem-Tech Solution. The product quality and performance exceeded my expectations. Their team provided exceptional support throughout the process, from initial consultation to installation. Highly recommended for anyone looking for reliable and efficient industrial solutions.",
      author: "Kaushik Chaudhari",
      role: "Evaporator",
      photo: testinomial_1,
    },
    {
      id: 2,
      text: "The team at SAR Chem-Tech provided exceptional service. Their solutions were exactly what we needed for our project, and their support was unparalleled. I highly recommend them for anyone in need of high-quality industrial solutions.",
      author: "Priya Sharma",
      role: "Project Manager",
      photo: test_3,
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials">
      <div className="section-header">
        <span className="promotion">PROMOTION</span>
        <h2>See What Our Clients Say About Us</h2>
      </div>
      <div className="testimonial-slider">
        <button className="slider-btn prev" onClick={prevTestimonial}>
          <span>&#8592;</span>
        </button>
        <div className="testimonial">
          <div className="client-photo">
            <img
              src={testimonials[currentIndex].photo}
              alt={testimonials[currentIndex].author}
            />
          </div>
          <blockquote>
            <p>{testimonials[currentIndex].text}</p>
            <footer>
              <strong>{testimonials[currentIndex].author}</strong> -{" "}
              {testimonials[currentIndex].role}
            </footer>
          </blockquote>
        </div>
        <button className="slider-btn next" onClick={nextTestimonial}>
          <span>&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
