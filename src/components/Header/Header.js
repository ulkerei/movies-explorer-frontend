import './Header.css';
import dashes from '../../images/icon-dashes.svg'
import React from 'react';
import Logo from '../Logo/Logo';
import AccountButton from '../AccountButton/AccountButton';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <Logo />
      {(props.loggedOn) ? (<>
      <div className='header__nav'>
        <Link className='header__link header__link_type_center' to='./movies' >Фильмы</Link>
        <Link className='header__link header__link_type_center' to='./saved-movies' >Сохранённые фильмы</Link>
      </div>
      <AccountButton className='header__link header__link_type_profile' closeNav={props.closeNav}/>
      <button
        type='button' 
        className='header__link header__link_type_menu'
        onClick={props.openNav}
      >
      <img className='header__dashes' src={dashes} alt='='/>
      </button>     
      </>) : (
      <div className='header__nav'>
      <Link className='header__link header__link_type_unsigned' to='./signup'>Регистрация</Link>
      <Link className='header__link header__link_type_unsigned' to='./signin'>Войти</Link>
    </div>
      )}
    </header>
  );
}

export default Header;