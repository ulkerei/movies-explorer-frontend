import React from 'react';
import Movies from '../Movies/Movies';

function SearchMovies(props) {
  return (
    <Movies openNav={props.openNav} classtype='search' key='search' />
  );
}

export default SearchMovies;