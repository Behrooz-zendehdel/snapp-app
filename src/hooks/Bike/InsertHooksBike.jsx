import React, { useState } from "react";
import insertbike1 from "../../assets/insertbike1.jpg";
import insertbike2 from "../../assets/insertbike2.jpg";
import insertbike3 from "../../assets/insertbike3.jpg";
import securitybike from "../../assets/securitybike.jpg";
import "../../Pages/taxi.css";

const InsertHooksBike = () => {
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
              درخواست پیک
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: goBack ? "#06d170" : "",
                color: goBack ? "white" : "",
              }}
              onClick={goBackHandler}
            >
              ثبت مقصد
            </button>
            <button
              className="btns"
              style={{
                backgroundColor: delay ? "#06d170" : "",
                color: delay ? "white" : "",
              }}
              onClick={delayHandler}
            >
              رفت و برگشت
            </button>
          </div>

          {go && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insertbike1} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>درخواست پیک موتوری</h3>
                  <p>
                    در سوپر اپلیکیشن اسنپ، آیکن «اسنپ» برای جابه‌جای مسافر و
                    آیکن «اسنپ باکس» را برای جابه‌جایی کالا انتخاب کنید. ابتدا
                    آدرس مبدأ و سپس مقصد خود را تعیین کنید. در ادامه می‌توانید
                    مبلغ، گزینه‌های سفر و غیره را مشاهده و ویرایش کنید.
                  </p>
                </div>
              </div>
            </>
          )}
          {goBack && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insertbike2} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>ثبت مقصدهای مختلف</h3>
                  <p>
                    امکان افزودن مقصد‌های بیشتر وجود دارد و می‌توانید چندین بسته
                    را به مقاصد مختلف در سراسر شهر ارسال کنید. این قابلیت به
                    کاهش زمان و سرعت ارسال مرسولات کمک می‌کند.
                  </p>
                </div>
              </div>
            </>
          )}
          {delay && (
            <>
              <div className="insert-col">
                <div className="insert-img">
                  <img src={insertbike3} alt="" />
                </div>
                <div className="insert-deatil">
                  <h3>درخواست رفت و برگشت</h3>
                  <p>
                    ممکن است نیاز باشد بسته‌ای را به مقصدی ارسال کنید و در عوض
                    از مقصد بسته یا رسید امضا شده را دریافت کنید! برای این کار،
                    سوپراپ اسنپ امکان رفت و برگشت مسیر را نیز فراهم و در اختیار
                    شما قرار داده است.
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

export default InsertHooksBike;
