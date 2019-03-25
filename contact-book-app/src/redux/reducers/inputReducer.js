const initialState = {
  firstName: '',
  lastName: '',
  tel: '',
  email: '',
  birthday: '',
  id: ''
};

function input(state = initialState, action) {
  switch (action.type) {
    case `${action.name}`:
      return { ...state, [action.name]: action.value };
    case 'SAVE':
      return initialState;
    case 'CLOSEMODAL':
      return initialState;
    case 'EDIT':
      const contactToEdit = action.allContacts.find(
        el => el.id === Number(action.id)
      );
      return contactToEdit;

    default:
      return state;
  }
}

export default input;
