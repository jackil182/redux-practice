import {combineReducers} from 'redux';

import posts from "./getPostsReducer";
import input from './searchPostReducer';
// import filteredPosts from './filterReducer';
// import clear from './clearSearchReducer'

const rootReducer = combineReducers({
  posts,
  input,
  // filteredPosts,
  // clear,
})

export default rootReducer;