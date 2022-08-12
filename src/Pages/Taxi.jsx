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
import more from "../assets/more.svg";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import "./taxi.css";
const Taxi = () => {
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
        <div className="securityCustomer">
          <div className="detailSecurity">
            <div className="rightSecurity">
              <div className="topSecurity">
                <h1>حفظ امنیت مسافران در طول سفر</h1>
                <p>
                  تاکسی اینترنتی اسنپ به منظور تأمین امنیت مسافران، «سرویس امنیت
                  سفر» را به اپلیکیشن خود اضافه کرده است. با استفاده از این
                  قابلیت، امکان تماس مستقیم با تیم ویژهی امنیت سفر، امکان به
                  اشتراک گذاشتن موقعیت مکانی و تماس مستقیم با اورژانس برای
                  مسافران فراهم شده است. سرویس امنیت سفر، با نشان یک سپر آبیرنگ
                  در سمت چپ نقشه نمایش داده می‌شود. این سرویس تمام اقدامات و
                  امکانات امنیتی اسنپ را به صورت متمرکز در خود جای میدهد.
                </p>
              </div>
              <div className="bottomSecurity">
                <h1>امکان پرداخت نقدی و آنلاین</h1>
                <p>
                  همۀ ما گاهی اوقات پول نقد در جیب نداریم یا به دلیل شرایط همه
                  گیری کرونا، ترجیح میدهیم مبلغ را آنلاین پرداخت کنیم. داشتن
                  آزادی عمل در نوع پرداخت می‌تواند به قابلیت استفاده راحت از
                  خدمات تاکسی اینترنتی بیفزاید. در سوپر اپلیکیشن اسنپ مسافران
                  می‌توانند مبلغ سفر خود را به صورت پرداخت نقدی، آنلاین و یا از
                  طریق کیف پول آپ پرداخت کنند.
                </p>
              </div>
            </div>
            <div className="leftSecurity">
              <div className="imgSecurity">
                <video
                  controls
                  loop
                  preload="none"
                  poster="https://web-cdn.snapp.ir/snapp-website/images/taxi/taxi-cover.jpg"
                  src="https://web-cdn.snapp.ir/snapp-website/videos/ventures/1Khodro.mp4"
                ></video>
                <div className="news">
                  <h1>خبرهای جدید از تاکسی اینترنتی اسنپ</h1>
                  <p>
                    با اطلاع از تازهترین اخبار مربوط به تاکسی اینترنتی اسنپ
                    می‌توانید از قابلیتها و ویژگی‌های جدید این پلتفرم باخبر
                    شوید. با به روز نگه داشتن اطلاع خود، امکان استفاده همه جانبه
                    از سوپر اپلیکیشن اسنپ را خواهید داشت. با وبلاگ اسنپ همراه
                    باشید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="more">
          <div className="more-right">
            <img src={more} alt="" />
          </div>
          <div className="more-left">
            <h3>ثبت نام در تاکسی اینترنتی اسنپ!</h3>
            <p>
              شما نیز می‌توانید به ناوگان اسنپ ملحق شوید .از مزایای همکاری و ثبت
              نام در تاکسی اینترنتی اسنپ می‌توان به درآمد تضمینی و ساعت کاری
              دلخواه اشاره کرد .بدون نیاز به مراجعه‌ى حضوری، تمام مراحل ثبت‌نام
              را اینترنتی انجام دهید.
            </p>
            <button className="btns green">بیشتر بدانید</button>
          </div>
        </div>
      </section>
      <section>
        <div className="porsesh">
          <h3>پرسش های پرتکرار</h3>

          <div className="question-title" onClick={() => setOne(!one)}>
            <div className="q-detail">
              <h4>سرویس تاکسی اینترنتی اسنپ دارای چند نوع خودرو است؟</h4>
              {one ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {one ? (
              <div className="answer h">
                <p>
                  در سوپر اپلیکیشن اسنپ می‌توانید نوع خودرو را در قالب «اسنپ
                  اکو» و «اسنپ اکوپلاس» انتخاب کنید. اسنپ اکو شامل استفاده از
                  خودروهای معمولی با قیمت مناسب است و اسنپ اکوپلاس شامل درخواست
                  سفارش برای خودروهای با کیفیت و قیمت بیشتر است. خودروهای پلاس
                  کیفیت بالاتری دارند و مدل خودروها از سال 85 به بالاست.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setTwo(!two)}>
            <div className="q-detail">
              <h4>قیمت‌ها در تاکسی اینترنتی اسنپ چگونه تعیین می‌شود؟</h4>
              {two ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {two ? (
              <div className="answer h">
                <p>
                  قیمت هر سفر در اسنپ براساس چهار فاکتور اعم از «ورودی سفر»،
                  «مسافت سفر»، «مدت زمان سفر» و «نسبت عرضه و تقاضا» تعیین
                  می‌شود. ورودی سفر، مدت زمان سفر و مسافت سفر، «قیمت پایه» را
                  تشکیل می‌دهند که هرچند ورودی و مسافت در یک سفر ثابت همیشه
                  یکسان هستند. اما مدت زمان سفر با توجه به عواملی مانند ترافیک
                  یا شرایط جوی خاص متغیر است. در نتیجه قیمت پایه سفرها در شرایطی
                  که ورودی سفر و مسافت یکسان باشد به دلیل ترافیک و تغییر مدت
                  زمان سفر می‌تواند تغییر کند. این قیمت پایه‌ متغیر خود متأثر از
                  نسبت عرضه و تقاضاست. یک الگوریتم به‌صورت هوشمند نسبت عرضه و
                  تقاضا را بررسی می‌کند و با توجه به آن به قیمت پایه اضافه یا از
                  آن کم می‌شود.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setThree(!three)}>
            <div className="q-detail">
              <h4>تاکسی اینترنتی اسنپ در چه شهرهایی فعال است؟</h4>
              {three ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {three ? (
              <div className="answer h">
                <p>
                  تاکسی اینترنتی اسنپ در تمام ۳۱ استان ایران، سرویس آنلاین
                  حمل‌ونقل شهری را ارئه می‌دهد.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setFour(!four)}>
            <div className="q-detail">
              <h4>آیا امکان ردیابی خودرو از مبدأ تا مقصد وجود دارد؟</h4>
              {four ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {four ? (
              <div className="answer h">
                <p>
                  بله، از طریق اپلیکیشن اسنپ می‌توانید حرکت خودرو را ردیابی
                  کنید.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setFive(!five)}>
            <div className="q-detail">
              <h4>چطور می‌توانم با پشتیبانی تماس بگیرم؟</h4>
              {five ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {five ? (
              <div className="answer h">
                <p>
                  برای ارتباط مستقیم با پشتیبانی می‌توانید با شماره ۹۱۰۳۹۰۰۰-۰۲۱
                  تماس گرفته و منتظر پاسخگویی همکاران پشتیبانی ما باشید یا در
                  صندوق صوتی ما پیغام ارسال کنید.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Taxi;
