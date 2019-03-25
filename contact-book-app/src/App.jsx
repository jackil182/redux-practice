import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openModal } from './redux/actions/modalActions';

import './App.css';
import Button from './components/Button/Button';
import Backdrop from './components/Backdrop/Backdrop';
import AddContactModal from './components/AddContactModal/AddContactModal';
import AllContacts from './components/AllContacts/AllContacts';

class App extends Component {
  render() {
    const { openModal, isModalOpen } = this.props;
    return (
      <div className="App">
        <Button className='Button--add btn' value="Add Contact" action={openModal} />
        {isModalOpen ? (
          <Backdrop>
            <AddContactModal />
          </Backdrop>
        ) : (
          <AllContacts />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.openModal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: function() {
      dispatch(openModal());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
