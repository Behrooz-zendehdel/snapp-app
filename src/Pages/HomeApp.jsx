import React from "react";
import { Link } from "react-router-dom";
import taxi from "../assets/Taxi.svg";
import bike from "../assets/bike.svg";
import cargo from "../assets/Pickup-new.png";
import food from "../assets/food.svg";
import market from "../assets/market.svg";
import experss from "../assets/market (1).svg";
import ticket from "../assets/ticket-icon.svg";
import ticketout from "../assets/ticket-icon.svg";
import doctor from "../assets/doctor.svg";
import hotel from "../assets/hotel.png";
import tripout from "../assets/trip.svg";
import shop from "../assets/new Shop.png";
import bus from "../assets/bus.png";
import train from "../assets/train.png";
import club from "../assets/club.svg";
import bors from "../assets/Service Icon.png";
import servicebus from "../assets/Moving.png";
import pay from "../assets/pay.svg";
import snappticket from "../assets/ticket-icon.svg";

const HomeApp = () => {
  return (
    <section>
      <div className="details-delivery">
        <Link to="/homeApp/taxi" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={taxi} alt="" />
            <div className="line-detail">
              <h5>تاکسی اینترنتی</h5>
              <p>امکان درخواست آنلاین خودرو</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/bike" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={bike} alt="" />
            <div className="line-detail">
              <h5>پیک موتوری</h5>
              <p>حمل و نقل با اسنپ</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/cargo" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={cargo} alt="" />
            <div className="line-detail">
              <h5>درخواست وانت</h5>
              <p>حمل و نقل با اسنپ</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/food" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={food} alt="" />
            <div className="line-detail">
              <h5>سفارش آنلاین غذا</h5>
              <p>سفارش غذا،نان و شیرینی با اسنپ</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/market" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={market} alt="" />
            <div className="line-detail">
              <h5>سوپر مارکت آنلاین</h5>
              <p>تهیه اقلام روزانه با اسنپ</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/experss" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={experss} alt="" />
            <div className="line-detail">
              <h5>اسنپ اکسپرس</h5>
              <p>تحویل کمتر از 30 دقیقه</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/ticket" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={ticket} alt="" />
            <div className="line-detail">
              <h5>بلیط پرواز داخلی </h5>
              <p>گردشگری با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/ticketout" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={ticketout} alt="" />
            <div className="line-detail">
              <h5>بلیط پرواز خارجی </h5>
              <p>گردشگری با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/doctor" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={doctor} alt="" />
            <div className="line-detail">
              <h5>دکتر </h5>
              <p>درمان با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/hotel" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={hotel} alt="" />
            <div className="line-detail">
              <h5>رزرو هتل </h5>
              <p>گردشگری با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/tripout" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={tripout} alt="" />
            <div className="line-detail">
              <h5>رزرو اقامتگاه </h5>
              <p>گردشگری با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/shop" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={shop} alt="" />
            <div className="line-detail">
              <h5>فروشگاه </h5>
              <p>خرید از فروشگاه های معتبر شهر </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/bus" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={bus} alt="" />
            <div className="line-detail">
              <h5>بلیط اتوبوس</h5>
              <p>گردشگری با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/train" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={train} alt="" />
            <div className="line-detail">
              <h5>بلیط قطار </h5>
              <p>گردشگری با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/club" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={club} alt="" />
            <div className="line-detail">
              <h5>اسنپ ! کلاب </h5>
              <p>باشگاه مشتریان اسنپ !</p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/bors" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={bors} alt="" />
            <div className="line-detail">
              <h5>سرمایه گذاری </h5>
              <p>خدمات غیرحضوری بورس و سرمایه گذاری </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/servicebus" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={servicebus} alt="" />
            <div className="line-detail">
              <h5>اسباب کشی منزل </h5>
              <p>حمل و نقل با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/pay" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={pay} alt="" />
            <div className="line-detail">
              <h5>سرویس اعتباری </h5>
              <p>پرداخت با اسنپ </p>
            </div>
          </div>
        </Link>
        <Link to="/homeApp/snappticket" style={{ textDecoration: "none" }}>
          <div className="line">
            <img src={snappticket} alt="" />
            <div className="line-detail">
              <h5>اسنپ تیکت </h5>
              <p>خرید آنلاین بلیط با اسنپ </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeApp;
