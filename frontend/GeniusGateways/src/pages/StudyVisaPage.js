import React, { useEffect, useState } from "react";
import "./../styles/studyVisa.css";
import { Link } from "react-router-dom"; // Import Link for navigation

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { backend_api } from "../App";

const StudyVisaPage = () => {
  const [countries, setCountries] = useState([]);

  const fetchStudyabroad = async () => {
    try {


      console.log(`${backend_api}/api/studyabroad`);
      const req = await fetch(`${backend_api}/api/studyabroad`);
      const data = await req.json();
      console.log(data.docs[0].image.url)
      setCountries(data.docs); // Assuming the API response has the "
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudyabroad();
  }, []);

  return (
    <>
      <Header />
      <HeroSection />

      <section className="study-visa">
        {/* Section Header */}
        <div className="section-header">
          <h1>Study Visa</h1>
          <span className="underline"></span>
        </div>

        {/* Dynamically render country panels */}
        {countries.map((country, index) => (
          <div
            className={`study-section ${index % 2 === 0 ? "" : "reverse"}`}
            key={country._id}
          >
            <div className="text-content">
              <h2>{country.title} Overview</h2>
              <p>{country['short-detail'].root.children[0].children[0].text}</p>
             
              <Link to={`/Detail`}  state={{ country }}>
                <button  >Read more </button>
              </Link>
            </div>
            <div className="image-content">
              <img src={backend_api+country.image.url} alt={`Study in ${country.title}`} />
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default StudyVisaPage;
