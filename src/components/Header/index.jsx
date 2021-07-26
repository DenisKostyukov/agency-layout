import React from 'react';
import style from './Header.module.sass';
import Logo from './Logo';
import NavMenu from './NavMenu';
function Header () {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.headerInner}>
            <Logo />
            <NavMenu />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
