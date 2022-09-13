import React from "react";
import Layout from "../Layout/Layout";
import InsertHooksCargo from "../hooks/Cargo/InsertHooksCargo";
import QuestionHooksCargo from "../hooks/Cargo/QuestionHooksCargo";
import HeaderHooksCargo from "../hooks/Cargo/HeaderHooksCargo";
import SiderHooksCargo from "../hooks/Cargo/SiderHooksCargo";
import OrderHooksCargo from "../hooks/Cargo/OrderHooksCargo";
import SocialHooksCargo from "../hooks/Bike/SocialHooksBike";
import "./taxi.css";
import { useEffect } from "react";

const Cargo = () => {
  useEffect(() => {
    document.title = "اسنپ بار - باربری";
  }, []);
  return (
    <Layout>
      <HeaderHooksCargo />
      <SocialHooksCargo />
      <SiderHooksCargo />
      <InsertHooksCargo />
      <QuestionHooksCargo />
      <OrderHooksCargo />
    </Layout>
  );
};

export default Cargo;
