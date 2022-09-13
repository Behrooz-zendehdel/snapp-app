import React from "react";
import snappfood_order from "../../assets/snappfood-order.jpeg";
import snappfood_food_detail from "../../assets/snappfood_food_detail.svg";
const OrderHooksFood = () => {
  return (
    <section>
      <div className="order">
        <img
          src={snappfood_order}
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="detail-order">
        <img src={snappfood_food_detail} alt="" />
        <h4>سفارش آنلاین غذا با اسنپ!</h4>
        <p>
          هم‌اکنون خدمات سفارش غذا، از طریق سیستم‌عامل‌های مختلف موبایل و وب
          اپلیکیشن به راحتی در دسترس شماست. خرید اینترنتی غذا را با سوپر
          اپلیکیشن اسنپ تجربه کنید.
        </p>
        <button>غذا سفارش دهید</button>
      </div>
    </section>
  );
};

export default OrderHooksFood;
