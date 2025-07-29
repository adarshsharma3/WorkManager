import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 ${
        hover ? 'hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600' : ''
      } transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;