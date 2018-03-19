import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// import json data
import events from '../events.json';
import posts from '../posts.json';
import getUsersData from '../utils/users-api';

// create an object for the default data
const defaultState = {
  events,
  posts,
  users: getUsersData(),
};

const store = createStore(rootReducer, defaultState);

export default store;

