import React from 'react';
import FormPage from '../FormPage/FormPage';

function Register(props) {
  return (
    <FormPage
      header='Добро пожаловать!'
      submitButton='register'
      changeButton='signin'
      text='Уже зарегистрированы?'
      onSubmit={props.onSubmit}
    >
    </FormPage>
  );
}

export default Register;