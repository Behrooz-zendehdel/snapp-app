import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import React, { useState } from "react";

const QuestionHooksBike = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  return (
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
                ابتدا وارد سوپراپ اسنپ شوید و آیکن اسنپ بایک را انتخاب کنید. بعد
                از کلیک بر روی آن آیکن می‌توانید سفارش جدید خود را ثبت کنید.
                اکنون وارد صفحه‌ای می شوید که باید مبدأ، مقصد و نوع پیک را مشخص
                کنید.
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
                در سوپراپلیکشن اسنپ، گزینه «اسنپ‌باکس» برای ارسال مرسوله و گزینه
                «اسنپ‌بایک» برای جابجایی مسافر با موتور وجود دارند.
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
  );
};

export default QuestionHooksBike;
