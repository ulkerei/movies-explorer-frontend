import './App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import SearchMovies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Page404 from '../Page404/Page404';
import Navigation from '../Navigation/Navigation';
import ErrorWindow from '../ErrorWindow/ErrorWindow';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import auth from '../../utils/Auth';
import myApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const querry = 'А';

  const [loggedOn, setLoggedOn] = useState(false);
  const [infoHeader, setInfoHeader] = useState('');
  const [infoText, setInfoText] = useState('');
  const [infoOpen, setInfoOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  function closeNav () { setNavOpen(false); }
  function openNav () { setNavOpen(true); }

  function handleRegisterSubmit(userData) {
    auth.register(userData)
      .then((userInfo) => {
        setInfoOpen(true);
        setInfoHeader('OK')
        setInfoText('Вы успешно зарегистрировались!');
        history.push ('/signin');
      })
      .catch((err) => {
        console.log(err);
        setInfoOpen(true);
        setInfoHeader('Ошибкa');
        setInfoText('Что-то пошло не так! Попробуйте ещё раз.');
      });
  }

  function handleLoginSubmit(userData) {
    auth.authorize(userData)
     .then((userInfo) => {
      if (userInfo.token) {
        setLoggedOn(true);
        localStorage.setItem('token', userInfo.token);

        history.push ('/movies');

      }
    })
    .catch((err) => {
      setInfoOpen(true);
      setInfoHeader('Ошибкa');
      setInfoText('Что-то пошло не так! Попробуйте ещё раз.');
    });
  }

  function onUpdateUser (user) {
    myApi.setUserInfo(user);
  }

  function onLogout () {
    history.push ('/signin');
    setLoggedOn(false);
    localStorage.setItem('token', '');
  }

  function onPopupClose () {
   setInfoOpen(false); 
  }

  function getMoviesDB () {
    console.log('search');
    moviesApi.getMovies()
      .then ((res) => {
//        const filtredMovies = res.filter(movie => {
//          const ru = movie.nameRU;
//          const en = movie.nameEN;
//          return (ru.includes(querry) || en.includes(querry)) 
//        });
//        setMovies(res);
//        console.log(movies);
        console.log({res})
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    if (token) {
      auth.validate({token})
        .then(res => {
          if (res) {
            setLoggedOn(true);
            setCurrentUser(res);
            history.push(path);
          }
        })
        .catch(err => console.log(err));
    }
  }, [history]);



  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main openNav={openNav} loggedOn={loggedOn} />
        </Route>
        <ProtectedRoute path='/movies' loggedOn={loggedOn}>
          <SearchMovies openNav={openNav} loggedOn={loggedOn} classtype='search' onSearch={getMoviesDB}/>
        </ProtectedRoute>
        <ProtectedRoute path='/saved-movies' loggedOn={loggedOn} >
          <SavedMovies openNav={openNav} loggedOn={loggedOn} classtype='saved' onSearch={getMoviesDB}/>
        </ProtectedRoute>
        <ProtectedRoute path='/profile' loggedOn={loggedOn}>
          <Profile openNav={openNav} loggedOn={loggedOn} onLogout={onLogout} onUpdate={onUpdateUser}/>
        </ProtectedRoute>
        <Route path='/signin'>
          <Login onSubmit={handleLoginSubmit} />
        </Route>
        <Route path='/signup'>
          <Register onSubmit={handleRegisterSubmit} />
        </Route>
        <Route path='/'>
          <Page404/>
        </Route>
      </Switch>
      <Navigation isOpen={navOpen} closeNav={closeNav}/>
      <ErrorWindow isOpen={infoOpen} status={infoHeader} message={infoText} onClose={onPopupClose} />
    </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
