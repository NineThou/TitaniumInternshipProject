import { Component } from 'react';
import { setIdToken, setAccessToken, userInfo } from '../utils/AuthService';

class Callback extends Component {
  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = '/';
    userInfo();
  }
  render() {
    return null;
  }
}

export default Callback;
