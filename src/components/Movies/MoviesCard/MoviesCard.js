import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const hours = Math.floor(props.time/60);
  const min = props.time - (hours*60);
  let duration = min + 'м';
  hours && (duration = hours + 'ч' + duration);
  function onCardLike (e) { (props.classtype === 'search') && e.target.classList.toggle('moviesCard__button_type_search_active'); }

  return (
    <div className='moviesCard'>
      <div className='moviesCard__header'>
        <h3 className='moviesCard__name'>{props.name}</h3>
        <p className='moviesCard__duration'>{duration}</p>
        <button type='button' className={`moviesCard__button moviesCard__button_type_${props.classtype}`} onClick={onCardLike} />
      </div>
      <img className='moviesCard__image' src={props.pic} alt={props.name} />
    </div>
  );
}

export default MoviesCard;