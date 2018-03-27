import { fork, all } from 'redux-saga/effects';

import watchUsersData from './users';
import watchEventsData, { setEventData } from './events';
import watchPostsData, { setPostData, removePost } from './posts';


export default function* rootSaga() {
  yield all([
    fork(watchUsersData),
    fork(watchEventsData),
    fork(watchPostsData),
    fork(setPostData),
    fork(setEventData),
    fork(removePost),
  ]);
}
