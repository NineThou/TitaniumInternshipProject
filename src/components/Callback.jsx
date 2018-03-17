import { Component } from 'react';
import auth0 from 'auth0-js';

import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {
  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = '/';
    const webAuth = new auth0.WebAuth({
      domain: 'titaniumsoft.eu.auth0.com',
      clientID: 'tKcQVHZUBgG4ho6ZYoqDYSIreG0hC6x5',
    });

    // Parse the URL and extract the access_token
    webAuth.parseHash(window.location.hash, (err, authResult) => {
      if (err) {
        return console.log(err);
      }
      webAuth.client.userInfo(authResult.accessToken, (err, user) => {
        return console.log(user);
      });
    });
  }
  render() {
    return null;
  }
}

export default Callback;
