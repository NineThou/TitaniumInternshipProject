export const getEventsRequest = () => ({
  type: 'API_GET_EVENTS_REQUEST',
});

export const getEventsSuccess = payload => ({
  type: 'API_GET_EVENTS_SUCCESS',
  payload,
});

export const getEventsError = error => ({
  type: 'API_GET_EVENTS_ERROR',
  error,
});

export const setEventsRequest = data => ({
  type: 'API_SET_EVENTS_REQUEST',
  data,
});

export const setEventsSuccess = payload => ({
  type: 'API_SET_EVENTS_SUCCESS',
  payload,
});

export const setEventsError = error => ({
  type: 'API_SET_EVENTS_ERROR',
  error,
});

export const deleteEventRequest = eventKey => ({
  type: 'API_DELETE_EVENT_REQUEST',
  eventKey,
});

export const deleteEventSuccess = payload => ({
  type: 'API_DELETE_EVENT_SUCCESS',
  payload,
});

export const deleteEventError = error => ({
  type: 'API_DELETE_EVENT_ERROR',
  error,
});

export const editEventRequest = (eventKey, data) => ({
  type: 'API_EDIT_EVENT_REQUEST',
  eventKey,
  data,
});

export const editEventSuccess = payload => ({
  type: 'API_EDIT_EVENT_SUCCESS',
  payload,
});

export const editEventError = error => ({
  type: 'API_EDIT_EVENT_ERROR',
  error,
});
