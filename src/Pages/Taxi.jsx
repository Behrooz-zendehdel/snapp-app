import React from "react";
import Layout from "../Layout/Layout";
import InsertHooksTaxi from "../hooks/Taxi/InsertHooksTaxi";
import QuestionHooksTaxi from "../hooks/Taxi/QuestionHooksTaxi";
import HeaderHooksTaxi from "../hooks/Taxi/HeaderHooksTaxi";
import SocialHooksTaxi from "../hooks/Taxi/SocialHooksTaxi";
import SiderHooksTaxi from "../hooks/Taxi/SiderHooksTaxi";
import OrderHooksTaxi from "../hooks/Taxi/OrderHooksTaxi";
import "./taxi.css";

const Taxi = () => {
  return (
    <Layout>
      <HeaderHooksTaxi />
      <SocialHooksTaxi />
      <SiderHooksTaxi />
      <InsertHooksTaxi />
      <QuestionHooksTaxi />
      <OrderHooksTaxi />
    </Layout>
  );
};

export default Taxi;
