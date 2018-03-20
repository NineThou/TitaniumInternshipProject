import React from 'react';
import { Provider } from 'react-redux';
// router dependencies
import { BrowserRouter, Route } from 'react-router-dom';

// redux store
import store from '../redux-controllers/store';

// components
import Home from '../components/Home';
import Posts from '../components/posts/Posts';
import SignUp from '../components/SignUp';
import Users from '../components/Users';
import EventInfo from '../components/Events/EventInfo';
import Login from '../components/Login';
import Events from '../components/Events/Events';
import PostInfo from '../components/posts/PostInfo';
import Callback from '../components/Callback';
import App from '../components/App';
import Menu from '../components/Menu';

// authentication
import { requireAuth } from '../utils/AuthService';

/* eslint-disable react/jsx-filename-extension */
const router = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Menu>
          <App />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/events" component={Events} />
          <Route path="/eventInfo/:eventId" component={EventInfo} />
          <Route path="/posts/:postId" component={PostInfo} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/users" component={Users} onEnter={requireAuth} />
          <Route path="/callback" component={Callback} />
        </Menu>
      </div>
    </BrowserRouter>
  </Provider>
);

export default router;
