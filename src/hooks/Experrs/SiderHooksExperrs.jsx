import React from "react";
import hand_experss from "../../assets/hand_experss.png";
import rocket_experss from "../../assets/rocket_experrs.png";
import cost_experss from "../../assets/cost_experss.png";
import snappfood_food from "../../assets/snappfood_food.jpeg";
const SiderHooksExperrs = () => {
  return (
    <section>
      <div className="sider">
        <div className="snapfood-left" style={{ marginTop: "-15px" }}>
          <img src={snappfood_food} alt="" />
        </div>
        <div className="snapfood-right">
          <h3>مزایای استفاده از سرویس اسنپ اکسپرس</h3>
          <p>
            تیم حرفه‌ای اسنپ با شناخت نیازها و خواسته‌های شما مشتریان عزیز، سعی
            می‌کند که بهترین خدمات را در اختیارتان قرار بدهد. استفاده از سرویس
            اسنپ اکسپرس یعنی:
            <br /> • دسترسی به فروشگاه‌های زنجیره‌ای (هایپراستار، جانبو، رفاه،
            گندم، حیات‌مارکت و…) و سوپرمارکت‌های محلی <br />• تحویل سفارش در
            کمتر از ۳۰ دقیقه <br /> • امکان مقایسه قیمت کالاها <br />• امکان
            خرید انواع تنقلات، نوشیدنی‌ها، لبنیات، محصولات پروتئینی، خواربار و
            نان و غیره به‌صورت آنلاین <br />• پشتیبانی ۲۴ساعته
          </p>
        </div>

        <div className="access">
          <div className="access-detail">
            <div className="access-image">
              <img src={hand_experss} alt="" />
            </div>
            <h4>تحویل فوری</h4>
            <p>
              با حوصله و آرامش، کالای سوپرمارکتی موردنظرتان را در بین
              فروشگاه‌های اطرافتان پیدا کنید، نظرات کاربران را بخوانید و قیمت‌ها
              را مقایسه کنید. بعد از خرید، محصول موردنظرتان در کمتر از ۳۰ دقیقه
              درب منزل شماست!
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={rocket_experss} alt="" />
            </div>
            <h4>تنوع محصول</h4>
            <p>
              انواع محصولات متنوع در دسترس شماست. کافی است گشت‌وگذاری آنلاین در
              میان محصولات متنوع در فروشگاه‌های مختلف داشته باشید تا به انتخاب
              نهایی موردنظرتان برسید.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={cost_experss} alt="" />
            </div>
            <h4>خرید اعتباری</h4>
            <p>
              همه این‌ها زمانی جذاب‌تر می‌شود که بدانید امکان تسویه سر ماه هم
              وجود دارد. بسته به میزان اعتبارتان، خرید کنید و آخر ماه، هزینه‌اش
              را بپردازید. البته سقف خرید برای هر کاربر متفاوت است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiderHooksExperrs;
