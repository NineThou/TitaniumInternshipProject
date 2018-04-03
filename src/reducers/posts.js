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
    case 'API_EDIT_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_EDIT_POST_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };
    case 'API_EDIT_POST_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    // add like
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
    // remove like
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
    // add post comment
    case 'ADD_POST_COMMENT_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'ADD_POST_COMMENT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
      };
    case 'ADD_POST_COMMENT_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    // remove post comment
    case 'DELETE_POST_COMMENT_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'DELETE_POST_COMMENT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
      };
    case 'DELETE_POST_COMMENT_ERROR':
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
