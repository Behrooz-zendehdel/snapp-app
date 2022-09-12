import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import React, { useState } from "react";
const QuestionHooksCargo = () => {
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
            <h4>خدمات وانت بار اسنپ شامل چه مواردی می‌‍شود؟</h4>
            {one ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {one ? (
            <div className="answer h">
              <p>
                این خدمات شامل حمل بار، وسایل و اثاثیه از منزل یا محل کار است.
                انتخاب نوع وانت، استفاده از کمک راننده برای جابه‌جایی بار،
                پشتیبانی 24 ساعته و بسیاری موارد دیگر، از جمله خدمات سوپراَپ
                وانت اسنپ هستند.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setTwo(!two)}>
          <div className="q-detail">
            <h4>سرویس وانت اسنپ دارای چند نوع وانت است؟</h4>
            {two ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {two ? (
            <div className="answer h">
              <p>
                در سوپراپ اسنپ می‌تواند نوع وانت را براساس نیازهای شخصی انتخاب
                کرد. وانت‌های اسنپ به انواع وانت سبک، وانت سبک مسقف، وانت سبک
                کفی‌دار و وانت سنگین تقسیم می‌شوند.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setThree(!three)}>
          <div className="q-detail">
            <h4>آیا سرویس وانت بار اسنپ خدمات بسته بندی دارد؟</h4>
            {three ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {three ? (
            <div className="answer h">
              <p>خیر، این سرویس تنها مسئولیت حمل و نقل بار را بر عهده دارد.</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFour(!four)}>
          <div className="q-detail">
            <h4>سرویس وانت بار اسنپ در چه شهرهایی فعال است؟</h4>
            {four ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {four ? (
            <div className="answer h">
              <p>
                وانت سبک اسنپ به شهرهای تهران، کرج، شیراز، مشهد، اصفهان، اهواز،
                تبریز، قم، کرمان، گیلان، ارومیه، همدان، گرگان، هرمزگان، اراک،
                قزوین، کرمانشاه، مازندران، بیرجند، زنجان، بجنورد اردبیل،
                خرم‌آباد، سنندج و بوشهر خدمات رسانی می‌کند. همچنین، می‌توان از
                سرویس وانت سنگین اسنپ در شهرهای تهران، کرج، شیراز، مشهد، اصفهان،
                قم، تبریز و اهواز نیز استفاده کرد.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="question-title" onClick={() => setFive(!five)}>
          <div className="q-detail">
            <h4>آیا تیم باربری اسنپ پروتکل‌های بهداشتی را رعایت می‌کند؟</h4>
            {five ? (
              <BiChevronDown style={{ fontSize: "2rem" }} />
            ) : (
              <BiChevronUp style={{ fontSize: "2rem" }} />
            )}
          </div>
          {five ? (
            <div className="answer h">
              <p>
                بله، همۀ اعضای تیم باربری اسنپ از ماسک، دستکش و مواد ضدعفونی
                کننده استفاده می‌کنند.
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

export default QuestionHooksCargo;
