import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logosnapp.svg";
import "./navigation.css";
import { Rings } from "react-loader-spinner";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="navigation-nav">
          <ul>
            <li style={{ marginTop: "10px" }}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/jobs">فرصت های شغلی</Link>
            </li>
            <li>
              <Link to="/blogs">بلاگ</Link>
            </li>
            <li>
              <Link to="/clubs">باشگاه رانندگان</Link>
            </li>
            <li>
              <Link to="/register">ثبت نام راننده اسنپ</Link>
            </li>
            <li>
              <Link to="/organizition">پنل سازمانی</Link>
            </li>
            <li>
              <Link to="/aboutus">درباره ما</Link>
            </li>
            <li>
              <Link to="/contactus">تماس با ما</Link>
            </li>
          </ul>

          <Rings
            height="60"
            width="60"
            radius="9"
            color="#21aa58"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </nav>
      </header>
    </>
  );
};

export default Navigation;
