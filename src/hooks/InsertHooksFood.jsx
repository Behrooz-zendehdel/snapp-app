import React from "react";
import { useState } from "react";
import insert_image_food from "../assets/insert_image-food.jpeg";
import insert_image_food2 from "../assets/insert_image_food2.jpeg";
import insert_image_food3 from "../assets/insert_image_food3.jpeg";
import more from "../assets/more.svg";
import shila from "../assets/Shila.png";
import Perperook from "../assets/Perperook.png";
import Baguette from "../assets/Baguette.png";
import Hani from "../assets/Hani.png";
import Procalory from "../assets/Procalory.png";
import Raftari from "../assets/Raftari.png";
import BurgerLand from "../assets/BurgerLand.png";
import Bergur1385 from "../assets/Bergur1385.png";

const InsertHooksFood = () => {
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
    <>
      <section style={{ marginTop: "100px" }}>
        <div className="insert">
          <div className="insert-taxi">
            <div className="insert-btn">
              <button
                className="btns"
                style={{
                  backgroundColor: go ? "#ff00a6" : "",
                  color: go ? "white" : "",
                }}
                onClick={goHandler}
              >
                ثبت سفارش
              </button>
              <button
                className="btns"
                style={{
                  backgroundColor: goBack ? "#ff00a6" : "",
                  color: goBack ? "white" : "",
                }}
                onClick={goBackHandler}
              >
                جستجوی پیشرفته
              </button>
              <button
                className="btns"
                style={{
                  backgroundColor: delay ? "#ff00a6" : "",
                  color: delay ? "white" : "",
                }}
                onClick={delayHandler}
              >
                رستوران های منتخب
              </button>
            </div>

            {go && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insert_image_food} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>ثبت سفارش آنلاین غذا</h3>
                    <p>
                      ابتدا وارد سوپراپ اسنپ شوید و آیکن غذا را انتخاب کنید. بعد
                      از انتخاب این آیکن، باید آدرس خود را روی نقشه مشخص کنید.
                      سپس وارد صفحه‌ای می‌شوید که باید دسته‌بندی مورد نظر خود را
                      براساس انواع غذاها انتخاب کنید.
                    </p>
                  </div>
                </div>
              </>
            )}
            {goBack && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insert_image_food2} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>امکان جستجوی پیشرفته</h3>
                    <p>
                      اسنپ‌ امکان جستجو و ثبت سفارش براساس نوع غذا، منطقه مورد
                      نظر و اسم رستوران را برای کاربران فراهم کرده است. از این
                      طریق می‌توانید غذا یا رستوران مورد علاقه خود را سریعتر
                      پیدا کنید.
                    </p>
                  </div>
                </div>
              </>
            )}
            {delay && (
              <>
                <div className="insert-col">
                  <div className="insert-img">
                    <img src={insert_image_food3} alt="" />
                  </div>
                  <div className="insert-deatil">
                    <h3>رستوران‌های منتخب کاربر</h3>
                    <p>
                      از قابلیت‌های مهم سوپراپ اسنپ، اضافه کردن رستوران‌های مورد
                      علاقه به پروفایل شخصی کاربر است. با این کار می‌توانید
                      فرآیند جستجو رستوران را آسان‌تر کرده و در زمان کمتری، غذای
                      مورد نظر خود را سفارش دهید.
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
              <div className="topSecurity foodSecurity">
                <h1>تنوع در سفارش غذا، شیرینی و نان</h1>
                <p>
                  در سوپراپ اسنپ امکان سفارش غذا، کیک، شیرینی، آب میوه و بستنی و
                  حتی نان نیز وجود دارد. فقط کافیست تا به بخش هرکدام از موارد
                  اشاره شده مراجعه کنید و هرآنچه که تمایل داشتید را سفارش دهید.
                  تمام جزییات ارسال و زمان تحویل نیز در ادامه به شما اعلام خواهد
                  شد.
                </p>
              </div>
              <div className="bottomSecurity foodSecurity">
                <h1>سفارش آنلاین غذا بدون هزینه اضافی</h1>
                <p>
                  تفاوتی در هزینه سفارش غذا از طریق اپلیکیشن اسنپ نسبت به منوی
                  رستوران وجود ندارد، بلکه برخی تخفیف‌های ویژه و کوپن‌های خاص
                  برای هر رستوران نیز در دسترس و قبل از پرداخت قابل مشاهده است.
                  همچنین امکان استفاده از امتیازهای اسنپ!کلاب برای دریافت تخفیف
                  بیشتر نیز در این بخش در نظر گرفته شده است.
                </p>
              </div>
            </div>
            <div className="leftSecurity">
              <div className="imgSecurity">
                <video
                  controls
                  loop
                  preload="none"
                  poster="https://web-cdn.snapp.ir/snapp-website/images/food/food-cover.jpg"
                  src="https://web-cdn.snapp.ir/snapp-website/videos/ventures/3Food.mp4"
                ></video>
                <div className="news" style={{ backgroundColor: "#ff00a613" }}>
                  <h1>سفارش آنلاین غذا در تهران و سراسر کشور</h1>
                  <p>
                    سفارش اینترنتی غذا با اسنپ، در حال حاضر برای ساکنان شهرهای
                    تهران، اصفهان، مشهد، شیراز، کرج، تبریز، اردبیل، بندرعباس،
                    خرم‌آباد، کرمانشاه، کیش، بیرجند، نیشابور، همدان، ساری،
                    بوشهر، کاشان، یزد و بیش از 130 شهر دیگر ایران فعال است. اسنپ
                    در تلاش است تا برای کاربران تمام شهرهای کشور، امکان سفارش
                    آنلاین غذا را فراهم کند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="popular-restorant">
            <h2>پرطرفدارترین رستوران‌ها در اسنپ</h2>
            <div className="logo-popular-restorant">
              <ul>
                <li>
                  <a>
                    <img src={shila} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Perperook} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Baguette} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Hani} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Procalory} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Raftari} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={BurgerLand} alt="" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Bergur1385} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="articles">
              <div className="articles_snapp">
                <h2>مقالات مرتبط</h2>
                <button
                  style={{
                    border: "1px solid #21aa58",
                    padding: "15px 22px",
                    color: "#21aa58",
                    cursor: "pointer",
                    borderRadius: "10px",
                    background: "transparent",
                    fontSize: "17px",
                  }}
                >
                  مقالات بیشتر
                </button>
              </div>
              <div className="articles_list">
                <ul>
                  <li>
                    <a href="#">طرز تهیه هزاری ماهی خوشمزه جنوبی ساده و سریع</a>
                  </li>
                  <li>
                    <a href="#">طرز تهیه خوراک صدف، متفاوت و فراموش‌نشدنی</a>
                  </li>
                  <li>
                    <a href="#">
                      طرز تهیه کوفته انار دون مجلسی با طعمی بی‌نظیر
                    </a>
                  </li>
                  <li>
                    <a href="#">طرز تهیه سس انار خانگی با آب انار و رب انار</a>
                  </li>
                  <li>
                    <a href="#">طرز تهیه شربت بیدمشک؛ خوشمزه و خنک</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default InsertHooksFood;
