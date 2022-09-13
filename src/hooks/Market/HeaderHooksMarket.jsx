import React from "react";
import headermarket from "../../assets/headermarket.jpeg";

const HeaderHooksMarket = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="header-home">
        <div className="home-right" style={{ background: "blue" }}>
          <div className="detail">
            <h1>سوپرمارکت آنلاین اسنپ!</h1>
            <p style={{ marginTop: "3rem" }}>
              بیش از ۵ هزار کالای مصرفی و خواربار مختلف در سوپرمارکت اسنپ در
              دسترس است. سفارش شما در کوتاه‌ترین زمان و با بسته‌بندی مناسب، درب
              منزل یا محل کار تحویل خواهد شد.
            </p>

            <button
              className="btn-web"
              type="submit"
              style={{ marginTop: "6rem", background: "blue", width: "200px" }}
            >
              خرید با تخفیف
            </button>
          </div>
        </div>
        <div className="home-left">
          <img src={headermarket} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeaderHooksMarket;
