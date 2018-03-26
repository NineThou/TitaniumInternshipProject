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
