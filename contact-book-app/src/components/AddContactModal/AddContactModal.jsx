import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions/modalActions';
import { inputData, saveContact } from '../../redux/actions/inputActions';

import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddContactModal.css';

const AddContactModal = ({
  closeModal,
  inputData,
  saveContact,
  contactObj,
  editMode
}) => {
  return (
    <div className="AddContactModal">
      <button className="Button--close" onClick={closeModal}>
        X
      </button>

      <div className="AddContactModal__top">
        <form
          className="AddContactModal__form"
          action=""
          onSubmit={e => e.preventDefault()}
        >
          <Input
            type="text"
            label="First Name"
            name="firstName"
            action={(e) => inputData(e)}
            value={contactObj.firstName}
          />
          <Input
            type="text"
            label="Last Name"
            name="lastName"
            action={(e) => inputData(e)}
            value={contactObj.lastName}
          />
          <Input
            type="tel"
            label="Phone number"
            name="tel"
            action={(e) => inputData(e)}
            value={contactObj.tel}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            action={(e) => inputData(e)}
            value={contactObj.email}
          />
          <Input
            type="date"
            label="Birthday"
            name="birthday"
            action={(e) => inputData(e)}
            value={contactObj.birthday}
          />
        </form>
        <img
          className="AddContactModal__img"
          src="https://adara.com/wp-content/uploads/2017/09/unknown.png"
          alt=""
        />
      </div>
      <Button
        className="Button--save btn"
        value="Save Contact"
        action={() => saveContact(contactObj, editMode)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contactObj: state.input,
    editMode: state.editMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
    inputData: (e) => dispatch(inputData(e)),
    saveContact: (contactObj, editMode) => dispatch(saveContact(contactObj, editMode))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContactModal);
