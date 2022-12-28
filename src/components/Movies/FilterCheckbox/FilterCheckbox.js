import './FilterCheckbox.css';
import React from 'react';

function Filtercheckbox(props) {
  function chechboxToggle (e) { 
  const light = e.target.querySelector('.filtercheckbox__light');
  light ? light.classList.toggle('filtercheckbox__light_checked') : e.target.classList.toggle('filtercheckbox__light_checked');
  }
  return (
    <button type='button' className='filtercheckbox' onClick={chechboxToggle}>
      <div className='filtercheckbox__light' />Короткометражки
    </button>
  );
}

export default Filtercheckbox;