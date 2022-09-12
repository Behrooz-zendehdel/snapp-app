import React from "react";
import motor from "../../assets/motor.jpg";

const HeaderHooksBike = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="header-home">
        <div className="home-right">
          <div className="detail">
            <h1>پیک موتوری اسنپ!</h1>
            <p style={{ marginTop: "3rem" }}>
              با خدمات پیک موتوری اسنپ، ارسال آسان و تحویل به موقع مرسولات را
              تجربه کنید یا با اسنپ بایک سفر کنید و ترافیک را دور بزنید!
            </p>

            <button
              className="btn-web"
              type="submit"
              style={{ marginTop: "6rem" }}
            >
              درخواست موتور
            </button>
          </div>
        </div>
        <div className="home-left">
          <img src={motor} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeaderHooksBike;
