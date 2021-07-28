import React from 'react';
import { Link } from 'react-scroll';
import style from './Logo.module.sass';
import logo from './images/navbar-logo.svg';
function Logo () {
  return (
    <>
      <Link
        to='mainPage'
        className={style.link}
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={logo} className={style.logo} alt='' />
      </Link>
    </>
  );
}

export default Logo;
