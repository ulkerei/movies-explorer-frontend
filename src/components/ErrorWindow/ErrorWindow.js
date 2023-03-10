import './ErrorWindow.css';
import React from 'react';
import Popcorn from '../Popcorn/Popcorn';

function ErrorWindow(props) {
  return (
    <section className={(props.isOpen) ? 'error' : 'error error_hidden'} onClick={props.onClose}>
      <div className='error__window'>
        <h2 className='error__status'>{props.status}</h2>
        <p className='error__message'>{props.message}</p>
        <Popcorn />
      </div>
    </section>
  );
}

export default ErrorWindow;