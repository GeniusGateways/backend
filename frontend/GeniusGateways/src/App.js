import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import StudyVisaPage from "./pages/StudyVisaPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import Mbbs from "./pages/Mbbs";
import Popup from "./components/popup";
import { Detail } from "./pages/Detail";


export  const backend_api='http://localhost:3000'

   const App = () => {

  return (
    <>
      <Router>
      <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/study" element={<StudyVisaPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/mbbs" element={<Mbbs />} />
          <Route path="/contactus" element={<ContactUsPage />} />
         <Route path="/Detail" element={<Detail/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
