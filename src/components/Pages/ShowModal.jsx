import React from 'react';

const PopupComponent = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white text-black rounded-lg p-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Oops! Something went wrong.</h2>
        <p className="mb-4">Projects are under development. Please Wait!</p>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PopupComponent;