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
