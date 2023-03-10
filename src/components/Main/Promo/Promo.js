import './Promo.css';
import React from 'react';
import globe from '../../../images/globe.svg'


function Promo() {
  return (
    <section className='promo'>
      <img className='promo__image' src={globe} alt='WEB WEB WEB' />
      <div className='promo__container'>
        <h1 className='promo__heading'>Учебный проект студента факультета Веб‑разработки.</h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <a href='#about' className='promo__link'>Узнать больше</a>
    </section>
  );
}

export default Promo;