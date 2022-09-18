import React from 'react'
import cargo1 from "../../assets/cargo1.jpg";
import cargo2 from "../../assets/cargo2.png";
import cargo3 from "../../assets/cargo3.png";
import motor3 from "../../assets/motor3.png";
const SiderHooksCargo = () => {
  return (
    <section>
    <div className="sider">
      <div className="snapfood-left">
        <img src={cargo1} alt="" />
      </div>
      <div className="snapfood-right">
        <h3>ویژگی‌های وانت بار اینترنتی اسنپ</h3>
        <p>
          وانت بار اینترنتی اسنپ با رویکرد توسعه هوشمندسازی شهری و ارائه
          راهکارهای باکیفیت و مقرون به صرفه در حیطه جابه‌جای بار راه اندازی
          و برای راحتی حال مشتریان و ارائه خدمات سریع و ارزان در دسترس کلیه
          شهروندان عزیز است.
        </p>
      </div>

      <div className="access" style={{ marginTop: "5rem" }}>
        <div className="access-detail  access-top">
          <div className="access-image">
            <img src={cargo2} alt="" />
          </div>
          <h4>سریع و قابل اعتماد</h4>
          <p>
            اسنپ با اطمینان خاطر و در سریع‌ترین زمان ممکن، مرسولات شما را به
            موقع به مقصد انتخابی می‌رساند.
          </p>
        </div>
        <div className="access-detail">
          <div className="access-image">
            <img src={cargo3} alt="" />
          </div>
          <h4>قیمت‌گذاری شفاف</h4>
          <p>
            قیمت‌گذاری در اسنپ کاملاً شفاف است و شما می‌توانید با پرداخت
            هزینه معقولانه، بسته خود را ارسال کنید.
          </p>
        </div>
        <div className="access-detail">
          <div className="access-image">
            <img src={motor3} alt="" />
          </div>
          <h4>پشتیبانی تمام وقت </h4>
          <p>
            پشتیبانی اسنپ به صورت ۲۴ ساعته و در تمام روزهای هفته، آماده کمک
            و پاسخ‌دهی به تمام سوالات شما است.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SiderHooksCargo