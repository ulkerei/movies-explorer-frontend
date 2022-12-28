import './Heading.css';
import React from 'react';


function Heading(props) {
  return (
    <h2 className='main__heading'>{props.text}</h2>
  );
}

export default Heading;