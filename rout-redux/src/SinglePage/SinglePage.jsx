import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import './SinglePage.css';
const SinglePage = ({news, match}) => {
    const data = news.find(el => el.publishedAt === match.params.id);
    return (
        <div className='article'>
            <NavLink to='/'>Return to homepage</NavLink>
            <img src={data.urlToImage} alt={data.title} className='article-img'/>
            <h2 className='article-title'>{data.title}</h2>
            <p className='article-text'>{data.description}</p>
            <a href={data.url} target='_blank' className='article-link'>Читати на сайті</a>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        news: state.news,
    }
}

export default connect(mapStateToProps) (SinglePage);