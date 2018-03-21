/* eslint-disable */
import decode from 'jwt-decode';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'tKcQVHZUBgG4ho6ZYoqDYSIreG0hC6x5';
const CLIENT_DOMAIN = 'titaniumsoft.eu.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid profile cme:user cme:admin';
const AUDIENCE = 'https://titaniumsoft.eu.auth0.com/api/v2/';

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  localStorage.removeItem('userInfo');
  window.location.href = '/';
}

export function userInfo () {
  auth.parseHash({ hash: window.location.hash }, (err, authResult) => {
    if (err) return console.error(`parseHash error: ${error}`);
    console.log(`authResult: ${authResult}`);
    auth.client.userInfo(authResult.accessToken, function (err, user) {
      if(err) return console.error(`Info parsing error: ${JSON.stringify(err)}`);
      localStorage.setItem('userInfo', JSON.stringify(user));
      return console.info(`User information: ${JSON.stringify(user)}`);
    });
  });
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}