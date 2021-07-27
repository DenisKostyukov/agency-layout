import React from 'react';
import BlockTitle from '../BlockTitle';
import BlockDescription from '../BlockDescription';
import '../../common/style/mainStyle.sass';
import style from './Team.module.sass';

import parveen from './images/1.jpg';
import diana from './images/2.jpg';
import larry from './images/3.jpg';
import TeamItem from './TeamItem';
function Team () {
  return (
    <>
      <section classname={style.team}>
        <div className='container'>
          <div className={style.teamInner}>
            <BlockTitle title='our amazing team' />
            <BlockDescription description='Lorem ipsum dolor sit amet consectetur.' />
            <div className={style.teamList}>
              <TeamItem
                image={parveen}
                name='parveen anand'
                post='lead designer'
              />
              <TeamItem
                image={diana}
                name='diana patersen'
                post='lead marketer'
              />
              <TeamItem
                image={larry}
                name='larry parker'
                post='lead developer'
              />
            </div>
            <p className={style.teamDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
