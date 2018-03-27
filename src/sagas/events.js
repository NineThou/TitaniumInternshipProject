// saga dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// action
import * as eventsApiAction from '../actions/events-api';

// axios request
import { getEventsData } from '../api/api';

function* getEvents() {
  try {
    const events = yield call(getEventsData);
    yield put(eventsApiAction.getEventsSuccess(events));
  } catch (error) {
    yield put(eventsApiAction.getEventsError(error));
  }
}

export default function* watchEventsData() {
  yield takeLatest('API_GET_EVENTS_REQUEST', getEvents);
}

