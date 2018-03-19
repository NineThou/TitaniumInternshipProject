const events = (state = [], action) => {
  console.log('The EVENT will change');
  console.log(state, action);
  return state;
};

export default events;
