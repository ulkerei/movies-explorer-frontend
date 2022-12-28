import './MoviesCardList.css';
import React from 'react';
import getMovies from '../../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import Filler from '../Filler/Filler';

function MoviesCardList(props) {
  let movies = [];
  (props.classtype === 'search') ? movies = getMovies : movies = [getMovies[0], getMovies[4], getMovies[3]];
  if (movies.length) {
    return (
    <div className='moviesCardList'>
      {movies.map((movie) => (
        <MoviesCard name={movie.name} time={movie.time} pic={movie.pic} key={movie._id} classtype={props.classtype} />
      ))}
    </div>
  )  
  } else {
    return (
      <Filler text={(props.classtype === 'saved') ? 'В библиотеке пусто, ни зёрнышка' : 'По этому запросу ничего не нашлось'} />
    );
  }

}

export default MoviesCardList;