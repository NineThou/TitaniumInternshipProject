// initial load
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

// set new post
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

// post deletion
export const deletePostRequest = postKey => ({
  type: 'API_DELETE_POST_REQUEST',
  postKey,
});

export const deletePostSuccess = payload => ({
  type: 'API_DELETE_POST_SUCCESS',
  payload,
});

export const deletePostError = error => ({
  type: 'API_DELETE_POST_ERROR',
  error,
});

// like for posts
export const addLikeRequest = (postKey, user) => ({
  type: 'API_LIKE_POST_REQUEST',
  postKey,
  user,
});

export const addLikeSuccess = payload => ({
  type: 'API_LIKE_POST_SUCCESS',
  payload,
});

export const addLikeError = error => ({
  type: 'API_LIKE_POST_ERROR',
  error,
});

export const removeLikeRequest = (postKey, likeKey) => ({
  type: 'API_REMOVE_LIKE_POST_REQUEST',
  postKey,
  likeKey,
});

export const removeLikeSuccess = payload => ({
  type: 'API_REMOVE_LIKE_POST_SUCCESS',
  payload,
});

export const removeLikeError = error => ({
  type: 'API_REMOVE_LIKE_POST_ERROR',
  error,
});

// 0 likes fix
export const fixZeroLikeRequest = postKey => ({
  type: 'ZERO_LIKE_REQUEST',
  postKey,
});

export const fixZeroLikeSuccess = payload => ({
  type: 'ZERO_LIKE_SUCCESS',
  payload,
});

export const fixZeroLikeError = error => ({
  type: 'ZERO_LIKE_ERROR',
  error,
});