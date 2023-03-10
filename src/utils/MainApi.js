class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._check(res))
  }

  setUserInfo(values) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: values.name,
        email: values.email
      })
    })
    .then(res => this._check(res))
  }

  getMyMovies () {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._check(res))
  }

  postNewMovie(values) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: values.country,
        director: values.director,
        duration: values.duration,
        year: values.year,
        description: values.description,
        image: values.image,
        thumbnail: values.thumbnail,
        trailerLink: values.trailerLink,
        movieId: values.movieId,
        nameRU: values.nameRU,
        nameEN: values.nameEN
      })
    })
    .then(res => this._check(res))
  }

  deleteOwnersMovie(movieId) {
      return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._check(res))
    }


  componentDidMount() {
    this.setUserInfo(this.getProfileInfo());
  }

  setHeaders(token) {
    this._headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
}

const myApi = new MainApi({
  baseUrl: 'https://api.movielib.nomoredomains.club',
});

export default myApi;