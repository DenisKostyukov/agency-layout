import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import style from './Footer.module.sass';
import '../../common/style/mainStyle.sass';
function Footer () {
  return (
    <>
      <section className={style.footer}>
        <div className={style.container}>
          <div className={style.footerInner}>
            <p className={style.copyright}>Copyright © Your Website 2021</p>
            <div className={style.socialsList}>
              <a href='#!' className={style.socialLink}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#!' className={style.socialLink}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='#!' className={style.socialLink}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className={style.licenseWrapper}>
              <a href="#!" className={style.licenseLink}>Privacy Policy</a>
              <a href="#!" className={style.licenseLink}>Terms of Use</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
