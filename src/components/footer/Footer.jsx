import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="!#" className="footer__logo">
        Murod Khanov
      </a>

      <ul className="permalinks">
        <li>
          <a href="!#">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#srvices">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/dilmurod.axmedov.927"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/murod.khanov/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/dilmurod-akhmedov-7b4962197/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Murod Khanov. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
