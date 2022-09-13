import React from "react";
import Layout from "../Layout/Layout";
import "./Food.css";
import InsertHooksFood from "../hooks/Food/InsertHooksFood";
import QuestionHooksFood from "../hooks/Food/QuestionHooksFood";
import HeaderHooksFood from "../hooks/Food/HeaderHooksFood";
import SocialHooksFood from "../hooks/Food/SocialHooksFood";
import GroupingHooksFood from "../hooks/Food/GroupingHooksFood";
import TypesHooksFood from "../hooks/Food/TypesHooksFood";
import SiderHooksFood from "../hooks/Food/SiderHooksFood";
import OrderHooksFood from "../hooks/Food/OrderHooksFood";
import { useEffect } from "react";
const Food = ({}) => {
  useEffect(() => {
    document.title = "سفارش آنلاین غذا اسنپ فود - رستوران و فست فود | اسنپ";
  }, []);
  return (
    <Layout>
      <HeaderHooksFood />
      <SocialHooksFood />
      <GroupingHooksFood />
      <TypesHooksFood />
      <SiderHooksFood />
      <InsertHooksFood />
      <QuestionHooksFood />
      <OrderHooksFood />
    </Layout>
  );
};

export default Food;
