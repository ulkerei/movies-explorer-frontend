import logo from '../../images/logo.svg'
import './Logo.css';
import React from 'react';

function Logo() {
  return (
    <a href='./' className='logo'>
      <img className='logo__image' src={logo} alt='logo'/>
    </a>
  );
}

export default Logo;


