import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/mehedi-hasan-himel/" target="_black">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://twitter.com/HIMEL_JS" target="_black">
        <BsTwitter></BsTwitter>
      </a>
      <a
        href="https://www.instagram.com/mehedi_hasan_himel.js/"
        target="_black"
      >
        <BsInstagram></BsInstagram>
      </a>
      <a href="https://github.com/Mehedi-Hasan-Himel" target="_black">
        <BsGithub></BsGithub>
      </a>
    </div>
  );
};

export default HeaderSocial;
