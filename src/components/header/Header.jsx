import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/avatar-2.png';
import HeaderSocias from './HeaderSocias';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Murod Khanov</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocias />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header