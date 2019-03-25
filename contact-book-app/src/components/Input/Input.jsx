import React from 'react';

import './Input.css';

const Input = ({type, label, name, action, value}) => {
  return (
    <div className="group">      
      <input className='Input' type={type} name={name} onChange={action} value={value} required />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='Input__label'>{label}</label>
    </div>
  );
};

export default Input;