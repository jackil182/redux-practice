import axios from 'axios';
const getData = data => ({
  type: 'DOWNLOADED',
  data
});

function getFetch() {
  return axios.get(
    'https://newsapi.org/v2/top-headlines?country=ua&apiKey=fe54e78640174c269f1b558d40009301'
  );
}

export const asyncData = () => dispatch => {
  getFetch().then(res => dispatch(getData(res.data.articles)));
};
