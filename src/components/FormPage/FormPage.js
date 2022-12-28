import './FormPage.css';
import Logo from '../Logo/Logo'
import React from 'react';
import Button from '../Button/Button';

function FormPage(props) {
  return (
    <div className='formPage'>
      <Logo/>
      <h2 className='formPage__header'>{props.header}</h2>
      <form className="formPage__form">
        <>{props.children}</>
        <label htmlFor='email' className="formPage__label formPage__label_type_email">E-mail</label>
        <input
          type="text"
          required
          id="email"
          name="email"
          className="formPage__input formPage__input_type_email"
          placeholder="E-mail"
        />
        <label htmlFor='password' className="formPage__label formPage__label_type_password">Пароль</label>
        <input
          type="password"
          required
          id="password"
          name="password"
          className="formPage__input formPage__input_type_password"
          placeholder="Пароль"
        /> 
        <p className='formPage__label formPage__error'>Error?</p>
        <Button 
          type='submit' 
          styletype={`${props.submitButton} button_type_submit button_type_blue`}
          text={(props.submitButton === 'login') ? 'Войти' : 'Зарегистрироваться'}
        />
      </form>
      <div className='formPage__footer'>
        <p className='formPage__text'>{props.text}</p>
        <a href={`./${props.changeButton}`} 
          className='button button_type_back button_type_link'
          styletype={props.changeButton} 
        >{(props.changeButton === 'signin') ? 'Войти' : 'Регистрация'}</a>
      </div>

    </div>
  );
}

export default FormPage;
