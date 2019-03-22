import React from 'react';

import { connect } from 'react-redux';
import BlogPost from '../BlogPost/BlogPost';

import { searchPost } from '../../redux/actions/searchPostActions';
// import { filterPosts } from '../../redux/actions/filterActions';
import {clearSearch} from '../../redux/actions/clearSearchActions';

const Main = ({ posts, searchPost, input, clearSearch }) => {
  console.log(input)
  const filteredPosts = posts.filter(el => el.title.includes(input));

  return (
    <div>
      <h1>Blog Posts</h1>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input type="text" name="" value={input} onChange={e => searchPost(e)} />
        <button type="button" onClick={clearSearch}>
          Clear
        </button>
      </form>
      <div className="blog__wrapper">
        {filteredPosts.map(el => <BlogPost data={el} key={el.id} />)}
        {/* {posts.map(el => (
          <BlogPost data={el} key={el.id} />
        ))} */}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    input: state.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchPost: e => dispatch(searchPost(e)),
    // filterPosts: () => dispatch(filterPosts())
    clearSearch: () => dispatch(clearSearch())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
