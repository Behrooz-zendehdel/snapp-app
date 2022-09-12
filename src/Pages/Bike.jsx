import React from "react";
import Layout from "../Layout/Layout";
import InsertHooksBike from "../hooks/Bike/InsertHooksBike";
import QuestionHooksBike from "../hooks/Bike/QuestionHooksBike";
import HeaderHooksBike from "../hooks/Bike/HeaderHooksBike";
import SocialHooksBike from "../hooks/Bike/SocialHooksBike";
import SiderHooksBike from "../hooks/Bike/SiderHooksBike";
import OrderHooksBike from "../hooks/Bike/OrderHooksBike";

const Bike = () => {
  return (
    <Layout>
      <HeaderHooksBike />
      <SocialHooksBike />
      <SiderHooksBike />
      <InsertHooksBike />
      <QuestionHooksBike />
      <OrderHooksBike />
    </Layout>
  );
};

export default Bike;
