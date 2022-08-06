import React from "react";
import Naviagtion from "../Components/Navigation/Navigation";
const Layout = ({ children }) => {
  return (
    <div>
      <Naviagtion />
      {children}
    </div>
  );
};

export default Layout;
