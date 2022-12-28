import './AccountButton.css';
import account from '../../images/icon-account.svg'
import React from 'react';


function AccountButton(props) {
  return (
  <a className={`${props.className} account-button`} href='./profile' onClick={props.closeNav}>
    <img className='account-button__pic' src={account} alt='☺'/> Аккаунт
  </a>
  );
}

export default AccountButton;