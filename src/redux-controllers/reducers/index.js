// modules
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import posts from './posts';
import events from './events';

const rootReducer = combineReducers({ posts, events, routing: routerReducer });

export default rootReducer;