// Modal.js
import React from 'react';

const Modal = ({ isOpen, beforeImageUrl, afterImageUrl, closeModal }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] sm:w-1/3">
          <div className="text-right">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800 text-lg"
            >
              &times;
            </button>
          </div>

          <div className="mt-2">
            {/* Display Before and After images */}
            <img
              src={beforeImageUrl}
              alt="Before"
              className="w-full h-auto rounded-lg mb-4"
            />
            <img
              src={afterImageUrl}
              alt="After"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
