import React from 'react';

const Modal = ({ show, handleClose, content }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
                <p className="mb-4">{content}</p>
                <button
                    onClick={handleClose}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
