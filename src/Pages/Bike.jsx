import React from "react";
import Layout from "../Layout/Layout";
import InsertHooksBike from "../hooks/Bike/InsertHooksBike";
import QuestionHooksBike from "../hooks/Bike/QuestionHooksBike";
import HeaderHooksBike from "../hooks/Bike/HeaderHooksBike";
import SocialHooksBike from "../hooks/Bike/SocialHooksBike";
import SiderHooksBike from "../hooks/Bike/SiderHooksBike";
import OrderHooksBike from "../hooks/Bike/OrderHooksBike";
import { useEffect } from "react";

const Bike = () => {
  useEffect(() => {
    document.title = " اسنپ باکس - درخواست پیک موتوری تهران و نقاط کشور |اسنپ";
  }, []);
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
