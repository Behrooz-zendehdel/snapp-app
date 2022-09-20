import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BeatLoader from "react-spinners/BeatLoader";
import HeaderHooksExperss from "../hooks/Experrs/HeaderHooksExperrs";
import SocialHooksExperrs from "../hooks/Experrs/SocialHooksExperrs";
import SiderHooksExperrs from "../hooks/Experrs/SiderHooksExperrs";
import QuestionHooksExperrs from "../hooks/Experrs/QuestionHooksExperrs";
import OrderHooksExperrs from "../hooks/Experrs/OrderHooksExperrs";
import GroupinghooksExperrs from "../hooks/Experrs/GroupinghooksExperrs";
import InsertHooksExperrs from "../hooks/Experrs/InsertHooksExperrs";
const Experss = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading;
  }, []);
  return (
    <Layout>
      {loading ? (
        <>
          <HeaderHooksExperss />
          <SocialHooksExperrs />
          <GroupinghooksExperrs />
          <SiderHooksExperrs />
          <InsertHooksExperrs />
          <QuestionHooksExperrs />
          <OrderHooksExperrs />
        </>
      ) : (
        <BeatLoader />
      )}
    </Layout>
  );
};

export default Experss;
