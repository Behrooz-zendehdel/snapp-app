import React from "react";
import Naviagtion from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Naviagtion />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
