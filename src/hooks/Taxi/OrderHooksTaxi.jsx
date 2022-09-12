import React from "react";
import order from "../../assets/order.jpg";
import taxi from "../../assets/Taxi.svg";

const OrderHooksTaxi = () => {
  return (
    <section>
      <div className="order">
        <img src={order} alt="" style={{ width: "100%", height: "400px" }} />
      </div>
      <div className="detail-order">
        <img src={taxi} alt="" />
        <h4>تاکسی اینترنتی اسنپ، سریع و مطمئن</h4>
        <p>
          هم‌اکنون سرویس درخواست تاکسی اسنپ، از طریق سیستم‌عامل‌های مختلف موبایل
          و وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات تاکسی اینترنتی را
          با سوپر اپلیکیشن اسنپ تجربه کنید.
        </p>
        <button>درخواست تاکسی</button>
      </div>
    </section>
  );
};

export default OrderHooksTaxi;
