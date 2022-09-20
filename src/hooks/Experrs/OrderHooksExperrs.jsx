import React from "react";
import orderexperrs from "../../assets/orderexperrs.jpeg";
const OrderHooksExperrs = () => {
  return (
    <section>
      <div className="order">
        <img
          src={orderexperrs}
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="detail-order">
        <h4>اسنپ اکسپرس تحویل کمتر از ۳۰ دقیقه</h4>
        <p>
          لازم نیست که برای خریدهای روزمره شال ‌وکلاه کنید و روانه فروشگاه محله
          شوید. اسنپ اکسپرس راهی سریع و ساده برای خریدکردن است. فرقی نمی‌کند که
          لبنیات می‌خواهید یا تنقلات یا میوه یا محصولات بهداشتی؛ با اسنپ اکسپرس،
          انواع محصولات و خواربار را از فروشگاه‌های اطراف‌تان سفارش دهید و کمتر
          از ۳۰ دقیقه، درب منزل با بسته‌بندی مناسب تحویل بگیرید. خبر خوب اینکه
          امکان خرید اعتباری و تخفیف‌های دوره‌ای هم برای شما فراهم است!
        </p>
        <a href="https://app.snapp.taxi//" target="_blank">
          <button>خرید با تحویل فوری</button>
        </a>
      </div>
    </section>
  );
};

export default OrderHooksExperrs;
