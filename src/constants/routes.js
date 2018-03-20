import React from 'react';
// router dependencies
import { BrowserRouter, Route } from 'react-router-dom';


// components
import Home from '../components/Home';
import Posts from '../components/posts/Posts';
import SignUp from '../components/SignUp';
import Users from '../components/Users';
import EventInfo from '../components/events/EventInfo';
import Login from '../components/Login';
import Events from '../components/events/Events';
import PostInfo from '../components/posts/PostInfo';
import Callback from '../components/Callback';
import Menu from '../components/Menu';
import Header from '../components/header/Header';

// authentication
import { requireAuth } from '../utils/AuthService';

/* eslint-disable react/jsx-filename-extension */
const router = (
  <BrowserRouter>
    <div>
      <Menu>
        <Header />
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
);

export default router;
