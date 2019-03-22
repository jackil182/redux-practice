import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncData } from './redux/actions/getPostsActions';

import Loader from 'react-loader-spinner';
import Main from './components/Main/Main';


import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchedPosts();
  }

  render() {
    const { posts, propName } = this.props;
    return (
      <div className="App">
        {posts.length ? (
          <Main />
        ) : (
          <Loader type="TailSpin" color="#000" height={80} width={80} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchedPosts: function() {
      dispatch(asyncData());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
