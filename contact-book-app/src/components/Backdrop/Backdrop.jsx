import React from 'react';

import './Backdrop.css';

const Backdrop = ({children}) => {
  return (
    <div className='Backdrop'>
      {children}
    </div>
  );
};

export default Backdrop;