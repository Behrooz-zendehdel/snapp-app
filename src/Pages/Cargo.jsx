import React from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";
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
import taxi from "../assets/Taxi.svg";
import more from "../assets/more.svg";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import cargoimg from "../assets/cargoimg.jpg";
import "./taxi.css";
import cargo1 from "../assets/cargo1.jpg";
import cargo2 from "../assets/cargo2.png";
import cargo3 from "../assets/cargo3.png";
import motor3 from "../assets/motor3.png";
import order from "../assets/order.jpg";
import insertcargo from "../assets/insertcargo.jpg";
import insertcargo1 from "../assets/insertcargo1.jpg";
import insertcargo2 from "../assets/insertcargo2.jpg";
import securitycargo from "../assets/securitycargo.jpg";
import cargo from "../assets/Pickup-new.png";

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

      <section style={{ marginTop: "100px" }}>
        <div className="insert">
          <div className="insert-taxi">
            <div className="insert-btn">
              <button
                className="btns"
                style={{
                  backgroundColor: go ? "#06d170" : "",
                  color: go ? "white" : "",
                }}
                onClick={goHandler}
              >
                درخواست وانت
              </button>
              <button
                className="btns"
                style={{
                  backgroundColor: goBack ? "#06d170" : "",
                  color: goBack ? "white" : "",
                }}
                onClick={goBackHandler}
              >
                ثبت درخواست
              </button>
              <button
                className="btns"
                style={{
                  backgroundColor: delay ? "#06d170" : "",
                  color: delay ? "white" : "",
                }}
                onClick={delayHandler}
              >
                ثبت مقصد
              </button>
            </div>

            {go && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insertcargo} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>درخواست وانت بار اسنپ</h3>
                    <p>
                      ابتدا وارد سوپراپ اسنپ شوید و آیکن وانت بار را انتخاب و
                      سفارش جدید خود را ثبت کنید. اکنون وارد صفحه‌ای می‌شوید که
                      باید مبدأ، مقصد و نوع وانت را مشخص کنید.
                    </p>
                  </div>
                </div>
              </>
            )}
            {goBack && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insertcargo1} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>ثبت همزمان چند درخواست</h3>
                    <p>
                      می‌توانید در زمان ثبت سفارش وانت بار، از قابلیت ثبت همزمان
                      چند سفارش استفاده کنید. بعد از ثبت اولین سفارش می‌توانید
                      سفارش‌های بعدی خود را یکی پس از دیگری ثبت کنید.
                    </p>
                  </div>
                </div>
              </>
            )}
            {delay && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insertcargo2} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>ثبت مقصدهای مختلف</h3>
                    <p>
                      امکان انتخاب چند مقصد مختلف در اپلیکیشن اسنپ وجود دارد.
                      شما می‌توانید تعدادی از بارهای خود را به یک مسیر و تعدادی
                      دیگر را به مسیر دیگری منتقل کنید. این قابلیت می‌تواند در
                      کاهش زمان و سرعت جابه‌جایی بار کمک شایانی کند.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="securityCustomer">
          <div className="detailSecurity">
            <div className="rightSecurity">
              <div className="topSecurity" style={{ height: "100% " }}>
                <h1>انتقال وسایل و بار با اسنپ</h1>
                <p style={{ marginTop: "2rem" }}>
                  اگر در حال جابه‌جایی وسایل خانه خود هستید یا می‌خواهید
                  وسیله‌ای سنگین را از محل کار خود به نقطه‌ای از شهر انتقال
                  دهید، وانت بار آنلاین اسنپ بهترین انتخاب ممکن است. بنابراین،
                  هیچ‌گونه محدودیتی نسبت به نوع کاربری ساختمان جهت انتقال بار
                  وجود ندارد و کلیه مشتریان می‌توانند وسایل خود را از منزل، شرکت
                  یا مغازه خود به مکان دیگری منتقل کنند.
                </p>
              </div>
              <div className="bottomSecurity" style={{ height: "100% " }}>
                <h1>وانت بار در تهران و سراسر کشور</h1>
                <p style={{ marginTop: "2rem" }}>
                  درخواست اینترنتی وانت سبک اسنپ در شهرهای تهران، کرج، شیراز،
                  مشهد، اصفهان، اهواز، تبریز، قم، کرمان، گیلان، ارومیه، همدان،
                  گرگان، هرمزگان، اراک، قزوین، کرمانشاه، مازندران، بیرجند،
                  زنجان، بجنورد اردبیل، خرم‌آباد، سنندج و بوشهر امکان‌پذیر است.
                  همچنین، می‌توان از سرویس وانت سنگین اسنپ در شهرهای تهران، کرج،
                  شیراز، مشهد، اصفهان، قم، تبریز و اهواز نیز از طریق سوپراَپ
                  اسنپ استفاده کرد.
                </p>
              </div>
            </div>
            <div className="leftSecurity">
              <div className="imgSecurity">
                <img
                  src={securitycargo}
                  alt=""
                  style={{
                    width: "500px ",
                    height: "300px ",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <div className="news">
                  <h1>امکان انتخاب نوع وانت</h1>
                  <p>
                    در سرویس وانت اینترنتی اسنپ امکان استفاده از چهار نوع وانت
                    بار وجود دارد: • وانت سبک (وانت پراید و وانت پیکان): مناسب
                    برای جابه‌جایی بار تا 500 کیلوگرم است. • وانت سبک مسقف: برای
                    محافظت از بار در برابر آفتاب یا باران کاربرد دارد. • وانت
                    سبک کفی‌دار: مناسب برای جابه‌جایی بهتر و جلوگیری از آسیب به
                    مبلمان و اثاثیه منزل است. • وانت سنگین (نیسان): مناسب برای
                    بارهای سنگین و حجیم است. در صورتی که بار بیش از 500 کیلوگرم
                    تا 3800 کیلوگرم باشد، ما استفاده از سرویس وانت سنگین را
                    پیشنهاد می‌کنیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
