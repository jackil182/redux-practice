const contactsFromStorage =
  JSON.parse(localStorage.getItem('allContacts')) || [];

function allContacts(state = contactsFromStorage, action) {
  switch (action.type) {
    case 'SAVE':
      return action.editMode
        ? state.map(el =>
            el.id === Number(action.contactObj.id) ? action.contactObj : el
          )
        : [{ ...action.contactObj, id: Date.now() }, ...state];
    // return [{ ...action.contactObj, id: Date.now() }, ...state];
    case 'DELETE':
      return state.filter(el => el.id !== Number(action.id));
    default:
      return state;
  }
}

export default allContacts;
