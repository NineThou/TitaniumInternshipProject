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
import Events from './components/Events/Events';
import Posts from './components/posts/Posts';
import Users from './components/Users';

// css
import './styles/App.css';


/* eslint-disable react/jsx-filename-extension */
const router = (
  <BrowserRouter>
    <div>
      <Main />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/events" component={Events} />
      <Route path="/posts" component={Posts} />
      <Route path="/users" component={Users} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(router, global.document.getElementById('root'));
registerServiceWorker();
