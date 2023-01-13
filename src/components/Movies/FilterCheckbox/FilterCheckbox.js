import './FilterCheckbox.css';
import React from 'react';

function Filtercheckbox(props) {
  function chechboxToggle () { 
    props.onShortToggle(props.classtype);
  }

  return (
    <button type='button' className='filtercheckbox' onClick={chechboxToggle}>
      <div className={ props.addShorts ? 'filtercheckbox__light filtercheckbox__light_checked' : 'filtercheckbox__light' } />Короткометражки
    </button>
  );
}

export default Filtercheckbox;