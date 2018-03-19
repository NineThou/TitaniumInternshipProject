const posts = (state = [], action) => {
  console.log('The POST will change');
  console.log(state, action);
  return state;
};

export default posts;
