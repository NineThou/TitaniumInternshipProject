import { fork, all } from 'redux-saga/effects';

import { watchUsersData, watchEventsData, watchPostsData } from './apiSagas';


export default function* rootSaga() {
  yield all([
    fork(watchUsersData),
    fork(watchEventsData),
    fork(watchPostsData),
  ]);
}
