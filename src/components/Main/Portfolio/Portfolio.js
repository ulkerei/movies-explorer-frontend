import './Portfolio.css';
import React from 'react';


function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <nav className='portfolio__nav'>
        <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://ulkerei.github.io/how-to-learn/'><p className='portfolio__text'>Статичный сайт</p><p className='portfolio__text'>↗</p></a>
        <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://ulkerei.github.io/russian-travel/'><p className='portfolio__text'>Адаптивный сайт</p><p className='portfolio__text'>↗</p></a>
        <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://mestogram.nomoredomains.club/signin'><p className='portfolio__text'>Одностраничное приложение</p><p className='portfolio__text'>↗</p></a>
      </nav>
    </section>
  );
}

export default Portfolio;