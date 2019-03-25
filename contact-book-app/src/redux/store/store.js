import { createStore } from 'redux';
import rootReducer from '../reducers';

//if middleware is needed
// import {applyMiddleware} from 'redux';
//npm i redux-thunk  //run in terminal
// import thunk from 'redux-thunk'; //this is just an example
// import {compose} from 'redux'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistedState = localStorage.getItem('allContacts')
  ? JSON.parse(localStorage.getItem('allContacts'))
  : {};

const store = createStore(rootReducer, persistedState, devTools);

store.subscribe(() => {
  localStorage.setItem('allContacts', JSON.stringify(store.getState().allContacts));
});

export default store;
