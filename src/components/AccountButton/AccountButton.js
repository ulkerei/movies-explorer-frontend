import './AccountButton.css';
import account from '../../images/icon-account.svg'
import React from 'react';
import { Link } from 'react-router-dom';

function AccountButton(props) {
  return (
  <Link className={`${props.className} account-button`} to='./profile' onClick={props.closeNav}>
    <img className='account-button__pic' src={account} alt='☺'/> Аккаунт
  </Link>
  );
}

export default AccountButton;