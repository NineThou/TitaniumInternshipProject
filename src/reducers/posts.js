const postsInfo = (state = { posts: {}, loading: false, error: false }, action) => {
  switch (action.type) {
    // initial load
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
    // set new post
    case 'API_SET_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_SET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };
    case 'API_SET_POSTS_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'API_LIKE_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_LIKE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
      };
    case 'API_LIKE_POST_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'API_REMOVE_LIKE_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_REMOVE_LIKE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
      };
    case 'API_REMOVE_LIKE_POST_ERROR':
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
