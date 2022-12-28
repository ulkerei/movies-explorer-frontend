import './Filler.css';
import React from 'react';


function Filler(props) {
  return (
    <p className='filler'>{props.text}</p>
  );
}

export default Filler;