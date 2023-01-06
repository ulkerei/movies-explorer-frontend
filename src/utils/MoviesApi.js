class MoviesApi {
  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => this._check(res))
  }

}

const moviesApi = new MoviesApi();

export default moviesApi;