import React from 'react';
import { useForm } from "react-hook-form";

const EditModal = ({ title, placeholder, closeModal, modalData, successAction }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleUpdate = (event) => {
        event.preventDefault();
        const taskName = document.getElementById('taskName').value

        console.log(modalData);

        const updatedData = {
            id: modalData._id,
            text: taskName
        }
        successAction(updatedData)
    }
    return (
        <div id="edit-modal"  >
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" className="modal-toggle" /> */}
            <div className="modal backdrop-blur-sm bg-slate-200/40 fixed top-20 left-1/4 w-1/2 text-center py-8 px-8 outline-none overflow-x-hidden overflow-y-auto">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl mb-4">  {title} </h3>
                    {/* <p className="py-4 text-lg font-bold text-blue-800">{message}</p> */}

                    <form onSubmit={handleUpdate} id='editTask'>
                        <div className="form-group mb-6">
                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                id="taskName"
                                rows="3"
                                placeholder={placeholder}
                                // name='taskName'
                                // {...register("taskName", { required: "Task Name is required" })}
                            ></textarea>
                        </div>
                        
                    </form>


                    <div className="modal-action pt-8">
                        <button onClick={handleUpdate} htmlFor="confirmation-modal" type="submit" className="mr-2 px-6 py-2.5
                                bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Update Now
                        </button>

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

export default EditModal;