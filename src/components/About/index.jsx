import React from 'react';
import BlockDescription from '../BlockDescription';
import BlockTitle from '../BlockTitle';
import '../../common/style/mainStyle.sass';
import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';
import fourth from './images/4.jpg';
import style from './About.module.sass';
import AboutItem from './AboutItem';
function About () {
  return (
    <>
      <section className={style.about}>
        <div className='container'>
          <div className={style.aboutInner}>
            <BlockTitle title='about' />
            <BlockDescription descrition='Lorem ipsum dolor sit amet consectetur.' />
            <div className={style.aboutItems}>
              <AboutItem
                image={first}
                date='2009-2011'
                title='Our Humble Beginnings'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
              />
              <AboutItem
                image={second}
                date='March 2011'
                title='An Agency is Born'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
              />
              <AboutItem
                image={third}
                date='December 2015'
                title='Transition to Full Service'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
              />
              <AboutItem
                image={fourth}
                date='July 2020'
                title='Phase Two Expansion'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
              />
            </div>
            <div className={style.lastItem}>Be Part Of Our Story!</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
