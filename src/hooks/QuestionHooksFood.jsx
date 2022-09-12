import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import React, { useState } from "react";

const QuestionHooksFood = () => {
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
            <h4>تحویل سفارش غذا چقدر زمان می‌برد؟</h4>
            {one ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {one ? (
            <div className="answer h">
              <p>
                زمان تحویل سفارش متغیر است اما اسنپ‌ سعی می کند در سریع‌ترین
                زمان ممکن سفارش شما تحویل ‌دهد.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setTwo(!two)}>
          <div className="q-detail">
            <h4>از چه راه‌هایی می‌توان هزینه سفارش غذا را پرداخت کرد؟</h4>
            {two ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {two ? (
            <div className="answer h">
              <p>
                کاربران می‌توانند از سه طریق مختلف از جمله حضوری، اعتباری و
                آنلاین مبلغ سفارش خود را کنند.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setThree(!three)}>
          <div className="q-detail">
            <h4>آیا می‌توان در یک ثبت سفارش از چند رستوران غذا تهیه کرد؟</h4>
            {three ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {three ? (
            <div className="answer h">
              <p>
                در هر سفارش می‌توان تنها از یک رستوران ثبت داشت. اما برای سفارش
                از رستوران‌های بیشتر، پس از ثبت سفارش اول خود می‌توانید جدیدی از
                رستورانی دیگر داشته باشید.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFour(!four)}>
          <div className="q-detail">
            <h4>از کجا کد تخفیف دریافت کنم؟</h4>
            {four ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {four ? (
            <div className="answer h">
              <p>
                تخفیف‌ها با توجه به کمپین‌های مختلف در اختیار مشتریان قرار
                می‌گیرند. از طریق اسنپ کلاب هم تخفیف‌های تفکیک شده برای خدماتی
                نظیر سفارش غذا، کیک و شیرینی و نانوایی را کنید. همچنین بسته‌های
                خدماتی در راستای کاهش هزینه‌های سفارش‌های شما نیز ارایه شده است.{" "}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFive(!five)}>
          <div className="q-detail">
            <h4>چگونه برای سفارش غذا اقدام کنم؟</h4>
            {five ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {five ? (
            <div className="answer h">
              <p>
                پس از نصب سوپراپ اسنپ و وارد شدن به آن، آیکن غذا را انتخاب کنید.
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

export default QuestionHooksFood;
