import './SearchForm.css';
import React from 'react';
import Button from '../../Button/Button';
import Filtercheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <form className='search-form'>            
      <div className='search-form__container'>
        <input
          type='text'
          required
          id='search'
          name='search'
          className='search-form__input'
          defaultValue='Фильм'
        />
        <Button type='submit' styletype='blue search-form__button' text='Найти' />        
      </div>
      <Filtercheckbox />
    </form>
  );
}

export default SearchForm;