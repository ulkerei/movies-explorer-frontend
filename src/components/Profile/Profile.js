import './Profile.css';
import React from 'react';
import Header from '../Header/Header'
import Button from '../Button/Button';

function Profile(props) {
  return (
    <div className='profile'>
      <Header loggedOn='true' openNav={props.openNav}/>
      <form className='profile__form'>
        <h2 className='profile__header'>Привет, Пеоваг!</h2>
        <div className='profile__line'>
          <label htmlFor='name' className="profile__text profile__label profile__label_type_name">Имя</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="profile__text profile__input profile__input_type_name"
            defaultValue="Пеоваг"
          />
        </div>
        <div className='profile__line'>
          <label htmlFor='email' className="profile__text profile__label profile__label_type_email">E-mail</label>
          <input
            type="text"
            required
            id="email"
            name="email"
            className="profile__text profile__input profile__input_type_email"
            defaultValue="ereled@djks.com"
          />
        </div>
        <Button 
          type='submit' 
          styletype='button profile__button profile__button_type_edit'
          text='Редактировать'
        />
      </form>
      <Button 
          type='button' 
          styletype='button profile__button profile__button_type_exit'
          text='Выйти из аккаунта'
        />
    </div>
  );
}

export default Profile;


