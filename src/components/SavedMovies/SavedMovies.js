import React from 'react';
import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return (
    <Movies 
      openNav={props.openNav} 
      classtype='saved' 
      key='saved' 
      loggedOn={props.loggedOn}
      onSearch={props.onSearch} 
      onShortToggle={props.onShortToggle} 
      addShorts={props.addShorts}
      movies={props.myMovies}
      myMovies={props.myMovies}
      isLoading={props.isLoading}
      onLikeClick={props.onLikeClick}
      checkLike={props.checkLike}
    />
  );
}

export default SavedMovies;