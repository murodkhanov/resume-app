import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocias = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dilmurod-akhmedov-7b4962197/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/murodkhanov/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a href="htpps://dribbble.com" rel="noreferrer noopener" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocias;
