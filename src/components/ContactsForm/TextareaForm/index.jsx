import React from 'react'
import cx from 'classnames';
import style from './TextAreaForm.module.sass';

function TextareaForm({ field, form: { touched, errors }, ...props }) {
  return (
    <textarea  {...field}
    {...props}
    className={cx(style.input, {
      [style.invalidInput]: touched[field.name] && errors[field.name],
      [style.validInput]: touched[field.name] && !errors[field.name],
    })}>
     
    </textarea>
  );
}


export default TextareaForm
