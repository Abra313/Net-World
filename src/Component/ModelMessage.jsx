// ModelMessage.js
import React from 'react';

const ModelMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-center text-xl font-bold text-green-600">{message}</h2>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-primary text-white py-2 px-6 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelMessage;
