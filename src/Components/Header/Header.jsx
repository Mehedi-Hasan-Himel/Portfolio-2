import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mehedi Hasan Himel</h1>
        <h5 className="text-light ">Front-End Web Developer.</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
