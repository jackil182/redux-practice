function openModal(state = false, action) {
  switch (action.type) {
    case 'OPENMODAL':
      return true;
    case 'CLOSEMODAL':
      return false;
    case 'SAVE':
      return false;
    case 'EDIT':
      return true;
    default:
      return state;
  }
}

export default openModal;
