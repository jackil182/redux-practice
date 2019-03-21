import React from 'react';
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom';
import All from '../All/All';
import SinglePage from '../SinglePage/SinglePage'

const Main = ({news}) => {
  return (
    <Switch>
      <Route exact path ='/' component={All} />
      {/* <Route path='/:id' render={props => {
        const result = news.find(el => el.publishedAt === props.match.params.id);
        return <SinglePage data={result} />
      }} /> */}
      <Route path='/:id' component={SinglePage} />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    news: state.news,
  }
}

export default connect(mapStateToProps) (Main);