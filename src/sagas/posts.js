// saga dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// action
import * as postsApiActions from '../actions/posts-api';

// axios request
import { getPostsData, reduxSagaFirebase } from '../api/api';

function* getPosts() {
  try {
    const posts = yield call(getPostsData);
    yield put(postsApiActions.getPostsSuccess(posts));
  } catch (error) {
    yield put(postsApiActions.getPostsError(error));
  }
}

export default function* watchPostsData() {
  yield takeLatest('API_GET_POSTS_REQUEST', getPosts);
}


function* addPostData() {
  try {
    const newPost = yield call(reduxSagaFirebase.database.read, `/node/posts`);
    yield put(postsApiActions.setPostsSuccess(newPost));
    yield put(getPostsData());
  } catch (error) {
    yield put(postsApiActions.setPostsError(error));
  }
}

export function* setPostData() {
  yield takeLatest('API_SET_POSTS_REQUEST', addPostData);
}
