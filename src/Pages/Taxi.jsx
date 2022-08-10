import React, { useState } from "react";
import Layout from "../Layout/Layout";
import taxiheader from "../assets/taxi-header.jpg";
import googleplay from "../assets/google-play-badge.png";
import bazaar from "../assets/bazaar.png";
import snapp from "../assets/snapp-pwa.png";
import sibapp from "../assets/sibapp-badge-white.png";
import iapps from "../assets/iApps.png";
import handtaxi from "../assets/handtaxi.jpg";
import snappfood from "../assets/snappfood.jpg";
import snappfoodleft from "../assets/snappfood-left.jpg";
import hand from "../assets/hand.png";
import rocket from "../assets/rocket.png";
import cost from "../assets/cost.png";
import handtaxi2 from "../assets/handtaxi2.png";
import cartaxi from "../assets/cartaxi.png";
import supporttaxi from "../assets/supporttaxi.png";
import insertimg1 from "../assets/insertimg1.jpg";
import insertimg2 from "../assets/insertimg2.jpg";
import insertimg3 from "../assets/insertimg3.jpg";
import "./taxi.css";
const Taxi = () => {
  const [go, setGo] = useState(true);
  const [goBack, setGoBack] = useState(false);
  const [delay, setDelay] = useState(false);

  const goHandler = () => {
    setGo(true);
    setGoBack(false);
    setDelay(false);
  };
  const goBackHandler = () => {
    setGo(false);
    setGoBack(true);
    setDelay(false);
  };
  const delayHandler = () => {
    setGo(false);
    setGoBack(false);
    setDelay(true);
  };

  return (
    <Layout>
      <section style={{ marginTop: "100px" }}>
        <div className="header-home">
          <div className="home-right">
            <div className="detail">
              <h1>تاکسی اینترنتی اسنپ، در رکاب شماست!</h1>
              <p style={{ marginTop: "3rem" }}>
                اسنپ! اولین و بزرگترین تاکسی اینترنتی ایران است که برای
                جابه‌جایی در شهرهای بزرگ و کوچک ایران آماده خدمت‌رسانی به شماست.
              </p>

              <button
                className="btn-web"
                type="submit"
                style={{ marginTop: "6rem" }}
              >
                درخواست تاکسی{" "}
              </button>
            </div>
          </div>
          <div className="home-left">
            <img src={taxiheader} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="social-download">
          <div className="social-media">
            <a href="https://play.google.com/store/apps/details?id=cab.snapp.passenger.play&referrer=appmetrica_tracking_id%3D1036046929106097450%26ym_tracking_id%3D3146307706900293541">
              <img src={googleplay} alt="GooglePlay" />
            </a>
            <a href="https://cafebazaar.ir/app/cab.snapp.passenger/?l=fa&referrer=appmetrica_tracking_id%3D243413381082522868%26ym_tracking_id%3D40049751087656923">
              <img src={bazaar} alt="bazaar" />
            </a>
            <a href="https://app.snapp.taxi/pre-ride">
              <img src={snapp} alt="snapp" />
            </a>
            <a href="https://sibapp.com/applications/snapp">
              <img src={sibapp} alt="sibapp" />
            </a>
            <a href="https://app.iapps.ir/i/191622396">
              <img src={iapps} alt="iapps" />
            </a>
          </div>
        </div>
      </section>
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
                قیمت‌گذاری در اسنپ کاملا رقابتی، منطقی و شفاف است. مبلغ هر سفر
                پیش از درخواست خودرو، اعلام خواهد شد.
              </p>
            </div>
            <div className="access-detail">
              <div className="access-image">
                <img src={supporttaxi} alt="" />
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

      <section style={{ marginTop: "100px" }}>
        <div className="insert">
          <div className="insert-taxi">
            <div className="insert-btn">
              <button className="btns active" onClick={goHandler}>
                ثبت
              </button>
              <button className="btns" onClick={goBackHandler}>
                رفت وبرگشت
              </button>
              <button className="btns" onClick={delayHandler}>
                توقف
              </button>
            </div>

            {go && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insertimg1} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>ثبت درخواست تاکسی اینترنتی</h3>
                    <p>
                      در سوپر اپلیکیشن اسنپ، آیکن «اسنپ!» را انتخاب کنید. ابتدا
                      آدرس مبدأ و سپس مقصد خود را تعیین کنید. حالا می‌توانید نوع
                      خودرو، مبلغ، گزینه‌های سفر و غیره را مشاهده و ویرایش کنید.
                    </p>
                  </div>
                </div>
              </>
            )}
            {goBack && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insertimg2} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>درخواست رفت و برگشت</h3>
                    <p>
                      می‌توانید در قسمت گزینه‌های سفر، درخواست رفت و برگشت را
                      انتخاب کنید. در این حالت، تاکسی با رساندن شما به مقصد
                      منتظر می‌ماند تا دوباره شما را به مبدأ برگرداند.
                    </p>
                  </div>
                </div>
              </>
            )}
            {delay && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insertimg3} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>ثبت توقف در مسیر</h3>
                    <p>
                      اگر برای سوار شدن و رسیدن به تاکسی اسنپ زمان بیشتری لازم
                      دارید یا باید برای چند دقیقه در محلی توقف داشته باشید،
                      نیاز به اتمام سفر و درخواست مجدد برای تاکسی اینترنتی نیست
                      و فقط کافی است مدت زمان توقف را در اپلیکیشن ثبت کنید.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Taxi;
