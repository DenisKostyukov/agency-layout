import React from 'react';
import BlockDescription from '../BlockDescription';
import BlockTitle from '../BlockTitle';
import style from './Portfolio.module.sass';
import threads from './images/1.jpg';
import explore from './images/2.jpg';
import finish from './images/3.jpg';
import lines from './images/4.jpg';
import southwest from './images/5.jpg';
import window from './images/6.jpg';
import PortfolioItem from './PortfolioItem';
import '../../common/style/mainStyle.sass';
function Portfolio () {
  return (
    <>
      <section className={style.portfolio}>
        <div className='container'>
          <div className={style.portfolioInner}>
            <BlockTitle title="portfolio"/>
            <BlockDescription descrition="Lorem ipsum dolor sit amet consectetur."/>
            <div className={style.portfolioList}>
              <PortfolioItem image={threads} title="threads" description="illustration"/>
              <PortfolioItem image={explore} title="explore" description="graphic design"/>
              <PortfolioItem image={finish} title="finish" description="identity"/>
              <PortfolioItem image={lines} title="lines" description="branding"/>
              <PortfolioItem image={southwest} title="southwest" description="website design"/>
              <PortfolioItem image={window} title="window" description="photography"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
