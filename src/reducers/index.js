// modules
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// reducers
import postsInfo from './posts';
import eventsInfo from './events';
import usersInfo from './users';

const rootReducer = combineReducers({
  postsInfo,
  eventsInfo,
  usersInfo,
  form: formReducer,
  routing: routerReducer,
});

export default rootReducer;
