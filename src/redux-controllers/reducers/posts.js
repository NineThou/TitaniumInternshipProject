const postsInfo = (state = { posts: [], loading: false, error: false }, action) => {
  switch (action.type) {
    case 'API_GET_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };
    case 'API_GET_POSTS_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postsInfo;
