import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './PortfolioItem.module.sass';
function PortfolioItem ({ image, title, description }) {
  return (
    <>
      <div className={style.portfolioItem}>
        <div className={style.imageWrapper}>
          <div className={style.portfolioItemHover}>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon}/>
          </div>
          <img src={image} alt='' className={style.image} />
        </div>

        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
