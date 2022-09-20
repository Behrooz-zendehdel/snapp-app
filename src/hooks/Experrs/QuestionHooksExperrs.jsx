import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";

const QuestionHooksExperrs = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  return (
    <section>
      <div className="porsesh">
        <h3>پرسش های پرتکرار</h3>

        <div className="question-title" onClick={() => setOne(!one)}>
          <div className="q-detail">
            <h4>خرید آنلاین از اسنپ اکسپرس چه مزایایی دارد؟</h4>
            {one ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {one ? (
            <div className="answer h">
              <p>
                با استفاده از اسنپ اکسپرس همیشه به سریع‌ترین شکل ممکن خرید
                خواهید کرد، زیرا این برنامه نزدیک‌ترین سوپرمارکت‌ها محلی و
                فروشگاه‌های زنجیره ای متعدد مانند هایپراستار، جانبو، رفاه، هایپر
                فامیلی، گندم و حیات مارکت به شما را پیدا می‌کند تا در کمترین
                زمان، خریدهایتان جلوی درب منزل به دست‌تان برسد. همچنین در قسمتی
                از برنامه نیز می‌توانید تخفیف‌های شگفت انگیز اجناس را (در بخش
                تخفیف نارنجی) مشاهده کرده و با قیمت بسیار مناسب خرید کنید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setTwo(!two)}>
          <div className="q-detail">
            <h4>چگونه می‌توانم اپلیکیشن اسنپ اکسپرس را نصب کنم؟</h4>
            {two ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {two ? (
            <div className="answer h">
              <p>
                در حال حاضر اپلیکیشن اسنپ اکسپرس برای تلفن‌های همراه اندرویدی در
                دسترس است و شما می‌توانید از طریق پلی استور، کافه بازار یا مایکت
                اپلیکیشن را دانلود و نصب کنید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setThree(!three)}>
          <div className="q-detail">
            <h4>زمان ثبت سفارش باید چه اطلاعاتی را وارد کنم؟</h4>
            {three ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {three ? (
            <div className="answer h">
              <p>
                در صورتی که ثبت نام نکرده یا وارد سیستم نشده باشید، پس از تکمیل
                سبد خرید، دکمه ورود/عضویت را زده و با شماره همراه خود اقدام به
                تکمیل سفارش نمایید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFour(!four)}>
          <div className="q-detail">
            <h4>مدت زمان ارسال سفارش چقدر است؟</h4>
            {four ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {four ? (
            <div className="answer h">
              <p>سفارش شما در بازه زمانی ۳۰ دقیقه به دست شما می‌رسد.</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFive(!five)}>
          <div className="q-detail">
            <h4>امکان لغو کردن سفارش وجود دارد؟</h4>
            {five ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {five ? (
            <div className="answer h">
              <p>
                پیش از تایید سفارش توسط فروشگاه، شما می‌توانید سفارش خود را لغو
                کنید. در صورتی که فروشگاه تایید کرده باشد، از طریق تماس با
                پشتیبانی می‌توانید سفارش خود را لغو کنید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestionHooksExperrs;
