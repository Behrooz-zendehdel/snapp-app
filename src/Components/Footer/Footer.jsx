import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineYoutube, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <header>
      <nav className="footer-nav">
        <ul>
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
        <div className="social-media">
          <a href="https://twitter.com/snapp_team" target="_blank">
            <FiTwitter />
          </a>
          <a href="https://instagram.com/snapp_team" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://www.youtube.com/c/Snapp_team" target="_blank">
            <AiOutlineYoutube />
          </a>
          <a href="https://www.linkedin.com/company/snapp.ir/" target="_blank">
            <AiOutlineLinkedin />
          </a>
          <a href="tg://resolve?domain=snappofficial" target="_blank">
            <TbBrandTelegram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Footer;
