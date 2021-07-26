import React from 'react';
import style from './Logo.module.sass';
import logo from './images/navbar-logo.svg';
function Logo () {
  return <>
  <img src={logo} className={style.logo} alt=""  />
  </>;
}

export default Logo;
