import React from "react";
import Layout from "../Layout/Layout";
import intro from "../assets/intro.jpg";
import googleplay from "../assets/google-play-badge.png";
import bazaar from "../assets/bazaar.png";
import snapp from "../assets/snapp-pwa.png";
import sibapp from "../assets/sibapp-badge-white.png";
import iapps from "../assets/iApps.png";
import "./home.css";
import { access, datahome } from "../data/data";
import { Link } from "react-router-dom";
import snappfood from "../assets/snappfood.jpg";
import snappfoodleft from "../assets/snappfood-left.jpg";
import hand from "../assets/hand.png";
import rocket from "../assets/rocket.png";
import cost from "../assets/cost.png";
import income1 from "../assets/income1.png";
const HomePage = () => {
  return (
    <Layout>
      <section style={{ marginTop: "100px" }}>
        <div className="header-home">
          <div className="home-right">
            <div className="detail">
              <h1>
                تجربه‌ی زندگی راحت‌تر، سریع‌تر و <br />
                به‌صرفه‌تر با سوپراپلیکیشن <br />
                اسنپ!
              </h1>
              <p>
                از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، <br />
                خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل
                <br /> و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.
              </p>
              <div className="number-link">
                <input type="number" placeholder="6789*****09" />
                <button className="btn-link" type="submit">
                  ارسال لینک
                </button>
              </div>
              <button className="btn-web" type="submit">
                ورود به وب اپلیکیشن اسنپ
              </button>
            </div>
          </div>
          <div className="home-left">
            <img src={intro} alt="" />
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
        <div className="snapp-details">
          <h1>یک اپلیکیشن ، برای تمام نیازها</h1>
          <div className="details-delivery">
            {datahome.map((home) => (
              <div className="line" key={home.id}>
                <img src={home.img} alt="" />
                <div className="line-detail">
                  <h5>{home.title}</h5>
                  <p>{home.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="snapfood">
          <a href="https://food.snapp.ir/?utm_source=snapp&utm_medium=slider&utm_campaign=new-landing">
            <img src={snappfood} alt="" />
          </a>
        </div>
        <div className="sider">
          <div className="snapfood-left">
            <img src={snappfoodleft} alt="" />
          </div>
          <div className="snapfood-right">
            <h3>سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h3>
            <p>
              اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
              تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
              راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
              می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
              جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
              فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
              هتل، پرداخت قبض و خرید شارژ استفاده کنید.
            </p>
          </div>

          <div className="access">
            <div className="access-detail">
              <div className="access-image">
                <img src={hand} alt="" />
              </div>
              <h4>آسان</h4>
              <p>
                برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد
                اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
              </p>
            </div>
            <div className="access-detail">
              <div className="access-image">
                <img src={rocket} alt="" />
              </div>
              <h4>سریع</h4>
              <p>
                قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
                می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
              </p>
            </div>
            <div className="access-detail">
              <div className="access-image">
                <img src={cost} alt="" />
              </div>
              <h4>به صرفه</h4>
              <p>
                سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند
                تا بهترین خدمات را با قیمتی منطقی دریافت کنید.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-register">
          <div className="detail-register">
            <h1>در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h1>
            <p>
              بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام
              را اینترنتی انجام دهید
            </p>
            <button>ثبت نام رانندگان</button>

            <video
              controls
              loop
              preload="none"
              poster="../assets/video/Capture.png"
              src="https://web-cdn.snapp.ir/snapp-website/videos/homepage/jazb-ranande.mp4"
            ></video>
          </div>

          <div className="mazaia">
            {access.map((acc) => (
              <div className="detail-mazaia" key={acc.id}>
                <div className="mazaia-img">
                  <img src={acc.img} alt="" />
                </div>
                <div className="mazaia-header">
                  <h3>{acc.title}</h3>
                  <p>{acc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
