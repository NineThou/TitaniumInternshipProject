// modules
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import postsInfo from './posts';
import eventsInfo from './events';
import usersInfo from './users';

const rootReducer = combineReducers({
  postsInfo,
  eventsInfo,
  usersInfo,
  routing: routerReducer,
});

export default rootReducer;
