import React from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";
import googleplay from "../assets/google-play-badge.png";
import bazaar from "../assets/bazaar.png";
import snapp from "../assets/snapp-pwa.png";
import sibapp from "../assets/sibapp-badge-white.png";
import iapps from "../assets/iApps.png";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import cargoimg from "../assets/cargoimg.jpg";
import "./taxi.css";
import cargo1 from "../assets/cargo1.jpg";
import cargo2 from "../assets/cargo2.png";
import cargo3 from "../assets/cargo3.png";
import motor3 from "../assets/motor3.png";
import insertcargo from "../assets/insertcargo.jpg";
import insertcargo1 from "../assets/insertcargo1.jpg";
import insertcargo2 from "../assets/insertcargo2.jpg";
import securitycargo from "../assets/securitycargo.jpg";
import cargo from "../assets/Pickup-new.png";
import InsertHooksCargo from "../hooks/InsertHooksCargo";

const Cargo = () => {
  const [go, setGo] = useState(true);
  const [goBack, setGoBack] = useState(false);
  const [delay, setDelay] = useState(false);

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

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
              <h1>وانت بار اینترنتی اسنپ!</h1>
              <p style={{ marginTop: "3rem" }}>
                سرویس وانت بار اسنپ بهترین راهکار برای جابه‌جایی وسایل و بار
                است. شما به‌راحتی می‌توانید از طریق سوپراپ اسنپ اقدام به ثبت
                درخواست جهت استفاده از این سرویس کنید.
              </p>

              <button
                className="btn-web"
                type="submit"
                style={{ marginTop: "6rem" }}
              >
                درخواست وانت{" "}
              </button>
            </div>
          </div>
          <div className="home-left">
            <img src={cargoimg} alt="" />
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
            <div className="access-detail">
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

     <InsertHooksCargo />
      <section style={{ marginTop: "2rem" }}>
        <div className="porsesh">
          <h3>پرسش های پرتکرار</h3>

          <div className="question-title" onClick={() => setOne(!one)}>
            <div className="q-detail">
              <h4>خدمات وانت بار اسنپ شامل چه مواردی می‌‍شود؟</h4>
              {one ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {one ? (
              <div className="answer h">
                <p>
                  این خدمات شامل حمل بار، وسایل و اثاثیه از منزل یا محل کار است.
                  انتخاب نوع وانت، استفاده از کمک راننده برای جابه‌جایی بار،
                  پشتیبانی 24 ساعته و بسیاری موارد دیگر، از جمله خدمات سوپراَپ
                  وانت اسنپ هستند.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setTwo(!two)}>
            <div className="q-detail">
              <h4>سرویس وانت اسنپ دارای چند نوع وانت است؟</h4>
              {two ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {two ? (
              <div className="answer h">
                <p>
                  در سوپراپ اسنپ می‌تواند نوع وانت را براساس نیازهای شخصی انتخاب
                  کرد. وانت‌های اسنپ به انواع وانت سبک، وانت سبک مسقف، وانت سبک
                  کفی‌دار و وانت سنگین تقسیم می‌شوند.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setThree(!three)}>
            <div className="q-detail">
              <h4>آیا سرویس وانت بار اسنپ خدمات بسته بندی دارد؟</h4>
              {three ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {three ? (
              <div className="answer h">
                <p>
                  خیر، این سرویس تنها مسئولیت حمل و نقل بار را بر عهده دارد.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setFour(!four)}>
            <div className="q-detail">
              <h4>سرویس وانت بار اسنپ در چه شهرهایی فعال است؟</h4>
              {four ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {four ? (
              <div className="answer h">
                <p>
                  وانت سبک اسنپ به شهرهای تهران، کرج، شیراز، مشهد، اصفهان،
                  اهواز، تبریز، قم، کرمان، گیلان، ارومیه، همدان، گرگان، هرمزگان،
                  اراک، قزوین، کرمانشاه، مازندران، بیرجند، زنجان، بجنورد اردبیل،
                  خرم‌آباد، سنندج و بوشهر خدمات رسانی می‌کند. همچنین، می‌توان از
                  سرویس وانت سنگین اسنپ در شهرهای تهران، کرج، شیراز، مشهد،
                  اصفهان، قم، تبریز و اهواز نیز استفاده کرد.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setFive(!five)}>
            <div className="q-detail">
              <h4>آیا تیم باربری اسنپ پروتکل‌های بهداشتی را رعایت می‌کند؟</h4>
              {five ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {five ? (
              <div className="answer h">
                <p>
                  بله، همۀ اعضای تیم باربری اسنپ از ماسک، دستکش و مواد ضدعفونی
                  کننده استفاده می‌کنند.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="order">
          <img
            src="https://web-cdn.snapp.ir/snapp-website/images/truck/8.jpg"
            alt=""
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="detail-order">
          <img src={cargo} alt="" />
          <h4>سرعت، اطمینان و کیفیت با وانت بار اینترنتی اسنپ</h4>
          <p>
            هم‌اکنون سرویس وانت بار اینترنتی اسنپ، از طریق سیستم‌عامل‌های مختلف
            موبایل و وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات حمل و نقل
            بار را با سوپر اپلیکیشن اسنپ تجربه کنید.
          </p>
          <a href="https://app.snpb.ir/auth?client=jek-pwa&serviceId=11&utm_source=landing&utm_medium=request-button&utm_campaign=truck">
            <button>درخواست وانت</button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Cargo;
