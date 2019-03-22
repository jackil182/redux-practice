import axios from 'axios';

const getPosts = data => ({
  type: 'FETCHING',
  data
})

function fetchFunc() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export const asyncData = () => dispatch => {
  fetchFunc().then(res => dispatch(getPosts(res.data)))
}