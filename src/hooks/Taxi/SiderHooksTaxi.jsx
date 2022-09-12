import React from "react";
import handtaxi from "../../assets/handtaxi.jpg";
import handtaxi2 from "../../assets/handtaxi2.png";
import cartaxi from "../../assets/cartaxi.png";
import supporttaxi from "../../assets/supporttaxi.png";

const SiderHooksTaxi = () => {
  return (
    <section>
      <div className="sider">
        <div className="snapfood-left">
          <img src={handtaxi} alt="" />
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
          <div className="access-detail">
            <div className="access-image">
              <img src={handtaxi2} alt="" />
            </div>
            <h4>آسان و سریع</h4>
            <p>
              با نصب سوپر اپلیکیشن اسنپ می‌توانید خیلی سریع و آسان، درخواست
              خودرو به مقصد مورد نظرتان را ثبت کنید.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={cartaxi} alt="" />
            </div>
            <h4>قیمت‌گذاری شفاف</h4>
            <p>
              قیمت‌گذاری در اسنپ کاملا رقابتی، منطقی و شفاف است. مبلغ هر سفر پیش
              از درخواست خودرو، اعلام خواهد شد.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={supporttaxi} alt="" />
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

export default SiderHooksTaxi;
