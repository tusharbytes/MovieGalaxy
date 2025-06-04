// CommonContainer.jsx
import React from 'react';

const CommonContainer = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#1A565A]    ${className}`}>
      {children}
    </div>
  );
};

export default CommonContainer;
  