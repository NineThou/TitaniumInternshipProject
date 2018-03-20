export const getUsersRequest = () => ({
  type: 'API_GET_USERS_REQUEST',
});

export const getUsersSuccess = payload => ({
  type: 'API_GET_USERS_SUCCESS',
  payload,
});

export const getUsersError = error => ({
  type: 'API_GET_USERS_ERROR',
  error,
});