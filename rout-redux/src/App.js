import React, { Component } from 'react';
import {connect} from 'react-redux';
import {asyncData} from './redux/actions/getNewsActions';
import './App.css';
import All from './All/All';
import Main from './Main/Main';
import Loader from 'react-loader-spinner'

class App extends Component {

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <div className="App">
      <header></header>
      {this.props.news.length ? <Main /> : <Loader 
               type="Puff"
               color="#00BFFF"
               height="100"	
               width="100"
      />}
      </div>
    );
  }
}

const MSTP = state => ({
  news: state.news,
})

const MDTP = dispatch => ({
  fetch: () => dispatch(asyncData())
})

export default connect(MSTP,MDTP)(App);
