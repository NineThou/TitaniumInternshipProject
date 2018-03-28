// saga dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// action
import * as eventsApiAction from '../actions/events-api';

// axios request
import { getEventsData, reduxSagaFirebase } from '../api/api';

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

function* addEventData({ data }) {
  try {
    yield call(reduxSagaFirebase.database.create, `/node/events`, data);
    const newPost = yield call(reduxSagaFirebase.database.read, `/node/events/`);
    yield put(eventsApiAction.setEventsSuccess(newPost));
    yield put(getEventsData());
  } catch (error) {
    yield put(eventsApiAction.setEventsError(error));
  }
}

export function* setEventData() {
  yield takeLatest('API_SET_EVENTS_REQUEST', addEventData);
}

function* deleteEvent({ eventKey }) {
  try {
    yield call(reduxSagaFirebase.database.delete, `/node/events/${eventKey}`);
    yield put(eventsApiAction.deleteEventSuccess());
    const events = yield call(getEventsData);
    yield put(eventsApiAction.getEventsSuccess(events));
  } catch (error) {
    yield put(eventsApiAction.deleteEventError(error));
  }
}

export function* removeEvent() {
  yield takeLatest('API_DELETE_EVENT_REQUEST', deleteEvent);
}
