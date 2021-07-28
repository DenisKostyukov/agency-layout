import React from 'react';
import { Link } from 'react-scroll';
import style from './MainPage.module.sass';
function MainPage () {
  return (
    <>
      <section className={style.mainPage} id='mainPage'>
        <div className={style.container}>
          <p className={style.subHead}>Welcome To Our Studio!</p>
          <p className={style.head}>IT'S NICE TO MEET YOU</p>
          <Link
            to='services'
            spy={true}
            smooth={true}
            duration={500}
            className={style.mainPageLink}
          >
            tell me more
          </Link>
        </div>
      </section>
    </>
  );
}

export default MainPage;
