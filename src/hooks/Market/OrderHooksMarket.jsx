import React from "react";
import marketorder1 from "../../assets/marketorder1.jpeg";
import marketorder from "../../assets/marketorder.png";

const OrderHooksMarket = () => {
  return (
    <section>
      <div className="order">
        <img
          src={marketorder1}
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="detail-order">
        <img src={marketorder} alt="" />
        <h4>پیک موتوری اسنپ: ارسال آسان، تحویل به‌موقع</h4>
        <p>
          هم‌اکنون سرویس پیک موتوری اسنپ، از طریق سیستم‌عامل‌های مختلف موبایل و
          وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات پیک موتوری را با
          سوپر اپلیکیشن اسنپ تجربه کنید.
        </p>
        <a href="https://app.snapp.taxi//" target="_blank">
          <button>درخواست موتور </button>
        </a>
      </div>
    </section>
  );
};

export default OrderHooksMarket;
