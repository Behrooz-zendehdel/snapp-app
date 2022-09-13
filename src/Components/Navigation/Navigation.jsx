import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logosnapp.svg";
import "./navigation.css";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
const Navigation = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <header className="container">
        <nav className="navigation-nav">
          <img src={logo} alt="logo" />
          <nav>
            <ul className="listmenu">
              <li onClick={closeMobileMenu}>
                <Link to="/jobs">فرصت های شغلی</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/blogs">بلاگ</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/clubs">باشگاه رانندگان</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/register">ثبت نام راننده اسنپ</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/organizition">پنل سازمانی</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/aboutus">درباره ما</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/contactus">تماس با ما</Link>
              </li>
            </ul>
          </nav>
          <div className="menu" onClick={handleClick}>
            {click ? (
              <MdOutlineClose size={"2rem"} className="hidden" />
            ) : (
              <FiMenu size={"2rem"} className="show" />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
