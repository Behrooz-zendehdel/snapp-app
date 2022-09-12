import React from "react";
import cargo from "../../assets/Pickup-new.png";

const OrderHooksCargo = () => {
  return (
    <section>
      <div className="order">
        <img
          src="https://web-cdn.snapp.ir/snapp-website/images/truck/8.jpg"
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="detail-order">
        <img src={cargo} alt="" />
        <h4>سرعت، اطمینان و کیفیت با وانت بار اینترنتی اسنپ</h4>
        <p>
          هم‌اکنون سرویس وانت بار اینترنتی اسنپ، از طریق سیستم‌عامل‌های مختلف
          موبایل و وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات حمل و نقل
          بار را با سوپر اپلیکیشن اسنپ تجربه کنید.
        </p>
        <a href="https://app.snpb.ir/auth?client=jek-pwa&serviceId=11&utm_source=landing&utm_medium=request-button&utm_campaign=truck">
          <button>درخواست وانت</button>
        </a>
      </div>
    </section>
  );
};

export default OrderHooksCargo;
