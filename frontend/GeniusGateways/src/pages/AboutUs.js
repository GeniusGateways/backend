import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs" 
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";




const About = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutUs />
            <WhyChooseUs />
            <Testimonials />
            <Footer />
        </>
    ); 
};


export default About;