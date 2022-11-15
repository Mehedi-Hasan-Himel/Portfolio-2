import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a href="#about">
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a href="#experience">
        <BiBook></BiBook>
      </a>
      <a href="#services">
        <RiServiceFill></RiServiceFill>
      </a>
      <a href="#contact">
        <BiMessageSquareDetail></BiMessageSquareDetail>
      </a>
    </nav>
  );
};

export default Nav;
