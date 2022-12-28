import './AboutProject.css';
import React from 'react';
import Heading from '../Heading/Heading';

function AboutProject() {
  return (
    <div className='about-project' id='about'>
      <Heading text='О проекте' />
      <ul className='about-project__info'>
        <li className='about-project__article'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__article'>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className='about-project__timeline'>
        <li className='about-project__time-text'>1 неделя</li>
        <li className='about-project__time-text'>4 недели</li>
        <li className='about-project__time-text'>Back-end</li>
        <li className='about-project__time-text'>Front-end</li>
      </ul>
    </div>
  );
}

export default AboutProject;