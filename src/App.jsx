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
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
