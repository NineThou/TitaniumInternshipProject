import { fork, all } from 'redux-saga/effects';

import watchUsersData from './users';
import watchEventsData from './events';
import watchPostsData from './posts';



export default function* rootSaga() {
  yield all([
    fork(watchUsersData),
    fork(watchEventsData),
    fork(watchPostsData),
  ]);
}
