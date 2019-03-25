import {combineReducers} from 'redux';

import openModal from "./openModalReducer";
import input from './inputReducer';
import allContacts from './saveContactReducer';
import editMode from './editButtonReducer';

const rootReducer = combineReducers({
  openModal,
  input,
  allContacts,
  editMode,
})

export default rootReducer;