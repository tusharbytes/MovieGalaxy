// CommonContainer.jsx
import React from 'react';

const CommonContainer = ({ children, className = '' }) => {
  return (
    <div className={`max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default CommonContainer;
