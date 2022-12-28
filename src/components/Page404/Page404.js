import './Page404.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import Popcorn from '../Popcorn/Popcorn';

function Page404() {
  const history = useHistory();
  return (
    <div className='page404'>
      <h2 className='page404__header'>404</h2>
      <p className='page404__text'>Страница не найдена</p>
      <Button styletype='back' text='Назад' onClick={() => history.goBack()}/>
      <Popcorn />
    </div>
  );
}

export default Page404;