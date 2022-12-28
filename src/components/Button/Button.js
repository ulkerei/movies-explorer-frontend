import './Button.css';
import React from 'react';


function Button(props) {
  return (
    <button className={`button button_type_${props.styletype}`} type="button" onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;