import React from "react";
import CV from "../../../assets/cv.pdf";

import "./Header.css";
const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mehedi Hasan Himel</h1>
        <h5 className="text-light">Front-End Web Developer.</h5>
        <a href={CV} download>
          Download CV
        </a>
        <a href="#contact"> Let's Talk. </a>
      </div>
    </Header>
  );
};

export default Header;
