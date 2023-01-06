import './Profile.css';
import React from 'react';
import { useState, useContext } from 'react';
import Header from '../Header/Header'
import Button from '../Button/Button';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name,email);
    props.onUpdate({
      name,
      email
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]); 

  
  return (
    <section className='profile'>
      <Header loggedOn='true' openNav={props.openNav} setPath={props.setPath} currentPath='/profile'/>
      <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className='profile__header'>Привет, {currentUser.name}</h2>
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
        <button 
          type='submit' 
          className='button profile__button profile__button_type_edit'
          text=''
        >Редактировать</button>
      </form>
      <Button 
          type='button' 
          styletype='button profile__button profile__button_type_exit'
          text='Выйти из аккаунта'
          onClick={props.onLogout}
        />
    </section>
  );
}

export default Profile;


