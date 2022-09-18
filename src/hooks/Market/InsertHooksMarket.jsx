import React from "react";
import insertmarket1 from "../../assets/insertmarket1.jpeg";
import insertmarket2 from "../../assets/insertmarket2.jpeg";
import insertmarket3 from "../../assets/insertmarket3.jpeg";
import { useState } from "react";
const InsertHooksMarket = () => {
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
                backgroundColor: go ? "blue" : "",
                color: go ? "white" : "",
              }}
              onClick={goHandler}
            >
              ثبت سفارش
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: goBack ? "blue" : "",
                color: goBack ? "white" : "",
              }}
              onClick={goBackHandler}
            >
              زمان تحویل
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: delay ? "blue" : "",
                color: delay ? "white" : "",
              }}
              onClick={delayHandler}
            >
              پرداخت آنلاین
            </button>
          </div>

          {go && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insertmarket1} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>ثبت سفارش از سوپرمارکت</h3>
                  <p>
                    وارد اپلیکیشن اسنپ شوید و آیکن سوپرمارکت را انتخاب کنید. بعد
                    از آن باید نوع فروشگاه نظر خود را تعیین کنید. سپس می‌توانید
                    از دسته بندی‌های مختلف، محصولات خود را انتخاب و سفارشتان را
                    نهایی کنید.
                  </p>
                </div>
              </div>
            </>
          )}
          {goBack && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insertmarket2} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>پرداخت آنلاین، بدون دردسر</h3>
                  <p>
                    به‌ راحتی می‌توانید از طریق درگاه پرداخت آنلاین، هزینه سفارش
                    خود را پرداخت کنید. بعد از پیامکی برای آماده سازی و ارسال
                    اقلام خریداری شده، دریافت خواهید کرد و همچنین در هر لحظه در
                    اپلیکیشن اسنپ آخرین وضعیت ارسال کالا را می‌توان مشاهده کرد.
                  </p>
                </div>
              </div>
            </>
          )}
          {delay && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insertmarket3} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>ثبت توقف در مسیر</h3>
                  <p>
                    اگر برای سوار شدن و رسیدن به تاکسی اسنپ زمان بیشتری لازم
                    دارید یا باید برای چند دقیقه در محلی توقف داشته باشید، نیاز
                    به اتمام سفر و درخواست مجدد برای تاکسی اینترنتی نیست و فقط
                    کافی است مدت زمان توقف را در اپلیکیشن ثبت کنید.
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
            <div className="topSecurity marketsecurity">
              <h1>تخفیف‌ در سوپرمارکت آنلاین اسنپ</h1>
              <p>
                از ویژگی‌های منحصر به فرد سوپرمارکت اسنپ، ارائه تخفیف‌های هیجان
                انگیز در روزهای مختلف هفته است. بنابراین مشتریان گرامی می‌توانند
                کالاهای باکیفیت و در عین حال با قیمت مناسب را در سبد خرید خود
                اضافه کنند و همچنین امکان خریدهای بیشتر و متنوع، برای کلیه اقشار
                جامعه مهیا شود.
              </p>
            </div>
            <div className="bottomSecurity marketsecurity">
              <h1>فعال بودن در بیشتر شهرهای کشور</h1>
              <p>
                خرید اینترنتی از سوپرمارکت اسنپ، در حال حاضر برای ساکنان شهرهای
                تهران، یزد، قم، کرج، مشهد، شیراز، اصفهان، تبریز، اهواز، رشت،
                لواسان، بوشهر، کرمان، نیشابور، همدان، ارومیه و قزوین فعال است.
                اسنپ در تلاش است تا برای تمام شهرهای کشور، خرید آنلاین
                سوپرمارکتی را فراهم کند.
              </p>
            </div>
          </div>
          <div className="leftSecurity">
            <div className="imgSecurity">
              <video
                controls
                loop
                preload="none"
                poster="https://web-cdn.snapp.ir/snapp-website/images/market/market-cover.jpg"
                src="https://web-cdn.snapp.ir/snapp-website/videos/ventures/2Market.mp4"
                style={{ width: "100%" }}
              ></video>
              <div
                className="news"
                style={{ backgroundColor: " rgba(10, 44, 220, 0.075)" }}
              >
                <h1>تنوع بالای اقلام مصرفی روزانه</h1>
                <p>
                  سوپرمارکت آنلاین اسنپ بیش از پنج هزار کالای متنوع در
                  دسته‌بند‌ی‌های گوناگون از جمله لبنیات، خواربار، میوه و سبزیجات
                  تازه، مواد پروتئینی، نان و شیرینی و محصولات آرایشی و بهداشتی
                  را به صورت آنلاین عرضه می‌کند. گستردگی محصولات این امکان را به
                  کاربر می‌دهد که تمامی اجناس مورد نیاز خود را در یک سفارش تهیه
                  کند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsertHooksMarket;
