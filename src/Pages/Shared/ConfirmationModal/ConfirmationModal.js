import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction }) => {
    return (
        <div id="confirmation-modal"  >
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" className="modal-toggle" /> */}
            <div className="modal backdrop-blur-sm bg-slate-200/40 fixed top-20 left-1/4 w-1/2 text-center py-8 px-8 outline-none overflow-x-hidden overflow-y-auto">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">{title}</h3>
                    <p className="py-4 text-lg font-bold text-blue-800">{message}</p>
                    <div className="modal-action pt-8">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="mr-2 px-6 py-2.5
                                bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Confirm
                        </label>

                        <button onClick={closeModal} className='px-6 py-2.5 bg-purple-600 text-white font-medium text-xs
                                    leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg
                                    focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg
                                    transition duration-150 ease-in-out'>
                            Close Modal
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmationModal;