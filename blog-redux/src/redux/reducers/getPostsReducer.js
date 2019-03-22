function posts(state = [], action) {
  // console.log(action)
  switch (action.type) {
    case 'FETCHING':
      return action.data;
    default:
      return state;
  }
}


export default posts;