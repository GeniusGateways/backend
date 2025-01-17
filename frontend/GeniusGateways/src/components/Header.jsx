import React, { useState } from "react";
import "./../styles/header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* <img src="./assets/logo.png" alt="Genius Gateways" /> */}
        <h2>GENIUS GATEWAYS</h2>
      </div>
      <nav className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
        <a href="home">Home</a>
        <a href="about">About Us</a>
        <a href="study">Study Visa</a>
        <a href="blog">Blog</a>
        <a href="mbbs">MBBS</a>
        <a href="contactus" className="btn-contact">Contact Us</a>
        {/* Removed the "Contact Us" button from the header */}
      </nav>
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* Sidebar content */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <a href="home" onClick={toggleSidebar}>Home</a>
        <a href="about" onClick={toggleSidebar}>About us</a>
        <a href="study" onClick={toggleSidebar}>Study Visa</a>
        <a href="blog" onClick={toggleSidebar}>Blog</a>
        <a href="mbbs" onClick={toggleSidebar}>MBBS</a>
        <a href="ContactUs" className="btn-contact" onClick={toggleSidebar}>Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
