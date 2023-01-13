import './AboutMe.css';
import React from 'react';
import Heading from '../Heading/Heading';
import photo from '../../../images/photo.jpg'


function AboutMe() {
  return (
    <section className='about-me'>
      <Heading text='Студент' />
      <div className='about-me__main'>
        <img className='about-me__image' src={photo} alt='The Other' />
        <div className='about-me__container'>
          <h3 className='about-me__name'>Юлка</h3>
          <p className='about-me__status'>Другое</p>
          <p className='about-me__text'>Кандидат тех самых наук, учитель плохого и хорошего, читатель, писатель, вышиватель, иногда выживатель. Люблю лес, болота, холмы, старинные замки и ветряки. Вожу максимально экологичную "Газель".</p>
          <a className='about-me__link' target='_blank' rel='noreferrer' href='https://github.com/ulkerei'>Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;