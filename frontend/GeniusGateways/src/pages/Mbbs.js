import React, { useEffect, useState } from "react";
import "./../styles/mbbs.css";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { backend_api } from "../App";

const Mbbs = () => {
  const [countries, setCountries] = useState([]);

  const fetchMbbs = async () => {
    try {
      console.log(`${backend_api}/api/Mbbs`);
      const req = await fetch(`${backend_api}/api/Mbbs`);
      const data = await req.json();
      console.log(data.docs);
      setCountries(data.docs); // Assuming the API response has the "docs" field
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMbbs();
  }, []);

  return (
    <>
      <Header />
      <HeroSection />

      <section className="mbbs-section">
        {/* MBBS Header */}
        <div className="mbbs-header">
          <h1>MBBS</h1>
          <span className="underline"></span>
        </div>

        {/* Dynamically render MBBS cards */}
        <div className="mbbs-cards">
          {countries.map((country) => (
            <div className="mbbs-card" key={country._id}>
              <div className="mbbs-image">
                <img
                  src={`${backend_api}${country.image.url}`}
                  alt={`MBBS in ${country.title}`}
                />
              </div>
              <div className="mbbs-content">
                <h2>{country.title}</h2>
                <p>
                  {country['short-detail']?.root?.children?.[0]?.children?.[0]?.text || "No details available"}
                </p>
                <Link to={`/Detail`}  state={ {Mbbs_country:country} } className="read-more">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mbbs;
