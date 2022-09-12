import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import React, { useState } from "react";

const QuestionHooksTaxi = () => {
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
          <h4>سرویس تاکسی اینترنتی اسنپ دارای چند نوع خودرو است؟</h4>
          {one ? (
            <BiChevronDown style={{ fontSize: "2rem" }} />
          ) : (
            <BiChevronUp style={{ fontSize: "2rem" }} />
          )}
        </div>
        {one ? (
          <div className="answer h">
            <p>
              در سوپر اپلیکیشن اسنپ می‌توانید نوع خودرو را در قالب «اسنپ
              اکو» و «اسنپ اکوپلاس» انتخاب کنید. اسنپ اکو شامل استفاده از
              خودروهای معمولی با قیمت مناسب است و اسنپ اکوپلاس شامل درخواست
              سفارش برای خودروهای با کیفیت و قیمت بیشتر است. خودروهای پلاس
              کیفیت بالاتری دارند و مدل خودروها از سال 85 به بالاست.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="question-title" onClick={() => setTwo(!two)}>
        <div className="q-detail">
          <h4>قیمت‌ها در تاکسی اینترنتی اسنپ چگونه تعیین می‌شود؟</h4>
          {two ? (
            <BiChevronDown style={{ fontSize: "2rem" }} />
          ) : (
            <BiChevronUp style={{ fontSize: "2rem" }} />
          )}
        </div>
        {two ? (
          <div className="answer h">
            <p>
              قیمت هر سفر در اسنپ براساس چهار فاکتور اعم از «ورودی سفر»،
              «مسافت سفر»، «مدت زمان سفر» و «نسبت عرضه و تقاضا» تعیین
              می‌شود. ورودی سفر، مدت زمان سفر و مسافت سفر، «قیمت پایه» را
              تشکیل می‌دهند که هرچند ورودی و مسافت در یک سفر ثابت همیشه
              یکسان هستند. اما مدت زمان سفر با توجه به عواملی مانند ترافیک
              یا شرایط جوی خاص متغیر است. در نتیجه قیمت پایه سفرها در شرایطی
              که ورودی سفر و مسافت یکسان باشد به دلیل ترافیک و تغییر مدت
              زمان سفر می‌تواند تغییر کند. این قیمت پایه‌ متغیر خود متأثر از
              نسبت عرضه و تقاضاست. یک الگوریتم به‌صورت هوشمند نسبت عرضه و
              تقاضا را بررسی می‌کند و با توجه به آن به قیمت پایه اضافه یا از
              آن کم می‌شود.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="question-title" onClick={() => setThree(!three)}>
        <div className="q-detail">
          <h4>تاکسی اینترنتی اسنپ در چه شهرهایی فعال است؟</h4>
          {three ? (
            <BiChevronDown style={{ fontSize: "2rem" }} />
          ) : (
            <BiChevronUp style={{ fontSize: "2rem" }} />
          )}
        </div>
        {three ? (
          <div className="answer h">
            <p>
              تاکسی اینترنتی اسنپ در تمام ۳۱ استان ایران، سرویس آنلاین
              حمل‌ونقل شهری را ارئه می‌دهد.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="question-title" onClick={() => setFour(!four)}>
        <div className="q-detail">
          <h4>آیا امکان ردیابی خودرو از مبدأ تا مقصد وجود دارد؟</h4>
          {four ? (
            <BiChevronDown style={{ fontSize: "2rem" }} />
          ) : (
            <BiChevronUp style={{ fontSize: "2rem" }} />
          )}
        </div>
        {four ? (
          <div className="answer h">
            <p>
              بله، از طریق اپلیکیشن اسنپ می‌توانید حرکت خودرو را ردیابی
              کنید.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="question-title" onClick={() => setFive(!five)}>
        <div className="q-detail">
          <h4>چطور می‌توانم با پشتیبانی تماس بگیرم؟</h4>
          {five ? (
            <BiChevronDown style={{ fontSize: "2rem" }} />
          ) : (
            <BiChevronUp style={{ fontSize: "2rem" }} />
          )}
        </div>
        {five ? (
          <div className="answer h">
            <p>
              برای ارتباط مستقیم با پشتیبانی می‌توانید با شماره ۹۱۰۳۹۰۰۰-۰۲۱
              تماس گرفته و منتظر پاسخگویی همکاران پشتیبانی ما باشید یا در
              صندوق صوتی ما پیغام ارسال کنید.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  </section>
  )
}

export default QuestionHooksTaxi