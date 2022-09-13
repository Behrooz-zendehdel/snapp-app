import React from "react";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const QuestionsHooksMarket = () => {
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
            <h4>چگونه از کد تخفیف سوپر مارکت اسنپ استفاده کنم؟</h4>
            {one ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {one ? (
            <div className="answer h">
              <p>
                در هنگام ثبت سفارش و بعد از انتخاب زمان تحویل، می‌توانید کد
                تخفیف خود را در قسمت مشخص وارد کرده و گزینه اعمال کد را انتخاب
                کنید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setTwo(!two)}>
          <div className="q-detail">
            <h4>آیا امکان سفارش از شعب مختلف ‌هایپر استار وجود دارد؟</h4>
            {two ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {two ? (
            <div className="answer h">
              <p>
                با توجه به اینکه فروشگاه ‌هایپراستار نسبت به محدوده آدرس شما
                مشخص می‌شود، بنابراین در هر تنها امکان انتخاب یک آدرس و یک
                فروشگاه وجود دارد.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setThree(!three)}>
          <div className="q-detail">
            <h4>آیا می‌توانم بعد از پرداخت به اقلام سبد خرید خود اضافه کنم؟</h4>
            {three ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {three ? (
            <div className="answer h">
              <p>
                خیر، امکان اضافه کردن به اقلام سفارش پس از ثبت موفق سفارش وجود
                ندارد، در صورت نیاز سفارش جدیدی ثبت کنید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFour(!four)}>
          <div className="q-detail">
            <h4>آیا می‌توانم بعد از پرداخت، آدرس خود را تغییر دهم؟</h4>
            {four ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {four ? (
            <div className="answer h">
              <p>
                بله، شما ‌می‌توانید تا سه ساعت قبل از شروع بازه انتخابی زمان
                تحویل سفارش، با پشتیبانی اسنپ تماس گرفته و نسبت به تغییر آدرس
                اقدام کنید. قابل توجه است که در صورت تغییر آدرس خارج از محدوده
                سرویس دهی ‌هایپراستار، سفارش لغو خواهد شد.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFive(!five)}>
          <div className="q-detail">
            <h4>آیا امکان دسترسی به سوابق خریدهای قبلی وجود دارد؟</h4>
            {five ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {five ? (
            <div className="answer h">
              <p>
                بله. باید به حساب کاربری خود وارد شوید، سپس در قسمت حساب کاربری
                بر روی گزینه «‌لیست یا «سفارش‌های پیشین» کلیک کرده تا سوابق خرید
                شما نمایش داده شوند.
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

export default QuestionsHooksMarket;
