import React from "react";
import { useState } from "react";

import insertcargo from "../../assets/insertcargo.jpg";
import insertcargo1 from "../../assets/insertcargo1.jpg";
import insertcargo2 from "../../assets/insertcargo2.jpg";
import securitycargo from "../../assets/securitycargo.jpg";

const InsertHooksCargo = () => {
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
                    امکان انتخاب چند مقصد مختلف در اپلیکیشن اسنپ وجود دارد. شما
                    می‌توانید تعدادی از بارهای خود را به یک مسیر و تعدادی دیگر
                    را به مسیر دیگری منتقل کنید. این قابلیت می‌تواند در کاهش
                    زمان و سرعت جابه‌جایی بار کمک شایانی کند.
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
                اگر در حال جابه‌جایی وسایل خانه خود هستید یا می‌خواهید وسیله‌ای
                سنگین را از محل کار خود به نقطه‌ای از شهر انتقال دهید، وانت بار
                آنلاین اسنپ بهترین انتخاب ممکن است. بنابراین، هیچ‌گونه محدودیتی
                نسبت به نوع کاربری ساختمان جهت انتقال بار وجود ندارد و کلیه
                مشتریان می‌توانند وسایل خود را از منزل، شرکت یا مغازه خود به
                مکان دیگری منتقل کنند.
              </p>
            </div>
            <div className="bottomSecurity" style={{ height: "100% " }}>
              <h1>وانت بار در تهران و سراسر کشور</h1>
              <p style={{ marginTop: "2rem" }}>
                درخواست اینترنتی وانت سبک اسنپ در شهرهای تهران، کرج، شیراز،
                مشهد، اصفهان، اهواز، تبریز، قم، کرمان، گیلان، ارومیه، همدان،
                گرگان، هرمزگان، اراک، قزوین، کرمانشاه، مازندران، بیرجند، زنجان،
                بجنورد اردبیل، خرم‌آباد، سنندج و بوشهر امکان‌پذیر است. همچنین،
                می‌توان از سرویس وانت سنگین اسنپ در شهرهای تهران، کرج، شیراز،
                مشهد، اصفهان، قم، تبریز و اهواز نیز از طریق سوپراَپ اسنپ استفاده
                کرد.
              </p>
            </div>
          </div>
          <div className="leftSecurity">
            <div className="imgSecurity">
              <img src={securitycargo} alt="" style={{ width: "490px" }} />
              <div className="news">
                <h1>امکان انتخاب نوع وانت</h1>
                <p>
                  در سرویس وانت اینترنتی اسنپ امکان استفاده از چهار نوع وانت بار
                  وجود دارد: • وانت سبک (وانت پراید و وانت پیکان): مناسب برای
                  جابه‌جایی بار تا 500 کیلوگرم است. • وانت سبک مسقف: برای محافظت
                  از بار در برابر آفتاب یا باران کاربرد دارد. • وانت سبک
                  کفی‌دار: مناسب برای جابه‌جایی بهتر و جلوگیری از آسیب به مبلمان
                  و اثاثیه منزل است. • وانت سنگین (نیسان): مناسب برای بارهای
                  سنگین و حجیم است. در صورتی که بار بیش از 500 کیلوگرم تا 3800
                  کیلوگرم باشد، ما استفاده از سرویس وانت سنگین را پیشنهاد
                  می‌کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsertHooksCargo;
