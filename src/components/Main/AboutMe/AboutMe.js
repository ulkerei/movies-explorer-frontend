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
          <p className='about-me__text'>I'll paste it later... Filler: bla bla bla bla bla bla bla bla bla &ITY* rwwetwettwe  werwerwr  bla bla bla bla dsgaf bla bla sdgagsdgf sda  adfg asa ssdf gdfhkhgdra dshda rds agdfgdga agr agga agg bla bla bla bla bla bla</p>
          <a className='about-me__link' target='_blank' rel='noreferrer' href='https://github.com/ulkerei'>Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;