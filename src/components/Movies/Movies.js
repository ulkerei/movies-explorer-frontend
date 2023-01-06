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
    <section className='movies'>
      <Header loggedOn={props.loggedOn} openNav={props.openNav} />
      <SearchForm onSearch={props.onSearch}/>
      <Preloader isLoading={false} />
      <MoviesCardList classtype={props.classtype} />
      {(props.classtype === 'search') ? <Button styletype='movies' text='Ещё' /> : <Filler text='' />}
      <Footer />
    </section>
  );
}

export default Movies;