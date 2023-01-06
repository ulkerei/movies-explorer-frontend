import './FormPage.css';
import Logo from '../Logo/Logo'
import React from 'react';
import { useState } from 'react';

function FormPage(props) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
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

  return (
    <section className='formPage'>
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
          onChange={handlePasswordChange}
        /> 
        <p className='formPage__label formPage__error'>Error?</p>
        <button 
          type='submit' 
          className={`button button_type_${props.submitButton} button_type_submit button_type_blue`}
        >{(props.submitButton === 'login') ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
      <div className='formPage__footer'>
        <p className='formPage__text'>{props.text}</p>
        <a href={`./${props.changeButton}`} 
          className='button button_type_back button_type_link'
          styletype={props.changeButton} 
        >{(props.changeButton === 'signin') ? 'Войти' : 'Регистрация'}</a>
      </div>

    </section>
  );
}

export default FormPage;
