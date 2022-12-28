import './Popcorn.css';
import React from 'react';
import popleft from '../../images/pop1.png';
import popright from '../../images/pop2.png';

function Popcorn() {
  return (
    <>
      <div className='popcorn popcorn_type_left'>
        <img className='popcorn-image popcorn-image_type_left' src={popleft} alt='@'/>
      </div>
      <div className='popcorn popcorn_type_right'>
        <img className='popcorn-image popcorn-image_type_right' src={popright} alt='@'/>
      </div>
    </>
  );
}

export default Popcorn;