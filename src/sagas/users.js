// saga dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// action
import * as usersApiAction from '../actions/users-api';

// axios request
import { getUsersData } from '../api/api';

function* getUsers() {
  try {
    const users = yield call(getUsersData);
    yield put(usersApiAction.getUsersSuccess(users));
  } catch (error) {
    yield put(usersApiAction.getUsersError(error));
  }
}

export default function* watchUsersData() {
  yield takeLatest('API_GET_USERS_REQUEST', getUsers);
}
