import React from "react";
import taxiheader from "../../assets/taxi-header.jpg";

const HeaderHooksTaxi = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="header-home">
        <div className="home-right">
          <div className="detail">
            <h1>تاکسی اینترنتی اسنپ، در رکاب شماست!</h1>
            <p style={{ marginTop: "3rem" }}>
              اسنپ! اولین و بزرگترین تاکسی اینترنتی ایران است که برای جابه‌جایی
              در شهرهای بزرگ و کوچک ایران آماده خدمت‌رسانی به شماست.
            </p>

            <button
              className="btn-web"
              type="submit"
              style={{ marginTop: "6rem" }}
            >
              درخواست تاکسی{" "}
            </button>
          </div>
        </div>
        <div className="home-left">
          <img src={taxiheader} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeaderHooksTaxi;
