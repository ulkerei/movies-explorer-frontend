import './Register.css';
import React from 'react';
import FormPage from '../FormPage/FormPage';

function Register() {
  return (
    <FormPage
      header='Добро пожаловать!'
      submitButton='register'
      changeButton='signin'
      text='Уже зарегистрированы?'
    >
      <label htmlFor='name' className="formPage__label formPage__label_type_name">Имя</label>
      <input
        type="text"
        required
        id="name"
        name="name"
        className="formPage__input formPage__input_type_name"
      />
    </FormPage>
  );
}

export default Register;