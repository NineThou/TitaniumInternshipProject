import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';


// components
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Events from './components/Events';

import './App.css';
import Posts from './components/posts/Posts';


/* eslint-disable react/jsx-filename-extension */
const router = (
  <BrowserRouter>
    <div>
      <Main />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/events" component={Events} />
      <Route path="/posts" component={Posts} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(router, global.document.getElementById('root'));
registerServiceWorker();
