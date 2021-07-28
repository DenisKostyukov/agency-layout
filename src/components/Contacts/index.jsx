import React from 'react';
import style from './Contacts.module.sass';
import ContactsForm from '../ContactsForm';
import BlockTitle from '../BlockTitle';
import BlockDescription from '../BlockDescription';
import '../../common/style/mainStyle.sass';
function Contacts () {
  return (
    <>
      <section className={style.contacts} id="contact">
        <div className='container'>
         <h1 className={style.title}>contacts us</h1>
          <BlockDescription description='Lorem ipsum dolor sit amet consectetur.' />
          <div className={style.contactsInner}>
            <ContactsForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
