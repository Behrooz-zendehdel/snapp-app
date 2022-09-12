import React from "react";
import cargoimg from "../../assets/cargoimg.jpg";

const HeaderHooksCargo = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="header-home">
        <div className="home-right">
          <div className="detail">
            <h1>وانت بار اینترنتی اسنپ!</h1>
            <p style={{ marginTop: "3rem" }}>
              سرویس وانت بار اسنپ بهترین راهکار برای جابه‌جایی وسایل و بار است.
              شما به‌راحتی می‌توانید از طریق سوپراپ اسنپ اقدام به ثبت درخواست
              جهت استفاده از این سرویس کنید.
            </p>

            <button
              className="btn-web"
              type="submit"
              style={{ marginTop: "6rem" }}
            >
              درخواست وانت{" "}
            </button>
          </div>
        </div>
        <div className="home-left">
          <img src={cargoimg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeaderHooksCargo;
