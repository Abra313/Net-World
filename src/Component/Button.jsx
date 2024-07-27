import React from 'react';
const Button = ({ onClick, className, children,loading }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
        
      
      {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 0112 4v4a4 4 0 00-4 4H6c0-.212.074-.409.193-.568l.607 1.857zM20 12c0-1.849-.634-3.544-1.693-4.889l-.607 1.857A4 4 0 0018 12h2zm-9 7.291A8.004 8.004 0 0016 20h-4a4 4 0 01-4-4H6c0 .212.074.409.193.568l.607-1.857z"
                        ></path>
                    </svg>
                    Loading...
                </span>
            )}
            {!loading && children}
    </button>
  );
};


export default Button;

