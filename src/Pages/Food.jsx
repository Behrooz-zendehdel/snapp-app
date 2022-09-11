import React from "react";
import Layout from "../Layout/Layout";
import "./Food.css";
import googleplay from "../assets/google-play-badge.png";
import bazaar from "../assets/bazaar.png";
import snapp from "../assets/snapp-pwa.png";
import sibapp from "../assets/sibapp-badge-white.png";
import iapps from "../assets/iApps.png";
import image_food from "../assets/image-food.jpeg";
import { Link } from "react-router-dom";
import { groupings, tfoods } from "../data/data";

const Food = () => {
  return (
    <Layout>
      <section style={{ marginTop: "100px" }}>
        <div className="header-home">
          <div className="home-right food-right">
            <div className="detail">
              <h1>سفارش آنلاین غذا با اسنپ</h1>
              <p style={{ marginTop: "3rem" }}>
                غذای خانگی دوست دارید یا فست‌فود؟ گوشت لذیذ یا سالاد‌های
                رنگارنگ؟ سفارش آنلاین غذا را با اسنپ تجربه کنید و در کوتاه‌ترین
                زمان و با بسته‌بندی مناسب، درب منزل یا محل کارتان تحویل بگیرید.
              </p>

              <button
                className="btn-web food-btn"
                type="submit"
                style={{ marginTop: "6rem" }}
              >
                غذا سفارش دهید
              </button>
            </div>
          </div>
          <div className="home-left">
            <img src={image_food} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="social-download social-food">
          <div className="social-media">
            <a href="https://play.google.com/store/apps/details?id=cab.snapp.passenger.play&referrer=appmetrica_tracking_id%3D1036046929106097450%26ym_tracking_id%3D3146307706900293541">
              <img src={googleplay} alt="GooglePlay" />
            </a>
            <a href="https://cafebazaar.ir/app/cab.snapp.passenger/?l=fa&referrer=appmetrica_tracking_id%3D243413381082522868%26ym_tracking_id%3D40049751087656923">
              <img src={bazaar} alt="bazaar" />
            </a>
            <a href="https://app.snapp.taxi/pre-ride">
              <img src={snapp} alt="snapp" />
            </a>
            <a href="https://sibapp.com/applications/snapp">
              <img src={sibapp} alt="sibapp" />
            </a>
            <a href="https://app.iapps.ir/i/191622396">
              <img src={iapps} alt="iapps" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="grouping">
          <h2>دسته بندی ها</h2>
          <div className="title-grouping">
            {groupings.map((grouping) => (
              <div className="cart-grouping" key={grouping.id}>
                <Link to={`${grouping.pathname}`}>
                  <div className="cart-name-group">
                    <img src={grouping.img} alt={grouping.name} />
                    <span>{grouping.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="types-of-food">
          <h2>انواع غذاها</h2>
          <div className="types-of-food-detail">
            {tfoods.map((tfood) => (
              <div className="cart-types-of-food-image" key={tfood.id}>
                <Link to={`${tfood.pathname}`}>
                  <img src={tfood.img} alt={tfood.name} />
                  <div className="cart-types-of-food-name">
                    <span>{tfood.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Food;
