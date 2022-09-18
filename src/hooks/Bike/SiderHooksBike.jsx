import React from "react";
import motorbike from "../../assets/motorbike.jpg";
import motor1 from "../../assets/motor1.png";
import motor2 from "../../assets/motor2.png";
import motor3 from "../../assets/motor3.png";
const SiderHooksBike = () => {
  return (
    <section>
      <div className="sider">
        <div className="snapfood-left">
          <img src={motorbike} alt="" />
        </div>
        <div className="snapfood-right">
          <h3>مزایای تاکسی اینترنتی اسنپ</h3>
          <p>
            تاکسی اینترنتی اسنپ تحولی عظیم در سیستم حمل و نقل هوشمند محسوب
            می‌شود که هدفش برطرف کردن نیاز روزانه مردم برای سفر از نقطه‌ای به
            نقطه دیگر است.
          </p>
        </div>

        <div className="access" style={{ marginTop: "5rem" }}>
          <div className="access-detail  access-top">
            <div className="access-image">
              <img src={motor1} alt="" />
            </div>
            <h4>سریع و قابل اعتماد</h4>
            <p>
              اسنپ با اطمینان خاطر و در سریع‌ترین زمان ممکن، مرسولات شما را به
              موقع به مقصد انتخابی می‌رساند.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={motor2} alt="" />
            </div>
            <h4>قیمت‌گذاری شفاف</h4>
            <p>
              قیمت‌گذاری در اسنپ کاملاً شفاف است و شما می‌توانید با پرداخت هزینه
              معقولانه، بسته خود را ارسال کنید.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={motor3} alt="" />
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

export default SiderHooksBike;
