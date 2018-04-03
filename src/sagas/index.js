import { fork, all } from 'redux-saga/effects';

import watchUsersData from './users';
import watchEventsData, { setEventData, removeEvent, editEventData } from './events';
import watchPostsData, { setPostData, removePost, submitLikeToPost, removeLikeFromPost, editPostData, addCommentToPost } from './posts';


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
    fork(editPostData),
    fork(editEventData),
    fork(addCommentToPost),
  ]);
}
