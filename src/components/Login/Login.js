import React from 'react';
import FormPage from '../FormPage/FormPage';

function Login() {
  return (
    <FormPage
      header='Рады видеть!'
      submitButton='login'
      changeButton='signup'
      text='Ещё не зарегистрированы?'
    />
  );
}

export default Login;