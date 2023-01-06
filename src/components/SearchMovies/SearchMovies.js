import React from 'react';
import Movies from '../Movies/Movies';

function SearchMovies(props) {
  return (
    <Movies openNav={props.openNav} loggedOn={props.loggedOn} classtype='search' key='search' onSearch={props.onSearch}/>
  );
}

export default SearchMovies;