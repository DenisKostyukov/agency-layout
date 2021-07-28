import React from 'react';
import { Link } from 'react-scroll';
import style from './NavMenuItem.module.sass';
function NavMenuItem ({ itemName, to , ...props}) {
  return (
    <>
      <li className={style.navMenuItem}>
        <Link
          to={to}
          activeClass={style.activeLink}
          className={style.link}
          spy={true}
          smooth={true}
          duration={500}
          {...props}
        >
          {itemName}
        </Link>
      </li>
    </>
  );
}

export default NavMenuItem;
