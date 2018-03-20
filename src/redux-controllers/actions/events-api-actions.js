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