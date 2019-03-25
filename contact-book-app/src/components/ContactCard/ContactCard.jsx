import React from 'react';

import './ContactCard.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { toggleEdit, deleteContact } from '../../redux/actions/editAndDeleteActions';

const ContactCard = ({ bio, toggleEdit, allContacts, deleteContact }) => {
  return (
    <div className="ContactCard">
      <h3 className="ContactCard__title">
        {bio.firstName.toLowerCase()} {bio.lastName.toLowerCase()}
      </h3>
      <p className="ContactCard__tel">{bio.tel}</p>
      <p className="ContactCard__email">{bio.email}</p>
      <Button
        value="Edit"
        action={e => toggleEdit(e, allContacts)}
        className="btn btn--edit"
        id={bio.id}
      />
      <Button
        value="Delete"
        action={e => deleteContact(e, allContacts)}
        className="btn btn--delete"
        id={bio.id}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    allContacts: state.allContacts,
    editMode: state.editMode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEdit: (e, allContacts) => dispatch(toggleEdit(e, allContacts)),
    deleteContact: (e, allContacts) => dispatch(deleteContact(e, allContacts))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactCard);
