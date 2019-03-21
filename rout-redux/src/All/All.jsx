import React from 'react';
import { connect } from 'react-redux';
import NewsItem from '../NewsItem/NewsItem';

const All = ({ news }) => {
  return (
    <div className="news">
      {news.map(el => (
        <NewsItem key={el.url} data={el} />
      ))}
    </div>
  );
};
const MSTP = state => ({
  news: state.news
});

export default connect(MSTP)(All);
