import React from "react";
import bike from "../../assets/bike.svg";
const OrderHooksBike = () => {
  return (
    <section>
      <div className="order">
        <img
          src="https://web-cdn.snapp.ir/snapp-website/images/bike/8.jpg"
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="detail-order">
        <img src={bike} alt="" />
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

export default OrderHooksBike;
