import { fork, all } from 'redux-saga/effects';

import watchUsersData from './users';
<<<<<<< HEAD
import watchEventsData, { setEventData, removeEvent } from './events';
import watchPostsData, { setPostData, removePost } from './posts';
=======
import watchEventsData, { setEventData } from './events';
import watchPostsData, { setPostData, removePost, submitLikeToPost, removeLikeFromPost } from './posts';
>>>>>>> ee432ab73b8532b8716613a0f2130868d8faa2fc


export default function* rootSaga() {
  yield all([
    fork(watchUsersData),
    fork(watchEventsData),
    fork(watchPostsData),
    fork(setPostData),
    fork(setEventData),
    fork(removePost),
<<<<<<< HEAD
    fork(removeEvent),
=======
    fork(submitLikeToPost),
    fork(removeLikeFromPost),
>>>>>>> ee432ab73b8532b8716613a0f2130868d8faa2fc
  ]);
}
