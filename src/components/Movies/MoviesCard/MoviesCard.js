import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {

  const movie = props.movie;
  const name = movie.nameRU || movie.name;
  const time = movie.duration; 
  const trailer = movie.trailerLink;
  const image = movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image;

  const hours = Math.floor(time/60);
  const min = time - (hours*60);
  let duration = min + 'м';
  hours && (duration = hours + 'ч' + duration);

  function onCardLike (e) { 
    if (props.classtype === 'search') {
      e.target.classList.toggle('moviesCard__button_type_search_active');
      props.onLikeClick(movie);
    } else 
    {
      props.onLikeClick(movie._id);
    }
  }

  function onCardClick () {
    window.open(trailer);
  }

  return (
    <div className='moviesCard'>
      <div className='moviesCard__header'>
        <h3 className='moviesCard__name'>{name}</h3>
        <p className='moviesCard__duration'>{duration}</p>
        <button type='button' className={movie.isLiked ? `moviesCard__button moviesCard__button_type_${props.classtype} moviesCard__button_type_search_active` : `moviesCard__button moviesCard__button_type_${props.classtype}`} onClick={onCardLike} />
      </div>
      <img className='moviesCard__image' src={image} alt={name} onClick={onCardClick}/>
    </div>
  );
}

export default MoviesCard;