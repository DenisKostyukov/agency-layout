import React from 'react';
import Partner from './Partner';
import style from './Partners.module.sass';

import facebook from './images/facebook.svg';
import google from './images/google.svg';
import ibm from './images/ibm.svg';
import microsoft from './images/microsoft.svg';
import '../../common/style/mainStyle.sass';
function Partners () {
  return (
    <>
      <section className={style.partners}>
        <div className='container'>
          <div className={style.partnersInner}>
            <ul className={style.partnersList}>
              <Partner image={facebook} />
              <Partner image={google} />
              <Partner image={microsoft} />
              <Partner image={ibm} />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
