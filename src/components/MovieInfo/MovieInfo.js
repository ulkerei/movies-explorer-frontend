import './MovieInfo.css';
import React from 'react';
import Iframe from 'react-iframe';

function MovieInfo(props) {
  const hours = Math.floor(props.movie.duration/60);
  const min = props.movie.duration - (hours*60);
  let duration = min + 'м';
  hours && (duration = hours + 'ч' + duration);
  const trailer = props.movie.trailerLink.replace('watch?v=', 'embed/');

  return (
    <section className={(props.isOpen) ? 'movie-info' : 'movie-info movie-info_hidden'}>
      <div className='movie-info__window'>
        <button className='movie-info__close' onClick={props.onClose}>X</button>
        <h2 className='movie-info__title'>{(props.movie.nameRU === props.movie.nameEN) ? props.movie.nameRU : `${props.movie.nameRU} (${props.movie.nameEN})`}</h2>
        <div className='movie-info__header'>
          <img className='movie-info__image' src={props.movie.image.url ? `https://api.nomoreparties.co/${props.movie.image.url}` : props.movie.image} alt={props.movie.nameEN}/>
          <div className='movie-info__meta-container'>

            <div className='movie-info__texts'>
              <p className='movie-info__text'>{props.movie.country}</p>
              <p className='movie-info__text'>{props.movie.year}&nbsp;г.</p>
              <p className='movie-info__text'>{duration}</p>
              <p className='movie-info__text'>Режиссёр: {props.movie.director}</p>
            </div>
          </div>
        </div>
        <p className='movie-info__text movie-info__text_about'>{props.movie.description}</p>
        <Iframe className='movie-info__trailer' title={props.movie.nameEN} url={trailer} frameBorder="1" />
      </div>
    </section>
  );
}

export default MovieInfo;