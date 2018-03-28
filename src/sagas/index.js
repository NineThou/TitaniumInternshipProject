import { fork, all } from 'redux-saga/effects';

import watchUsersData from './users';
import watchEventsData, { setEventData, removeEvent } from './events';
import watchPostsData, { setPostData, removePost, submitLikeToPost, removeLikeFromPost, fixZeroLikes } from './posts';


export default function* rootSaga() {
  yield all([
    fork(watchUsersData),
    fork(watchEventsData),
    fork(watchPostsData),
    fork(setPostData),
    fork(setEventData),
    fork(removePost),
    fork(removeEvent),
    fork(submitLikeToPost),
    fork(removeLikeFromPost),
    fork(fixZeroLikes),
  ]);
}
