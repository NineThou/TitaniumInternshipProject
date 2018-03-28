// saga dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// action
import * as postsApiActions from '../actions/posts-api';

// axios request
import { getPostsData, reduxSagaFirebase } from '../api/api';

// utils
import makeid from '../utils/helperFunctions';

// initial posts load
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

// add new post
function* addPostData({ data }) {
  try {
    yield call(reduxSagaFirebase.database.create, `/node/posts`, data);
    const newPost = yield call(reduxSagaFirebase.database.read, `/node/posts/`);
    yield put(postsApiActions.setPostsSuccess(newPost));
    yield put(getPostsData());
  } catch (error) {
    yield put(postsApiActions.setPostsError(error));
  }
}

export function* setPostData() {
  yield takeLatest('API_SET_POSTS_REQUEST', addPostData);
}

// post delete
function* deletePost({ postKey }) {
  try {
    yield call(reduxSagaFirebase.database.delete, `/node/posts/${postKey}`);
    yield put(postsApiActions.deletePostSuccess());
    const posts = yield call(getPostsData);
    yield put(postsApiActions.getPostsSuccess(posts));
  } catch (error) {
    yield put(postsApiActions.deletePostError(error));
  }
}

export function* removePost() {
  yield takeLatest('API_DELETE_POST_REQUEST', deletePost);
}

// add like to post
function* addLikePost({ postKey, user }) {
  const key = makeid();
  try {
    yield call(reduxSagaFirebase.database.patch, `/node/posts/${postKey}/likes`, {
      [key]: user,
    });
    yield put(postsApiActions.addLikeSuccess());
    const posts = yield call(getPostsData);
    yield put(postsApiActions.getPostsSuccess(posts));
  } catch (error) {
    yield put(postsApiActions.addLikeError(error));
  }
}

export function* submitLikeToPost() {
  yield takeLatest('API_LIKE_POST_REQUEST', addLikePost);
}

// remove like from post
function* removeLikePost({ postKey, likeKey }) {
  try {
    yield call(reduxSagaFirebase.database.delete, `/node/posts/${postKey}/likes/${likeKey}`);
    yield put(postsApiActions.removeLikeSuccess());
    const posts = yield call(getPostsData);
    yield put(postsApiActions.getPostsSuccess(posts));
  } catch (error) {
    yield put(postsApiActions.removeLikeError(error));
  }
}

export function* removeLikeFromPost() {
  yield takeLatest('API_REMOVE_LIKE_POST_REQUEST', removeLikePost);
}