import { call, put, takeLatest } from 'redux-saga/effects';
import * as usersApiAction from '../redux-controllers/actions/users-api-actions';
import * as eventsApiAction from '../redux-controllers/actions/events-api-actions';
import * as postsApiActions from '../redux-controllers/actions/posts-api-actions';

import { getUsersData, getEventsData, getPostsData } from '../api/api';

// for users
function* getUsers() {
  try {
    const users = yield call(getUsersData);
    yield put(usersApiAction.getUsersSuccess(users));
  } catch (error) {
    yield put(usersApiAction.getUsersError(error));
  }
}

export function* watchUsersData() {
  yield takeLatest('API_GET_USERS_REQUEST', getUsers);
}

// for users
function* getEvents() {
  try {
    const events = yield call(getEventsData);
    yield put(eventsApiAction.getEventsSuccess(events));
  } catch (error) {
    yield put(eventsApiAction.getEventsError(error));
  }
}

export function* watchEventsData() {
  yield takeLatest('API_GET_EVENTS_REQUEST', getEvents);
}

// for posts
function* getPosts() {
  try {
    const posts = yield call(getPostsData);
    yield put(postsApiActions.getPostsSuccess(posts));
  } catch (error) {
    yield put(postsApiActions.getPostsError(error));
  }
}

export function* watchPostsData() {
  yield takeLatest('API_GET_POSTS_REQUEST', getPosts);
}
