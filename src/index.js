import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter, Route } from "react-router-dom";

//components
import Main from './components/Main';
import Login  from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

const router = (
  <BrowserRouter>
    <div>
      <Main />
      <Route path='/home' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={SignUp}></Route>
    </div>
  </BrowserRouter>
  
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
