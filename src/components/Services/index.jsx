import React from 'react';
import '../../common/style/mainStyle.sass';
import BlockDescription from '../BlockDescription';
import BlockTitle from '../BlockTitle';
import ServiceItem from './ServiceItem';
import {
  faShoppingCart,
  faLaptop,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import '../../common/style/mainStyle.sass';
import style from './Services.module.sass';
function Services () {
  return (
    <>
      <section className={style.services} id="services">
        <div className='container'>
          <div className={style.servicesInner}>
            <BlockTitle title='services' />
            <BlockDescription description='Lorem ipsum dolor sit amet consectetur.' />
            <div className={style.serviceList}>
              <ServiceItem
                icon={faShoppingCart}
                title='e-commerce'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
              />
              <ServiceItem
                icon={faLaptop}
                title='Responsive Design'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
              />
              <ServiceItem
                icon={faLock}
                title='Web Security'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
