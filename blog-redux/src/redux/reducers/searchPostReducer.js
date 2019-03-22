function input(state = '', action) {
  console.log(action)
  switch (action.type) {
    case 'INPUT':
      return action.value;
    case 'CLEAR':
      return '';
    default:
      return state;
  }
}


export default input;