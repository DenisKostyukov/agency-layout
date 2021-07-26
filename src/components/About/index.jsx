import React from 'react';
import BlockDescription from '../BlockDescription';
import BlockTitle from '../BlockTitle';
import '../../common/style/mainStyle.sass';
import style from './About.module.sass';
function About () {
  return (
    <>
      <section className={style.about}>
        <div className='container'>
          <div className={style.aboutInner}>
            <BlockTitle title='about' />
            <BlockDescription descrition="Lorem ipsum dolor sit amet consectetur." />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
