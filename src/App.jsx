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
import Taxi from "./Pages/Taxi";
import Bike from "./Pages/Bike";
import Cargo from "./Pages/Cargo";
import Food from "./Pages/Food";
import Market from "./Pages/Market";
import Experss from "./Pages/Experss";
import Ticket from "./Pages/Ticket";
import TicketOut from "./Pages/TicketOut";
import Doctor from "./Pages/Doctor";
import Hotel from "./Pages/Hotel";
import TripOut from "./Pages/TripOut";
import Shop from "./Pages/Shop";
import Bus from "./Pages/Bus";
import Train from "./Pages/Train";
import Club from "./Pages/Club";
import Bors from "./Pages/Bors";
import ServiceBus from "./Pages/ServiceBus";
import Pay from "./Pages/Pay";
import SnappTicket from "./Pages/SnappTicket";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/organizition" element={<Organization />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/homeApp/taxi" element={<Taxi />} />
        <Route path="/homeApp/bike" element={<Bike />} />
        <Route path="/homeApp/cargo" element={<Cargo />} />
        <Route path="/homeApp/food" element={<Food />} />
        <Route path="/homeApp/market" element={<Market />} />
        <Route path="/homeApp/experss" element={<Experss />} />
        <Route path="/homeApp/ticket" element={<Ticket />} />
        <Route path="/homeApp/ticketout" element={<TicketOut />} />
        <Route path="/homeApp/doctor" element={<Doctor />} />
        <Route path="/homeApp/hotel" element={<Hotel />} />
        <Route path="/homeApp/tripout" element={<TripOut />} />
        <Route path="/homeApp/shop" element={<Shop />} />
        <Route path="/homeApp/bus" element={<Bus />} />
        <Route path="/homeApp/train" element={<Train />} />
        <Route path="/homeApp/club" element={<Club />} />
        <Route path="/homeApp/bors" element={<Bors />} />
        <Route path="/homeApp/servicebus" element={<ServiceBus />} />
        <Route path="/homeApp/pay" element={<Pay />} />
        <Route path="/homeApp/snappticket" element={<SnappTicket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
