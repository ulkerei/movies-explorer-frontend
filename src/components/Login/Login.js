import React from 'react';
import FormPage from '../FormPage/FormPage';

function Login(props) {
  return (
    <FormPage
      header='Рады видеть!'
      submitButton='login'
      changeButton='signup'
      text='Ещё не зарегистрированы?'
      onSubmit={props.onSubmit}
    />
  );
}

export default Login;