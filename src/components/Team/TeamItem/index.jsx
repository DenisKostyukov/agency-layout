import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import style from './TeamItem.module.sass';
import { divide } from 'lodash';
function TeamItem ({ image, name, post }) {
  return (
    <>
      <div className={style.teamItem}>
        <div className={style.imageWrapper}>
          <img src={image} alt='' className={style.image} />
        </div>
        <div className={style.content}>
          <h2 className={style.name}>{name}</h2>
          <p className={style.post}>{post}</p>
            <div className={style.socialsList}>
              <a href='#!' className={style.link}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#!' className={style.link}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='#!' className={style.link}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamItem;
