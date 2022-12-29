import './Header.css';
import dashes from '../../images/icon-dashes.svg'
import React from 'react';
import Logo from '../Logo/Logo';
import AccountButton from '../AccountButton/AccountButton';

function Header(props) {
  return (
    <header className='header'>
      <Logo />
      {(props.loggedOn) ? (<>
      <div className='header__nav'>
        <a className='header__link header__link_type_center' href='./movies'>Фильмы</a>
        <a className='header__link header__link_type_center' href='./saved-movies'>Сохранённые фильмы</a>
      </div>
      <AccountButton className='header__link header__link_type_profile' />
      <button
        type='button' 
        className='header__link header__link_type_menu'
        onClick={props.openNav}
      >
      <img className='header__dashes' src={dashes} alt='='/>
      </button>     
      </>) : (
      <div className='header__nav'>
      <a className='header__link header__link_type_unsigned' href='./signup'>Регистрация</a>
      <a className='header__link header__link_type_unsigned' href='./signin'>Войти</a>
    </div>
      )}
    </header>
  );
}

export default Header;