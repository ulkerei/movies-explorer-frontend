import './Footer.css';
import React from 'react';

function Footer(props) {
  return (
    <div className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <nav className='footer__nav'>
        <p className='footer__copy'>©2022 Юлка Торшенко</p>
        <a className='footer__link' target='_blank' rel='noreferrer' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
        <a className='footer__link' target='_blank' rel='noreferrer' href='https://github.com/ulkerei'>Github</a>
      </nav>
    </div>
  );
}

export default Footer;