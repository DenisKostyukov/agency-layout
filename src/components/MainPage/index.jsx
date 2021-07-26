import React from 'react';
import style from './MainPage.module.sass';
function MainPage () {
  return (
    <>
      <section className={style.mainPage}>
        <div className={style.container}>
          <p className={style.subHead}>Welcome To Our Studio!</p>
          <p className={style.head}>IT'S NICE TO MEET YOU</p>
          <a href='' className={style.mainPageLink}>
            tell me more
          </a>
        </div>
      </section>
    </>
  );
}

export default MainPage;
