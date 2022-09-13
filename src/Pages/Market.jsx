import React from "react";
import HeaderHooksMarket from "../hooks/Market/HeaderHooksMarket";
import InsertHooksMarket from "../hooks/Market/InsertHooksMarket";
import QuestionsHooksMarket from "../hooks/Market/QuestionsHooksMarket";
import SiderHooksMarket from "../hooks/Market/SiderHooksMarket";
import SocialHooksMarket from "../hooks/Market/SocialHooksMarket";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
const Market = () => {
  useEffect(() => {
    document.title = "اسنپ مارکت - سوپر مارکت آنلاین ,خرید اینترنتی با اسنپ";
  }, []);
  return (
    <Layout>
      <HeaderHooksMarket />
      <SocialHooksMarket />
      <SiderHooksMarket />
      <InsertHooksMarket />
      <QuestionsHooksMarket />
    </Layout>
  );
};

export default Market;
