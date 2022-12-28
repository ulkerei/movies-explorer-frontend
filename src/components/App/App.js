import './App.css';

import React from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SearchMovies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Page404 from '../Page404/Page404';
import Navigation from '../Navigation/Navigation';
import ErrorWindow from '../ErrorWindow/ErrorWindow';


function App() {
  const [navOpen, setNavOpen] = useState(false);
  function closeNav () { setNavOpen(false); }
  function openNav () { setNavOpen(true); }

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main openNav={openNav} loggedOn={false} />
        </Route>
        <Route path='/movies'>
          <SearchMovies openNav={openNav} loggedOn={true} classtype='search' />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies openNav={openNav} loggedOn={true} classtype='saved' />
        </Route>
        <Route path='/profile'>
          <Profile openNav={openNav} />
        </Route>
        <Route path='/signin'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Register/>
        </Route>
        <Route path='/'>
          <Page404/>
        </Route>
      </Switch>
      <Navigation isOpen={navOpen} closeNav={closeNav}/>
      <ErrorWindow isOpen={false} status='500' message='Oops! I did it again...' />
    </div>
  );
}


export default App;
