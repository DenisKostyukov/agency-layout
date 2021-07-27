import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CONTACT_SCHEMA } from '../../utils/validationSchema';
import InputForm from './InputForm';
import TextareaForm from './TextareaForm';
import style from './ContactsForm.module.sass';
const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};
function ContactsForm () {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CONTACT_SCHEMA}
        onSubmit={actions => {
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {formikProps => {
          return (
            <div className={style.formWrapper}>
              <Form className={style.form}>
                <div className={style.allFieldsWrapper}>
                  <div className={style.fieldWrapper}>
                    <Field
                      type='text'
                      component={InputForm}
                      name='name'
                      placeholder='Your Name*'
                    />
                    <ErrorMessage
                      className={style.error}
                      name='name'
                      component='div'
                    />
                    <Field
                      type='text'
                      component={InputForm}
                      name='email'
                      placeholder='Your Email*'
                    />
                    <ErrorMessage
                      className={style.error}
                      name='email'
                      component='div'
                    />
                    <Field
                      type='text'
                      component={InputForm}
                      name='phone'
                      placeholder='Your Phone*'
                    />
                    <ErrorMessage
                      className={style.error}
                      name='phone'
                      component='div'
                    />
                  </div>
                  <div className={style.textareaWrapper}>
                    <Field
                      component={TextareaForm}
                      name='message'
                      placeholder='Your Message*'
                    />
                    <ErrorMessage
                      className={style.error}
                      name='message'
                      component='div'
                    />
                    </div>
                </div>
                <Field
                  className={style.submitBtn}
                  type='submit'
                  value='send message'
                />
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default ContactsForm;
