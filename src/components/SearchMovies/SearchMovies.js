import React from 'react';
import Movies from '../Movies/Movies';

function SearchMovies(props) {
  return (
    <Movies 
      openNav={props.openNav} 
      loggedOn={props.loggedOn} 
      classtype='search' 
      onSearch={props.onSearch} 
      onShortToggle={props.onShortToggle} 
      addShorts={props.addShorts}
      movies={props.movies}
      myMovies={props.myMovies}
      isLoading={props.isLoading}
      onLikeClick={props.onLikeClick}
      checkLike={props.checkLike}
      getMore={props.getMore}
      isMore={props.isMore}
      onCardClick={props.onCardClick}
    />
  );
}

export default SearchMovies;