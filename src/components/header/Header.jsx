import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/avatar-4.svg";
import HeaderSocias from "./HeaderSocias";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Dilmurod Akhmedov</h1>
        <h5 className="text-light">Java Script Software Developer</h5>
        <CTA />
        <HeaderSocias />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
