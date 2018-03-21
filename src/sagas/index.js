import { fork, all } from 'redux-saga/effects';

import watchUsersData from './usersSaga';
import watchEventsData from './eventsSaga';
import watchPostsData from './postsSaga';



export default function* rootSaga() {
  yield all([
    fork(watchUsersData),
    fork(watchEventsData),
    fork(watchPostsData),
  ]);
}
