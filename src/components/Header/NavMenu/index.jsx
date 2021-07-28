import React from 'react';
import style from './NavMenu.module.sass';
import NavMenuItem from './NavMenuItem';
function NavMenu () {
  return (
    <>
    <nav className={style.nav}>
      <ul className={style.navMenu}>
        <NavMenuItem itemName="services" to="services" />
        <NavMenuItem itemName="portfolio" to="portfolio" />
        <NavMenuItem itemName="about" to="about" />
        <NavMenuItem itemName="team" to="team" />
        <NavMenuItem itemName="contact" to="contact" />
      </ul>
    </nav>
    </>
  );
}

export default NavMenu;
