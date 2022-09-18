import React from "react";
import marketsider from "../../assets/marketsider.jpeg";
import market1 from "../../assets/market1.png";
import market2 from "../../assets/market2.png";
import market3 from "../../assets/market3.png";
const SiderHooksMarket = () => {
  return (
    <section>
      <div className="sider">
        <div className="snapfood-left">
          <img src={marketsider} alt="" />
        </div>
        <div className="snapfood-right">
          <h3>مزایای خرید از سوپرمارکت آنلاین اسنپ</h3>
          <p>
            با خرید آنلاین مایحتاج روزانه خود از طریق سوپراپلیکیشن اسنپ، از رفتن
            به فروشگاه‌های مختلف بی‌نیاز شوید و دغدغه خریدهای سوپرمارکتی و
            ترافیک و دردسرهای آن را از ذهن‌تان پاک کنید!
          </p>
        </div>

        <div className="access">
          <div className="access-detail ">
            <div className="access-image">
              <img src={market1} alt="" />
            </div>
            <h4>آسان و مطمئن</h4>
            <p>
              به شکلی راحت و مطمئن می‌توانید اقلام مصرفی خود را با تخفیف‌های
              ویژه از طریق سوپرمارکت آنلاین اسنپ خریداری کنید.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={market2} alt="" />
            </div>
            <h4>صرفه جویی در زمان</h4>
            <p>
              به جای اتلاف زمان در ترافیک و حضور در فروشگاه، خرید اینترنتی
              محصولات سوپرمارکتی به صرفه جویی در زمان و هزینۀ جابجایی کمک
              می‌کند.
            </p>
          </div>
          <div className="access-detail">
            <div className="access-image">
              <img src={market3} alt="" />
            </div>
            <h4>پشتیبانی تمام وقت</h4>
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

export default SiderHooksMarket;
