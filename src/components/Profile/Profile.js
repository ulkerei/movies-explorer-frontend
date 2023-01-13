import './Profile.css';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header'
import Button from '../Button/Button';
import CurrentUserContext from '../../contexts/CurrentUserContext';
const validation = require('validator');

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const [error, setError] = useState('');
  
  function handleNameChange(e) {
    setName(e.target.value);
    const regex = /^[a-zа-яё♥ -]*$/i; //Можно же я оставлю тут сердечко)
    const format = regex.test(e.target.value); 
    const minlength = e.target.value.length > 1;
    const maxlength = e.target.value.length < 31;
    !format && setError('Неправильный формат имени');
    !minlength && setError('Слишком короткое имя');
    !maxlength && setError('Слишком длинное имя');
    setIsNameValid(format && minlength && maxlength);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
    const format = validation.isEmail(e.target.value);
    !format && setError('Неправильный формат e-mail');
    setIsEmailValid(format);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdate({
      name,
      email
    });
    setName(currentUser.name);
    setEmail(currentUser.email);
  } 

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]); 

  useEffect(() => {
    setIsValid((isNameValid && isEmailValid) && ((name !== currentUser.name) || (email !== currentUser.email)));
    (isNameValid && isEmailValid) && setError('');
  }, [isNameValid, isEmailValid, name, currentUser, email])


  return (
    <main className='profile'>
      <Header loggedOn='true' openNav={props.openNav} setPath={props.setPath} currentPath='/profile'/>
      <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className='profile__header'>Привет, {currentUser.name}!</h2>
        <div className='profile__line'>
          <label htmlFor='name' className="profile__text profile__label profile__label_type_name">Имя</label>
          <input
            type="text"
            minLength="2"
            maxLength="30"
            required
            id="name"
            name="name"
            className="profile__text profile__input profile__input_type_name"
            placeholder='Введите имя'
            value={name || ''}
            onChange={handleNameChange}
          />
        </div>
        <div className='profile__line'>
          <label htmlFor='email' className="profile__text profile__label profile__label_type_email">E-mail</label>
          <input
            type="email"
            minLength="2"
            maxLength="30"
            required
            id="email"
            name="email"
            className="profile__text profile__input profile__input_type_email"
            placeholder='Введите e-mail'
            value={email || ''}
            onChange={handleEmailChange}
          />
        </div>
        <p className='profile__error'>{error}</p>
        <button 
          type='submit'
          disabled={!isValid} 
          className={ isValid ? 'button profile__button profile__button_type_edit' : 'button profile__button profile__button_type_edit profile__button_inactive' }
          text=''
        >Редактировать</button>
      </form>
      <Button 
          type='button' 
          styletype='button profile__button profile__button_type_exit'
          text='Выйти из аккаунта'
          onClick={props.onLogout}
        />
    </main>
  );
}

export default Profile;


