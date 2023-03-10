import './Navigation.css';
import React from 'react';
import iconX from '../../images/icon-x.svg';
import AccountButton from '../AccountButton/AccountButton';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <section className={(props.isOpen) ? ('navigation') : ('navigation navigation_hidden')}>
      <div className='navigation__container'>
        <button className='navigation__close' onClick={props.closeNav}>
          <img className='navigation__x' src={iconX} alt='X'/>
        </button>
        <nav className='navigation__block'>
          <Link className='navigation__link' to='./' >Главная</Link>
          <Link className='navigation__link' to='./movies'>Фильмы</Link>
          <Link className='navigation__link' to='./saved-movies'>Сохранённые фильмы</Link>
        </nav>
        <AccountButton className='navigation__profile' closeNav={props.closeNav}/>
      </div>
    </section>
  );
}

export default Navigation;
