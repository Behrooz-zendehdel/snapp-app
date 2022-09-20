import React from "react";
import motor from "../../assets/motor.jpg";

const HeaderHooksExperrs = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="header-home">
        <div className="home-right" style={{ background: "rgb(255, 102, 31)" }}>
          <div className="detail">
            <h1>اسنپ اکسپرس تحویل کمتر از ۳۰ دقیقه</h1>
            <p style={{ marginTop: "3rem" }}>
              دیگر برای خریدهای روزمره نیاز نیست به فروشگاه محله بروید. با سرویس
              تحویل فوری اسنپ اکسپرس، انواع محصولات و خواربار را از فروشگاه‌های
              اطراف‌تان سفارش دهید و کمتر از ۳۰ دقیقه، درب منزل با بسته‌بندی
              مناسب تحویل بگیرید.
            </p>

            <button
              className="btn-web"
              type="submit"
              style={{ marginTop: "6rem", background: "rgb(255, 102, 31)" }}
            >
              خرید با تحویل فوری
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

export default HeaderHooksExperrs;
