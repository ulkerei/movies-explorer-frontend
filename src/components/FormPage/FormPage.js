import './FormPage.css';
import Logo from '../Logo/Logo'
import React from 'react';
import { useState, useEffect } from 'react';
const validation = require('validator');

function FormPage(props) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(props.submitButton === 'login');
  const [isEmailValid, setIsEmailValid] = useState(Boolean(email));
  const [isPasswordValid, setIsPasswordValid] = useState(Boolean(password));
  const [isValid, setIsValid] = useState(isNameValid && isEmailValid && isPasswordValid);

  const [error, setError] = useState(isValid ? '' : 'Все поля обязательные!');

  function handleNameChange(e) {
    setName(e.target.value);
    const regex = /^[a-zа-яё♥ -]*$/i; //Можно я оставлю сердечко ♥
    const format = regex.test(e.target.value); 
    const minlength = e.target.value.length > 1;
    const maxlength = e.target.value.length < 31;
    const required = e.target.value.length !== 0;
    !format && setError('Неправильный формат имени');
    !minlength && setError('Слишком короткое имя');
    !maxlength && setError('Слишком длинное имя');
    !required && setError('Все поля обязательные!');
    setIsNameValid(format && minlength && maxlength);

  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    const required = e.target.value.length !== 0;
    const format = validation.isEmail(e.target.value);
    !format && setError('Неправильный формат e-mail');
    !required && setError('Все поля обязательные!');
    setIsEmailValid(format && required);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    const required = e.target.value.length !== 0;
    !required && setError('Все поля обязательные!');
    setIsPasswordValid(required);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      email,
      password,
      name,
    });
    setName('');
    setEmail('');
    setPassword('');
  } 

  useEffect(() => {
    setIsValid(isNameValid && isEmailValid && isPasswordValid);
    (isNameValid && isEmailValid && isPasswordValid) && setError('');
  }, [isNameValid, isEmailValid, isPasswordValid])

  return (
    <main className='formPage'>
      <Logo/>
      <h2 className='formPage__header'>{props.header}</h2>
      <form 
        className="formPage__form"           
        onSubmit={handleSubmit}
      >
        {(props.submitButton !== 'login') && <>
        <label htmlFor='name' className='formPage__label formPage__label_type_name'>Имя</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          className='formPage__input formPage__input_type_name'
          placeholder="Имя"
          value={name || ''}
          onChange={handleNameChange}
        />        
        </>}

        <label htmlFor='email' className="formPage__label formPage__label_type_email">E-mail</label>
        <input
          type="text"
          required
          id="email"
          name="email"
          className="formPage__input formPage__input_type_email"
          placeholder="E-mail"
          value={email || ''}
          onChange={handleEmailChange}
        />
        <label htmlFor='password' className="formPage__label formPage__label_type_password">Пароль</label>
        <input
          type="password"
          required
          id="password"
          name="password"
          className="formPage__input formPage__input_type_password"
          placeholder="Пароль"
          value={password || ''}
          autoComplete=''
          onChange={handlePasswordChange}
        /> 
        <p className='formPage__label formPage__error'>{error}</p>
        <button 
          type='submit' 
          disabled={!isValid} 
          className={ isValid ? `button button_type_${props.submitButton} button_type_submit button_type_blue` : `button button_type_${props.submitButton} button_type_submit button_type_blue button_type_blue_inactive` }
        >{(props.submitButton === 'login') ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
      <div className='formPage__footer'>
        <p className='formPage__text'>{props.text}</p>
        <a href={`./${props.changeButton}`} 
          className='button button_type_back button_type_link'
          styletype={props.changeButton} 
        >{(props.changeButton === 'signin') ? 'Войти' : 'Регистрация'}</a>
      </div>

    </main>
  );
}

export default FormPage;
