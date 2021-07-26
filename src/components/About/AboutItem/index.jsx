import React from 'react';
import style from './AboutItem.module.sass';
function AboutItem ({ image, date, title, description }) {
  return (
    <>
      <div className={style.aboutItem}>
        <img src={image} alt='' className={style.image} />
        <div className={style.content}>
          <h2 className={style.date}>{date}</h2>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default AboutItem;
