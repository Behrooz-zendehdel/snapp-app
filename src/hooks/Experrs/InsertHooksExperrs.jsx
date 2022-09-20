import React from "react";
import insert_experss_1 from "../../assets/insert_experss_1.jpeg";
import insert_experss_2 from "../../assets/insert_experss_2.jpeg";
import insert_experss_3 from "../../assets/insert_experss_3.jpeg";
import insert_experss_4 from "../../assets/insert_experss_4.jpeg";
import security_experss from "../../assets/security_experss.jpeg";

import { useState } from "react";

const InsertHooksExperrs = () => {
  const [go, setGo] = useState(true);
  const [goBack, setGoBack] = useState(false);
  const [delay, setDelay] = useState(false);
  const [rahgiri, setRahgiri] = useState(false);

  const goHandler = () => {
    setGo(true);
    setGoBack(false);
    setDelay(false);
    setRahgiri(false);
  };
  const goBackHandler = () => {
    setGo(false);
    setGoBack(true);
    setDelay(false);
    setRahgiri(false);
  };
  const delayHandler = () => {
    setGo(false);
    setGoBack(false);
    setDelay(true);
    setRahgiri(false);
  };
  const rahgiriHandler = () => {
    setGo(false);
    setGoBack(false);
    setDelay(false);
    setRahgiri(true);
  };
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="insert">
        <div className="insert-taxi">
          <div className="insert-btn">
            <button
              className="btns"
              style={{
                backgroundColor: go ? "#ff661f" : "",
                color: go ? "white" : "",
              }}
              onClick={goHandler}
            >
              ثبت سفارش
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: goBack ? "#ff661f" : "",
                color: goBack ? "white" : "",
              }}
              onClick={goBackHandler}
            >
              پرداخت
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: delay ? "#ff661f" : "",
                color: delay ? "white" : "",
              }}
              onClick={delayHandler}
            >
              زمان تحویل
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: rahgiri ? "#ff661f" : "",
                color: rahgiri ? "white" : "",
              }}
              onClick={rahgiriHandler}
            >
              رهگیری{" "}
            </button>
          </div>

          {go && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insert_experss_1} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>ثبت سفارش در اسنپ اکسپرس</h3>
                  <p>
                    برای ثبت سفارش‌، شماره همراه‌تان را در کادر بالای این صفحه
                    وارد کنید یا وارد اپلیکیشن اسنپ شوید. به بخش سوپرمارکت
                    بروید، آدرستان را وارد کنید و با انتخاب هرکدام از
                    فروشگاه‌های محلی یا زنجیره‌ای نزدیک‌تان، از دسته‌بندی‌های
                    مختلف محصولات خرید کنید.
                  </p>
                </div>
              </div>
            </>
          )}
          {goBack && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insert_experss_2} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>پرداخت آنلاین</h3>
                  <p>
                    بعد از انتخاب محصولات موردنظرتان، گزینه تکمیل خرید را بزنید
                    تا صورت‌حساب را ببینید. در این بخش می‌توانید یا آنلاین
                    پرداخت کنید یا اعتباری. با انتخاب روش پرداخت، خریدتان نهایی
                    می‌شود و تمام!
                  </p>
                </div>
              </div>
            </>
          )}
          {delay && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insert_experss_3} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>زمان تحویل</h3>
                  <p>
                    با اسنپ اکسپرس، سفارشتان را کمتر از ۳۰ دقیقه، درب منزل یا
                    محل کار تحویل بگیرید. فروشگاه‌ها تا زمانی که باز باشند، در
                    اپلیکیشن هم فعال‌اند.
                  </p>
                </div>
              </div>
            </>
          )}
          {rahgiri && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insert_experss_4} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>امکان رهگیری لحظه‌ای سفارش</h3>
                  <p>
                    بعد از ثبت سفارش، امکان رهگیری لحظه‌ای آن وجود دارد؛‌ یعنی
                    می‌توانید مراحل آماده‌سازی تا رسیدن سفارش به دست‌تان را
                    پیگیری کنید و ببینید که در هر لحظه، بسته ارسالی‌تان کجاست.
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
            <div className="topSecurity experssNews">
              <h1>گوش‌ به‌زنگ تخفیف نارنجی باشید!</h1>
              <p>
                در اسنپ اکسپرس، بعضی از محصولات تخفیف خورده‌اند و شما می‌توانید
                آنها را پایین‌تر از قیمت بازار بخرید. از این مهم‌تر، از تخفیف
                نارنجی هم غافل نشوید؛ یعنی تخفیف‌های هیجان‌انگیزی که در بازه‌های
                زمانی خاص و با تعداد محدود، به کاربران هدیه می‌شوند.
              </p>
            </div>
            <div className="bottomSecurity experssNews">
              <h1>دسترسی به اسنپ اکسپرس در نقاط مختلف ایران</h1>
              <p>
                خرید اینترنتی از اسنپ اکسپرس در شهرهای مختلف کشور فعال است.
                اهالی شهرهای تهران، مشهد، تبریز، شیراز، اصفهان، سمنان، قم و…
                می‌توانند به‌سادگی از این سرویس استفاده کنند.
              </p>
            </div>
          </div>
          <div className="leftSecurity" style={{ marginTop: "2rem" }}>
            <div className="imgSecurity ">
              <img
                src={security_experss}
                alt=""
                style={{ width: "490px", height: "270px" }}
              />
              <div className="news " style={{ background: "#f5e9d0" }}>
                <h1>لذت یک خرید سریع و به‌صرفه</h1>
                <p>
                  خرید خوب خریدی است که وقت‌تان را نگیرد، تنوع و انتخاب‌های
                  مختلف برایتان فراهم کند و با تخفیف‌هایش کمک کند که محصولات
                  موردنظرتان را به‌صرفه‌تر بخرید. خرید با snapp expressتمام این
                  ویژگی‌ها را دارد. با دسترسی به انواع کالاها و تخفیف‌ها هم در
                  زمان صرفه‌جویی کنید و هم هوای جیب و بودجه‌تان را داشته باشید.
                  تا چای‌تان را دم کنید، پیک اسنپ درب منزل شماست!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InsertHooksExperrs;
