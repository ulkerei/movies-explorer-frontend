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
    <div className='movies'>
      <Header loggedOn='true' openNav={props.openNav}/>
      <SearchForm />
      <Preloader isLoading={false} />
      <MoviesCardList classtype={props.classtype} />
      {(props.classtype === 'search') ? <Button styletype='movies' text='Ещё' /> : <Filler text='' />}
      <Footer />
    </div>
  );
}

export default Movies;