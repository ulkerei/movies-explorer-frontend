import './SavedMovies.css';
import React from 'react';
import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return (
    <Movies openNav={props.openNav} classtype='saved' key='saved' />
  );
}

export default SavedMovies;