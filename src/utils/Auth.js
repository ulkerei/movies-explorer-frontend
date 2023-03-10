class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  register(values) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": values.password,
        "name": values.name,
        "email": values.email 
      }),
      credentials: "include"
    })
    .then(res => this._check(res))
  }

  authorize(values) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "password": values.password,
      }),
      credentials: "include"
    })
    .then(res => this._check(res))
  }

  validate({token}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(res => this._check(res))
  }

}



const auth = new Auth({baseUrl: "https://api.movielib.nomoredomains.club"});

export default auth;