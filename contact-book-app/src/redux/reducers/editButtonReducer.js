function editMode(state = false, action) {
  switch (action.type) {
    case 'EDIT':
      return true;
    case 'CANCELEDIT':
      return false;
    case 'CLOSEMODAL':
      return false;
    case 'SAVE':
      return false;
    default:
      return state;
  }
}

export default editMode;
