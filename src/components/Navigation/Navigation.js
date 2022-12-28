import './Navigation.css';
import React from 'react';
import iconX from '../../images/icon-x.svg';
import AccountButton from '../AccountButton/AccountButton';


function Navigation(props) {
  return (
    <div className={(props.isOpen) ? ('navigation') : ('navigation navigation_hidden')}>
      <div className='navigation__container'>
        <button className='navigation__close' onClick={props.closeNav}>
          <img className='navigation__x' src={iconX} alt='X'/>
        </button>
        <nav className='navigation__block'>
          <a className='navigation__link' href='./' >Главная</a>
          <a className='navigation__link' href='./movies'>Фильмы</a>
          <a className='navigation__link' href='./saved-movies'>Сохранённые фильмы</a>
        </nav>
        <AccountButton className='navigation__profile' />
      </div>
    </div>
  );
}

export default Navigation;
