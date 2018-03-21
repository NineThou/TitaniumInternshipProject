const eventsInfo = (state = { events: [], loading: false, error: false }, action) => {
  switch (action.type) {
    case 'API_GET_EVENTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'API_GET_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: false,
      };
    case 'API_GET_EVENTS_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default eventsInfo;
