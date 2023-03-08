import './Movies.css';
import React from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Filler from './Filler/Filler';

function Movies(props) {
  return (
    <main className='movies'>
      <Header loggedOn={props.loggedOn} openNav={props.openNav} />
      <SearchForm onSearch={props.onSearch} onShortToggle={props.onShortToggle} addShorts={props.addShorts} classtype={props.classtype}/>
      <Preloader isLoading={props.isLoading} />
      <MoviesCardList 
        classtype={props.classtype} 
        movies={props.movies}
        myMovies={props.myMovies} 
        isLoading={props.isLoading} 
        onLikeClick={props.onLikeClick}
        onCardClick={props.onCardClick}
      />
      {(props.classtype === 'search' && props.isMore) ? <Button styletype='movies' text='Ещё' onClick={props.getMore}/> : <Filler text='' />}
      <Footer />
    </main>
  );
}

export default Movies;