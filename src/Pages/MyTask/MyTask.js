import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import EditModal from '../Shared/EditModal/EditModal';

const MyTask = () => {
    const [deletingTask, setDeletingTask] = useState(null);
    const [editingTask, setEditingTask] = useState(null);

    const closeModal = () => {
        setDeletingTask(null);
    }
    const closeEditModal = () => {
        setEditingTask(null);
    }


    // get all incomplete tasks
    const { data: myTasks, refetch, isLoading } = useQuery({
        queryKey: ['myIncompleteTasks'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/tasks?status=incomplete');
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (error) {
                console.error(error);
            }
        }
    });

    const handleComplete = id => {
        console.log(id);
        fetch(` http://localhost:5000/task/${id}?status=complete`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Completed successfully!!');
                    refetch();
                }
            })
    }



    const handleEditTask = updatedTaskData => {
        console.log('updatedTaskData: ', updatedTaskData);
        fetch(`http://localhost:5000/task/${updatedTaskData.id}?task=${updatedTaskData.text}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${updatedTaskData.text} updated successfully`);
                    refetch();
                    closeEditModal();
                }
            })
    }




    const handleDeleteTask = task => {
        console.log(task);
        fetch(` http://localhost:5000/task/${task._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${task.task} deleted successfully`);
                    closeModal()
                }
            })
    }


    if (isLoading) {
        return <h2>Loading ...</h2>
    }
    return (

        <div className="overflow-x-auto mx-20 mt-8 relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 text-center">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-2">
                            Status
                        </th>
                        <th scope="col" className="py-4 px-2">
                            Image
                        </th>
                        <th scope="col" className="py-4 px-6">
                            Task
                        </th>
                        <th scope="col" className="py-4 px-4">

                        </th>
                        <th scope="col" className="py-4 px-4">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myTasks.map((mytask, i) => <tr key={i} className="bg-white border-b  ">
                            <td scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap ">
                                <button onClick={() => handleComplete(mytask._id)} className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br 
                                        focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2">
                                    Complete
                                </button>
                            </td>
                            <td className="py-4 px-2">
                                <img src={mytask.image ? mytask.image : ''} className='h-12 w-20 rounded mx-auto' alt="" />
                            </td>
                            <td className="py-4 px-6">
                                {mytask.task}
                            </td>

                            <td className="py-4 px-4 text-right">
                                <button onClick={() => setEditingTask(mytask)} htmlFor="edit-modal" className="font-medium text-blue-600  hover:underline">Edit</button>
                            </td>
                            <td className="py-4 px-4 text-right">
                                <button onClick={() => setDeletingTask(mytask)} htmlFor="confirmation-modal" className="font-medium text-red-600  hover:underline">Delete</button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
            {
                deletingTask &&
                <ConfirmationModal
                    title={`Are you sure you want to delete ?`}
                    message={`If you delete ${deletingTask.task}, it can't be undone`}
                    successAction={handleDeleteTask}
                    modalData={deletingTask}
                    closeModal={closeModal}

                ></ConfirmationModal>
            }

            {
                editingTask &&
                <EditModal
                    title={'Edit your task'}
                    placeholder={`Write your new Task`}
                    successAction={handleEditTask}
                    modalData={editingTask}
                    closeModal={closeEditModal}

                ></EditModal>
            }



        </div>

    );
};

export default MyTask;