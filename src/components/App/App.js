/* eslint-disable react-hooks/exhaustive-deps */
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
import movApi from '../../utils/MoviesApi';

import { GREATER_WIDTH, SMALLER_WIDTH } from '../../utils/constants';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});

  const [startAmount, setStartAmount] = useState(checkStartAmount());
  const [addAmount, setAddAmount] = useState(checkAddAmount());

  const [filtredMovies, setFiltredMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const [myMovies, setMyMovies] = useState([]);
  const [myFiltredMovies, setMyFiltredMovies] = useState([]);
  const [myDisplayedMovies, setMyDisplayedMovies] = useState([]);

  const [isMore, setIsMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  
  const [addShorts, setAddShorts] = useState(() => {
    if (localStorage.getItem('addShorts')) {return Boolean(JSON.parse(localStorage.getItem('addShorts')))} else return false;
  });

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
      handleLoginSubmit(userData);
    })
    .catch((err) => {
      let text;
      if (err === 'Ошибка 409') {text = 'Пользователь с таким email уже ест (попкорн).';}
      errorAlert(err, text);
    });
  }

  function handleLoginSubmit(userData) {
    auth.authorize(userData)
    .then((userInfo) => {
      const token = userInfo.token;
      if (token) {
        auth.validate({token})
        .then(res => {
          localStorage.setItem('token', userInfo.token);
          setMyMovies(getMyMovies());
          getMyMovies();
          setLoggedOn(true);
          setCurrentUser(res);     
          history.push('/movies');  
        })
        .catch(err => errorAlert(err));
      }
    })
    .catch((err) => {
      errorAlert(err);
    });
  }

  function onLogout () {
    history.push ('/signin');
    setLoggedOn(false);
    setCurrentUser({});
    localStorage.clear();
    localStorage.setItem('token','');
    setFiltredMovies([]);
    setDisplayedMovies([]);
    getMyMovies([]);
    setMyFiltredMovies([]);
    setMyDisplayedMovies([]);
  }
  
  function onUpdateUser (user) {
    myApi.setUserInfo(user)
    .then((info) => {
      setCurrentUser(info);
      setInfoOpen(true);
      setInfoHeader('Данные изменены!');
      setInfoText(`${info.name} ${info.email}`);
    })
    .catch((err) => {
      setInfoOpen(true);
      setInfoHeader(err || 'Ошибка');
      setInfoText('Упс, что-то пошло не так. Возможно такой email уже занят.');
    })
  }

  function handelShortToggle(sourse) {
    localStorage.setItem('addShorts', !Boolean(JSON.parse(localStorage.getItem('addShorts'))));
    setAddShorts(!addShorts);
    sourse === 'search' ? setDisplayedMovies(displayMovies(checkShorts(filtredMovies, true), true)) : setMyDisplayedMovies(checkShorts(myFiltredMovies, true));
  }

  function checkShorts(movies, timed) {
    let check;
    timed ? check = !addShorts : check = addShorts;
    if (check && movies) {movies = movies.filter(movie => movie.duration <= 40);}
    return movies;
  }

  function filterMovies (movies, querry) {
    let filtredMovies = movies;
    if (querry) {
      querry = querry.toLowerCase();
      filtredMovies = movies.filter(movie => {
        const ru = movie.nameRU.toLowerCase();
        const en = movie.nameEN.toLowerCase();
        return (ru.includes(querry) || en.includes(querry)) 
      });
    } else {
      filtredMovies = [];
    }
    return filtredMovies;
  }

  function getMyMovies() {
    const querry = localStorage.getItem('querry');
    const token = localStorage.getItem('token');
    if (token) {
      setDisplayOptions();
      setAddShorts(Boolean(JSON.parse(localStorage.getItem('addShorts'))));
      auth.validate({token})
      .then((res) => {
        myApi.setHeaders(token);
        myApi.getMyMovies()
        .then((res) => {
          setMyMovies(res);
          if (querry) {
            setMyFiltredMovies(filterMovies(res, querry));
            setMyDisplayedMovies(checkShorts(filterMovies(res, querry)));
          } else {
            setMyDisplayedMovies([]);
          }
          return res;
        })
        .catch(err => errorAlert(err));
      })
    }
  }

  function getMyMoviesFiltred (querry) {
    const filtred = filterMovies(myMovies, querry);
    setMyFiltredMovies(filtred);
    setMyDisplayedMovies(checkShorts(filtred));
  }

  function setMovies(arr, querry) {
    const movies = filterMovies(arr, querry);
    setFiltredMovies(movies);
    setDisplayedMovies(displayMovies(checkShorts(movies)));
    setIsMore(checkShorts(movies).length > displayMovies(checkShorts(movies)).length);
  }

  function checkLikes(movies) {
    movies = movies.map((element) => { 
      if (myMovies) {
        myMovies.forEach((myMovie) => {
          if (element.id === myMovie.movieId) {
            element.ref = myMovie._id;
            element.isLiked = true;
          }
        })
      }    
      return element;
    });
    return movies;
  }

  function getMoviesDB(querryGot) {
    setIsLoading(true);
    setDisplayedMovies([]);
      let querry;
    querryGot ? querry = querryGot : querry = localStorage.getItem('querry');
    if (!localStorage.getItem('movies')) {
      movApi.getMovies()
        .then ((res) => {
          localStorage.setItem('movies', JSON.stringify(checkLikes(res)));
          setMovies(res, querry);
        })
        .catch(err => errorAlert(err))
        .finally(() => setIsLoading(false));
    } else {
        const movies = JSON.parse(localStorage.getItem('movies'));
        setMovies(movies, querry);
        setIsLoading(false);
    }
  }

  function displayMovies(movies, rewrite) {
    let amount;
    rewrite ? amount = Math.ceil(displayedMovies.length/addAmount)*addAmount : amount = startAmount;
    if (displayedMovies.length === 0 && movies.length !== 0) {amount = startAmount;}
    const mov = movies.filter((movie, i) => i < amount);
    setIsMore(movies.length > mov.length);
    return mov;
  }

  function getMore() {
    const lengthToBe = displayedMovies.length + addAmount;
    const movies = filtredMovies.filter((movie, i) => i < lengthToBe);
    setIsMore(filtredMovies.length > lengthToBe);
    setDisplayedMovies(movies);
  }

  function onLikeClick (movie) {
    const isLiked = movie.isLiked;
    if (!isLiked) {
      const newMovie = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        trailerLink: movie.trailerLink,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      };
      movie.isLiked = true;
      myApi.postNewMovie(newMovie)
      .then((resMovie) => {
        setMyMovies([resMovie, ...myMovies]);
        movie.ref = resMovie._id;
        let movies = JSON.parse(localStorage.getItem('movies'));
        movies = movies.map((element) => { 
          if (element.id === movie.id) {
            element.ref = resMovie._id;
            element.isLiked = true;
          }
          return element;
        });
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch(err => errorAlert(err));
    } else {
      movie.isLiked = false;
      deleteMovie (movie.ref);
    }
  }

  function deleteMovie (id) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    movies = movies.map((element) => { 
       if (element.ref === id) {
         element.isLiked = false;
       }
       return element;
     });
     localStorage.setItem('movies', JSON.stringify(movies));
    myApi.deleteOwnersMovie(id)
    .then(() => {
      setMyMovies(myMovies.filter((element) => element._id === id ? false : true));
      setMyFiltredMovies(myFiltredMovies.filter((element) => element._id === id ? false : true));
      setMyDisplayedMovies(myDisplayedMovies.filter((element) => element._id === id ? false : true));
    })
    .catch(err => errorAlert(err));
  }

  function checkStartAmount() {
    if (window.innerWidth > GREATER_WIDTH) {
      return 12;
    } else if (window.innerWidth < SMALLER_WIDTH) {
      return 5;
    } else {
      return 8;
    }
  }

  function checkAddAmount() {
    return (window.innerWidth > GREATER_WIDTH) ? 3 : 2
  }

  function setDisplayOptions() {
    setStartAmount(checkStartAmount());
    setAddAmount(checkAddAmount());
  }

  function errorAlert(err, text) {
    setInfoOpen(true);
    setInfoHeader(err || 'Ошибка');
    setInfoText(text || 'Упс, что-то пошло не так. Попробуйте ещё раз!');
  }

  function onPopupClose () {
    setInfoOpen(false); 
  }

  useEffect(() => {
    window.addEventListener('resize', setDisplayOptions);
    return () => {window.removeEventListener('resize', setDisplayOptions);}
  })
  
  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    const querry = localStorage.getItem('querry');
    if (token) {
      setDisplayOptions();
      setAddShorts(Boolean(JSON.parse(localStorage.getItem('addShorts'))));
      auth.validate({token})
      .then(res => {
        getMyMovies();
        setLoggedOn(true);
        setCurrentUser(res);       
        if (localStorage.getItem('movies') && querry) {            
          setMovies(JSON.parse(localStorage.getItem('movies')), querry);
        }
        history.push(path);
      })
      .catch(err => errorAlert(err));
    }
  }, [history, location.pathname]);

  useEffect(() => {
    setMyFiltredMovies(filterMovies(myMovies, localStorage.getItem('querry')));
    setMyDisplayedMovies(checkShorts(filterMovies(myMovies, localStorage.getItem('querry'))));
    if (!localStorage.getItem('movies')) {
      getMoviesDB();
    }
  },[localStorage.getItem('querry'), addShorts]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main openNav={openNav} loggedOn={loggedOn} />
          </Route>
          <ProtectedRoute path='/movies' loggedOn={loggedOn}>
            <SearchMovies 
              openNav={openNav} 
              loggedOn={loggedOn} 
              classtype='search' 
              onSearch={getMoviesDB} 
              onShortToggle={handelShortToggle} 
              addShorts={addShorts} 
              movies={displayedMovies}
              myMovies={myMovies}
              isLoading={isLoading}
              onLikeClick={onLikeClick}
              getMore={getMore}
              isMore={isMore}
            />
          </ProtectedRoute>
          <ProtectedRoute path='/saved-movies' loggedOn={loggedOn} >
            <SavedMovies 
              openNav={openNav} 
              loggedOn={loggedOn} 
              classtype='saved' 
              onSearch={getMyMoviesFiltred}
              onShortToggle={handelShortToggle} 
              addShorts={addShorts} 
              movies={myDisplayedMovies}
              myMovies={myDisplayedMovies}
              isLoading={isLoading}
              onLikeClick={deleteMovie}
            />
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
