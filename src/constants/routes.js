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
import Authentication from '../components/Authentication';
import Menu from '../components/Menu';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import PostEdit from '../components/posts/PostEdit';
import EventEdit from '../components/events/EventEdit';

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
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:eventId" component={EventInfo} />
        <Route path="/events/edit/:eventId" component={EventEdit} />
        <Route exact path="/posts/:postId" component={PostInfo} />
        <Route path="/posts/edit/:postId" component={PostEdit} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/users" component={Users} onEnter={requireAuth} />
        <Route path="/callback" component={Authentication} />
        <Footer />
      </Menu>
    </div>
  </BrowserRouter>
);

export default router;
