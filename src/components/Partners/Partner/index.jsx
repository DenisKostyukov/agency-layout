import React from 'react';
import style from './Partner.module.sass';
function Pertner ({ image }) {
  return (
    <>
      <li className={style.partnersListItem}>
        <a href='#!' className={style.link}>
          <img src={image} alt='' className={style.linkImg} />
        </a>
      </li>
    </>
  );
}

export default Pertner;
