import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSlider from "../components/Services";
import AboutUs from "../components/AboutUs";
import Universities from "../components/Universities";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ServicesSlider />
            <AboutUs />
            <Universities />
            <Testimonials />
            <Footer />
        </>
    ); 
};


export default Home;