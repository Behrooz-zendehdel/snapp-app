import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Clubs from "./Pages/Clubs";
import Register from "./Pages/Register";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Organization from "./Pages/Organization";
import Blogs from "./Pages/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="organizition" element={<Organization />} />
        <Route path="register" element={<Register />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
