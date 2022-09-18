import React, { useState } from "react";
import insertimg1 from "../../assets/insertimg1.jpg";
import insertimg2 from "../../assets/insertimg2.jpg";
import insertimg3 from "../../assets/insertimg3.jpg";
import more from "../../assets/more.svg";

const InsertHooks = () => {
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
              ثبت
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: goBack ? "#06d170" : "",
                color: goBack ? "white" : "",
              }}
              onClick={goBackHandler}
            >
              رفت وبرگشت
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: delay ? "#06d170" : "",
                color: delay ? "white" : "",
              }}
              onClick={delayHandler}
            >
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
                    انتخاب کنید. در این حالت، تاکسی با رساندن شما به مقصد منتظر
                    می‌ماند تا دوباره شما را به مبدأ برگرداند.
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
            <div className="topSecurity">
              <h1>حفظ امنیت مسافران در طول سفر</h1>
              <p>
                تاکسی اینترنتی اسنپ به منظور تأمین امنیت مسافران، «سرویس امنیت
                سفر» را به اپلیکیشن خود اضافه کرده است. با استفاده از این
                قابلیت، امکان تماس مستقیم با تیم ویژهی امنیت سفر، امکان به
                اشتراک گذاشتن موقعیت مکانی و تماس مستقیم با اورژانس برای مسافران
                فراهم شده است. سرویس امنیت سفر، با نشان یک سپر آبیرنگ در سمت چپ
                نقشه نمایش داده می‌شود. این سرویس تمام اقدامات و امکانات امنیتی
                اسنپ را به صورت متمرکز در خود جای میدهد.
              </p>
            </div>
            <div className="bottomSecurity">
              <h1>امکان پرداخت نقدی و آنلاین</h1>
              <p>
                همۀ ما گاهی اوقات پول نقد در جیب نداریم یا به دلیل شرایط همه
                گیری کرونا، ترجیح میدهیم مبلغ را آنلاین پرداخت کنیم. داشتن آزادی
                عمل در نوع پرداخت می‌تواند به قابلیت استفاده راحت از خدمات تاکسی
                اینترنتی بیفزاید. در سوپر اپلیکیشن اسنپ مسافران می‌توانند مبلغ
                سفر خود را به صورت پرداخت نقدی، آنلاین و یا از طریق کیف پول آپ
                پرداخت کنند.
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
                style={{ width: "490px" }}
              ></video>
              <div className="news">
                <h1>خبرهای جدید از تاکسی اینترنتی اسنپ</h1>
                <p>
                  با اطلاع از تازهترین اخبار مربوط به تاکسی اینترنتی اسنپ
                  می‌توانید از قابلیتها و ویژگی‌های جدید این پلتفرم باخبر شوید.
                  با به روز نگه داشتن اطلاع خود، امکان استفاده همه جانبه از سوپر
                  اپلیکیشن اسنپ را خواهید داشت. با وبلاگ اسنپ همراه باشید.
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
            دلخواه اشاره کرد .بدون نیاز به مراجعه‌ى حضوری، تمام مراحل ثبت‌نام را
            اینترنتی انجام دهید.
          </p>
          <button className="btns green">بیشتر بدانید</button>
        </div>
      </div>
    </section>
  );
};

export default InsertHooks;
