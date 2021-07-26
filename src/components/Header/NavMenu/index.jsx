import React from 'react';
import style from './NavMenu.module.sass';
import NavMenuItem from './NavMenuItem';
function NavMenu () {
  return (
    <>
    <nav className={style.nav}>
      <ul className={style.navMenu}>
        <NavMenuItem itemName="services" />
        <NavMenuItem itemName="portfolio" />
        <NavMenuItem itemName="about" />
        <NavMenuItem itemName="team" />
        <NavMenuItem itemName="contact" />
      </ul>
    </nav>
    </>
  );
}

export default NavMenu;
