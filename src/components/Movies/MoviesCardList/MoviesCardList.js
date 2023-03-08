import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Filler from '../Filler/Filler';

function MoviesCardList(props) {
  let movies;
  (props.classtype === 'search') ? movies = props.movies : movies = props.myMovies;
  if (movies.length) {
    return (
    <div className='moviesCardList'>
      {movies.map((movie) => (
        <MoviesCard 
          movie={movie} 
          key={movie.id || movie._id} 
          classtype={props.classtype} 
          onLikeClick={props.onLikeClick} 
          myMovies={props.myMovies}
          onCardClick={props.onCardClick}
        />
      ))}
    </div>
  )  
  } else {
    return ( !props.isLoading &&
      <Filler text={(props.classtype === 'saved') ? 'В библиотеке пусто, ни зёрнышка' : 'Ничего не найдено'} />
    );
  }

}

export default MoviesCardList;