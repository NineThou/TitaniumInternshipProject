import React from 'react';

// router dependencies
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Home from '../components/Home';
import Posts from '../components/posts/Posts';
import SignUp from '../components/SignUp';
import Users from '../components/Users';
import EventInfo from '../components/Events/EventInfo';
import Login from '../components/Login';
import Events from '../components/Events/Events';
import Main from '../components/Main';
import PostInfo from '../components/posts/PostInfo';

/* eslint-disable react/jsx-filename-extension */
const router = (
  <BrowserRouter>
    <div>
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/events" component={Events} />
        <Route path="/eventInfo/:eventId" component={EventInfo} />
        <Route path="/posts/:postId" component={PostInfo} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
      </Main>
    </div>
  </BrowserRouter>
);

export default router;
