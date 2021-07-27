import * as yup from 'yup';
export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-ZА-ЯЁ][a-zа-яё]{0,1477}$/, 'First letter must be upper')
  .required("Field can't be empty");
export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required('Field cannot be empty');
export const PHONE_SCHEMA = yup
  .string()
  .matches(/^[0-9\-\+]{9,15}$/, 'Phone is not valid')
  .required("Field can't be empty");
export const MESSAGE_SCHEMA = yup
  .string()
  .min(10, 'Min 10 symbols')
  .required("Field can't be empty");

  export const CONTACT_SCHEMA = yup.object({
    name: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    phone: PHONE_SCHEMA,
    message: MESSAGE_SCHEMA
  });