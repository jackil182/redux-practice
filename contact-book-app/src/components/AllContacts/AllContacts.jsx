import React from 'react';
import { connect } from 'react-redux';

import ContactCard from '../ContactCard/ContactCard';


import "./AllContacts.css";

const AllContacts = ({allContacts}) => {
  return (
    <div className='AllContacts'>
      {allContacts.map(el => <ContactCard key={el.id} bio={el} />)}
    </div>
  );
};

function mapStateToProps (state) {
  return {
    allContacts: state.allContacts,
  }
}

export default connect(mapStateToProps) (AllContacts);