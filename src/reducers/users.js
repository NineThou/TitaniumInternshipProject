const usersInfo = (state = { users: {}, loading: false, error: false }, action) => {
  switch (action.type) {
    case 'API_GET_USERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      };
    case 'API_GET_USERS_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default usersInfo;
