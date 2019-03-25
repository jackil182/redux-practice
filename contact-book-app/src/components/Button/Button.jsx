import React from 'react';

import './Button.css';

const Button = ({value, action, className, id}) => {
  return (
    <button onClick={action} className={className} id={id}>{value}</button>
  );
};

export default Button;