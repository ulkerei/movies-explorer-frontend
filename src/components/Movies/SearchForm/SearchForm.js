import './SearchForm.css';
import React from 'react';
import Button from '../../Button/Button';
import Filtercheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <form className='search-form' onSubmit={props.onSearch}>            
      <div className='search-form__container'>
        <input
          type='text'
          required
          id='search'
          name='search'
          className='search-form__input'
          defaultValue='Фильм'
        />
        <button type='submit' className='button button_type_blue search-form__button'>Найти</button>   
      </div>
      <Filtercheckbox />
    </form>
  );
}

export default SearchForm;