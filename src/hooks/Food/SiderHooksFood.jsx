import React from "react";
import hand_food from "../../assets/hand_food.png";
import rocket_food from "../../assets/rocket_food.png";
import cost_food from "../../assets/cost_food.png";
import snappfood_food from "../../assets/snappfood_food.jpeg";
const SiderHooksFood = () => {
  return (
    <section>
      <div className="sider">
        <div className="snapfood-left">
          <img src={snappfood_food} alt="" />
        </div>
        <div className="snapfood-right">
          <h3>چرا سفارش آنلاین غذا با اسنپ ؟</h3>
          <p>
            تنوع، یکی از آن چیزهایی است که از غذاها انتظار داریم. با ثبت سفارش
            آنلاین غذا از طریق اسنپ می‌توانید رستوران‌هایی که در مجاورت محل
            زندگی و کارتان هستند را مشاهده و غذای مورد نظر خود را سفارش دهید.
          </p>
        </div>

        <div className="access">
          <div className="access-detail">
            <div className="access-image">
              <img src={hand_food} alt="" />
            </div>
            <h4>غذای ملل مختلف</h4>
            <p>
              غذای مورد نظر خود را از میان انواع غذاهای ایرانی، لبنانی،
              ایتالیایی، هندی و ترکی انتخاب کنید.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={rocket_food} alt="" />
            </div>
            <h4>سریع و ساده</h4>
            <p>
              به جای اتلاف زمان در ترافیک یا انتظار پشت تلفن، غذای دلخواه خود را
              همراه با مخلفات انتخاب کنید و آنلاین ثبت سفارش کنید.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={cost_food} alt="" />
            </div>
            <h4>پشتیبانی تمام وقت </h4>
            <p>
              پشتیبانی اسنپ به صورت ۲۴ ساعته و در تمام روزهای هفته، آماده کمک و
              پاسخ‌دهی به تمام سوالات شما است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiderHooksFood;
