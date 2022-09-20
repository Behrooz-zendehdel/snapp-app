import React from "react";
import insert_experss_1 from "../../assets/insert_experss_1.jpeg";
import insert_experss_2 from "../../assets/insert_experss_2.jpeg";
import insert_experss_3 from "../../assets/insert_experss_3.jpeg";
import insert_experss_4 from "../../assets/insert_experss_4.jpeg";
import securitybike from "../../assets/securitybike.jpg";

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
            <div className="topSecurity">
              <h1>سفرهای درون شهری با پیک موتوری اسنپ!</h1>
              <p>
                جابه‌جایی افراد در شهرهای بزرگ و پرجمعیت مانند تهران زمان‌بر
                است. ممک است برای شما هم پیش آمده باشد که باید به سرعت به
                نقطه‌ای از شهر بروید، اما ترافیک باعث دیرتر رسیدن و بهم ریختن
                زمانبندی‌تان شده است. برای حل این مشکل، پیک موتوری اسنپ امکان
                تردد مسافران را از طریق اسنپ بایک فراهم کرده است. برای جابه‌جایی
                سریع به هر نقطه از شهر می‌توانید از سوپراپ اسنپ استفاده کنید
              </p>
            </div>
            <div className="bottomSecurity">
              <h1>ارسال بسته در یک چشم برهم زدن</h1>
              <p>
                تعداد قابل‌توجهی پیک‌ موتورسوار در اسنپ‌باکس در مناطق مختلف شهر
                فعالیت می‌کنند تا در مدت زمان کوتاهی بسته شما را دریافت کنند.
                آنها با سرعت عمل بالا، بسته شما را به مقصد مورد نظر تحویل
                می‌دهند. پس از تحویل بسته به گیرنده، پیام رسیدن پیک موتوری و
                تحویل بسته به مقصد برای شما ارسال می‌شود تا خیالتان از بابت
                رسیدن بسته به دست صاحبش راحت شود.
              </p>
            </div>
          </div>
          <div className="leftSecurity">
            <div className="imgSecurity">
              <img src={securitybike} alt="" style={{ width: "490px" }} />
              <div className="news">
                <h1>فعال بودن در بیشتر شهرهای کشور</h1>
                <p>
                  پیک موتوری اسنپ در حال حاضر در شهرهای تهران، مشهد، اصفهان، قم،
                  شیراز، کرج، اهواز، تبریز‌، یزد، کرمان، گیلان، هرمزگان، اراک،
                  قزوین، کرمانشاه، ارومیه، بیرجند، زنجان، اردبیل، خرم‌آباد،
                  سنندج و بجنورد فعال است. اسنپ در تلاش است تا خدمات خود را به
                  کلیه شهرهای کشور گسترش دهد.
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
