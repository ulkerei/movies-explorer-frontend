import './SearchForm.css';
import React from 'react';
import { useState } from 'react';
import Filtercheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) { 
  const [error, setError] = useState(localStorage.getItem('querry') ? '' : 'Без запроса и искать нечего...');
  const [querry, setQuerry] = useState(localStorage.getItem('querry') || '');
  const [isValid, setIsValid] = useState(Boolean(querry));
  
  function handleQuerryChange(e) {
    setQuerry(e.target.value);
    validate(e.target.value);
  }

  function validate(value) {
    const required = (value.length !== 0);
    if (required) {
      setIsValid(true);
      setError('');
    } else {
      setIsValid(false);
      setError('Для поиска нужен какой-либо запрос');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('querry', querry);
    props.classtype === 'search' ? props.onSearch(querry) : props.onSearch(querry);
  } 

  return (
    <form className='search-form' onSubmit={handleSubmit}>            
      <div className='search-form__container'>
        <input
          type='text'
          required
          id='search'
          name='search'
          className='search-form__input'
          placeholder='Название фильма или его часть'
          value={querry}
          autoComplete=''
          onChange={handleQuerryChange}
        />
        <button type='submit' disabled={!isValid} className={ isValid ? 'button button_type_blue search-form__button' : 'button button_type_blue search-form__button button_type_blue_inactive' }>Найти</button>   
      </div>
      <p className='search-form__error'>{error}</p>
      <Filtercheckbox onShortToggle={props.onShortToggle} addShorts={props.addShorts} classtype={props.classtype}/>
    </form>
  );
}

export default SearchForm;