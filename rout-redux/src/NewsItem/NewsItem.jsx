import React from 'react';
import {NavLink} from 'react-router-dom'
import './NewsItem.css';
const NewsItem = ({data}) => {
    return (
        <div className = 'news__item'>
            <img src={data.urlToImage} alt={data.author} className = 'news__img'/>
            <h2 className = 'news__title'>{data.title}</h2>
            <NavLink className='news__btn' to= {`/${data.publishedAt}`}>Читати</NavLink>
        </div>
    );
};

export default NewsItem;