import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ServiceItem.module.sass';
function ServiceItem ({ icon, title, description }) {
  return (
    <>
      <div className={style.serviceItem}>
        <FontAwesomeIcon icon={icon} className={style.icon} />
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
      </div>
    </>
  );
}

export default ServiceItem;
