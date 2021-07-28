import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import NavMenuItem from '../Header/NavMenu/NavMenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import style from './MobileMenu.module.sass';

export default function MobileMenu () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleActive = () => setIsOpen(!isOpen);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isOpen && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isOpen]);
  return (
    <>
      <div className={style.menuWrapper} ref={menuRef}>
        <button className={style.menuBtn}onClick={() => setIsOpen(!isOpen)}>menu <FontAwesomeIcon icon={faBars} /></button>
        <div
          className={cx(style.mobileMenu, {
            [style.mobileMenuActive]: isOpen,
            [style.mobileMenuDisable]: !isOpen,
          })}
        >
          <NavMenuItem
            onClick={toggleActive}
            itemName='services'
            to='services'
          />
          <NavMenuItem
            onClick={toggleActive}
            itemName='portfolio'
            to='portfolio'
          />
          <NavMenuItem onClick={toggleActive} itemName='about' to='about' />
          <NavMenuItem onClick={toggleActive} itemName='team' to='team' />
          <NavMenuItem onClick={toggleActive} itemName='contact' to='contact' />
        </div>
      </div>
    </>
  );
}
