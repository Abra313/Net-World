import React from 'react';
const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
        
      {children}
    </button>
  );
};


export default Button;

