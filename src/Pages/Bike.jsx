import React from "react";
import Layout from "../Layout/Layout";
import googleplay from "../assets/google-play-badge.png";
import bazaar from "../assets/bazaar.png";
import snapp from "../assets/snapp-pwa.png";
import sibapp from "../assets/sibapp-badge-white.png";
import iapps from "../assets/iApps.png";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import motor from "../assets/motor.jpg";
import motorbike from "../assets/motorbike.jpg";
import motor1 from "../assets/motor1.png";
import motor2 from "../assets/motor2.png";
import motor3 from "../assets/motor3.png";

import bike from "../assets/bike.svg";
import InsertHooksBike from "../hooks/InsertHooksBike";

const Bike = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  return (
    <Layout>
      <section style={{ marginTop: "100px" }}>
        <div className="header-home">
          <div className="home-right">
            <div className="detail">
              <h1>پیک موتوری اسنپ!</h1>
              <p style={{ marginTop: "3rem" }}>
                با خدمات پیک موتوری اسنپ، ارسال آسان و تحویل به موقع مرسولات را
                تجربه کنید یا با اسنپ بایک سفر کنید و ترافیک را دور بزنید!
              </p>

              <button
                className="btn-web"
                type="submit"
                style={{ marginTop: "6rem" }}
              >
                درخواست موتور
              </button>
            </div>
          </div>
          <div className="home-left">
            <img src={motor} alt="" />
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
            <div className="access-detail">
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

      <InsertHooksBike />
      <section style={{ marginTop: "2rem" }}>
        <div className="porsesh">
          <h3>پرسش های پرتکرار</h3>

          <div className="question-title" onClick={() => setOne(!one)}>
            <div className="q-detail">
              <h4>چگونه از اسنپ پیک موتوری بگیریم؟</h4>
              {one ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {one ? (
              <div className="answer h">
                <p>
                  ابتدا وارد سوپراپ اسنپ شوید و آیکن اسنپ بایک را انتخاب کنید.
                  بعد از کلیک بر روی آن آیکن می‌توانید سفارش جدید خود را ثبت
                  کنید. اکنون وارد صفحه‌ای می شوید که باید مبدأ، مقصد و نوع پیک
                  را مشخص کنید.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setTwo(!two)}>
            <div className="q-detail">
              <h4>ساعات سرویس دهی پیک موتوری اسنپ چگونه است؟</h4>
              {two ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {two ? (
              <div className="answer h">
                <p>
                  پیک موتوری اسنپ ۲۴ ساعته آماده سرویس‌دهی به مشتریان عزیز خود
                  است.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setThree(!three)}>
            <div className="q-detail">
              <h4>چه روش‌های حمل و نقلی در دسترس هستند؟</h4>
              {three ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {three ? (
              <div className="answer h">
                <p>
                  پیک موتوری اسنپ ۲۴ ساعته آماده سرویس‌دهی به مشتریان عزیز خود
                  است.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setFour(!four)}>
            <div className="q-detail">
              <h4>چه روش‌های حمل و نقلی در دسترس هستند؟</h4>
              {four ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {four ? (
              <div className="answer h">
                <p>
                  در سوپراپلیکشن اسنپ، گزینه «اسنپ‌باکس» برای ارسال مرسوله و
                  گزینه «اسنپ‌بایک» برای جابجایی مسافر با موتور وجود دارند.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="question-title" onClick={() => setFive(!five)}>
            <div className="q-detail">
              <h4>هزینه درخواست پیک موتوری چقدر می‌شود؟</h4>
              {five ? (
                <BiChevronDown style={{ fontSize: "2rem" }} />
              ) : (
                <BiChevronUp style={{ fontSize: "2rem" }} />
              )}
            </div>
            {five ? (
              <div className="answer h">
                <p>
                  شما می‌توانید پیش از ثبت هر درخواست با مشخص کردن مبدأ و مقصد
                  مورد نظر خود و تعیین بازگشت و یا عدم بازگشت سفیر، از هزینه سفر
                  مطلع شوید.
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
            src="https://web-cdn.snapp.ir/snapp-website/images/bike/8.jpg"
            alt=""
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="detail-order">
          <img src={bike} alt="" />
          <h4>پیک موتوری اسنپ: ارسال آسان، تحویل به‌موقع</h4>
          <p>
            هم‌اکنون سرویس پیک موتوری اسنپ، از طریق سیستم‌عامل‌های مختلف موبایل
            و وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات پیک موتوری را با
            سوپر اپلیکیشن اسنپ تجربه کنید.
          </p>
          <a href="https://app.snapp.taxi//" target="_blank">
            <button>درخواست موتور </button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Bike;
