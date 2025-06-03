// CommonContainer.jsx
import React from 'react';

const CommonContainer = ({ children, className = '' }) => {
  return (
    <div className={`    ${className}`}>
      {children}
    </div>
  );
};

export default CommonContainer;
  