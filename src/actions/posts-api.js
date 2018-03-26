export const getPostsRequest = () => ({
  type: 'API_GET_POSTS_REQUEST',
});

export const getPostsSuccess = payload => ({
  type: 'API_GET_POSTS_SUCCESS',
  payload,
});

export const getPostsError = error => ({
  type: 'API_GET_POSTS_ERROR',
  error,
});

export const setPostsRequest = data => ({
  type: 'API_SET_POSTS_REQUEST',
  data,
});

export const setPostsSuccess = payload => ({
  type: 'API_SET_POSTS_SUCCESS',
  payload,
});

export const setPostsError = error => ({
  type: 'API_SET_POSTS_ERROR',
  error,
});