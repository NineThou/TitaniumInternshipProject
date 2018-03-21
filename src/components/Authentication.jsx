import { Component } from 'react';
import { setIdToken, setAccessToken, userInfo } from '../utils/AuthService';

class Callback extends Component {
  componentDidMount() {
    setAccessToken();
    setIdToken();
    userInfo();
    window.location.href = '/';
  }
  render() {
    return null;
  }
}

export default Callback;
