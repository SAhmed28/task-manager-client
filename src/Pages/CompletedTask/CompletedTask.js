import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import EditModal from '../Shared/EditModal/EditModal';

const CompletedTask = () => {
    const [deletingTask, setDeletingTask] = useState(null);
    const [addComment, setAddComment] = useState(null);

    const closeModal = () => {
        setDeletingTask(null);
    }
    const closeEditModal = () => {
        setAddComment(null);
    }



    // get all incomplete tasks
    const { data: myCompletedTasks, refetch, isLoading } = useQuery({
        queryKey: ['myIncompleteTasks'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/tasks?status=complete');
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
        fetch(` http://localhost:5000/task/${id}?status=incomplete`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Sent to My Task successfully!!');
                    refetch();
                }
            })
    }



    const handleAddComment = comment => {
        console.log('comment: ', comment);
        fetch(`http://localhost:5000/task/${comment.id}?comment=${comment.text}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Comment added successfully`);
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
        <div className="overflow-x-auto mx-2 md:mx-20 mt-8 relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 text-center">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Completed Tasks
                        </th>
                        <th scope="col" className="py-4 px-6">
                            Add a Comment
                        </th>
                        <th scope="col" className="py-4 px-1">
                            Status
                        </th>
                        <th scope="col" className="py-4 px-1">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCompletedTasks.map((myCompletedTask, i) =>
                            <tr key={i} className="bg-white border-b  ">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    {myCompletedTask.task}
                                </th>
                                <td className="py-4 px-6">
                                    <button onClick={() => setAddComment(myCompletedTask)} htmlFor="edit-modal" type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight 
                                    uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg 
                                    focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Add A Comment
                                    </button>
                                </td>
                                <td className="py-4 px-1">
                                    <button type="button" onClick={() => handleComplete(myCompletedTask._id)} className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight 
                                    uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
                                        Not Completed
                                    </button>
                                </td>
                                <td className="py-4 px-1">
                                    <button onClick={() => setDeletingTask(myCompletedTask)} type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white 
                                    font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg 
                                    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
                                    transition duration-150 ease-in-out">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                        )
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
                addComment &&
                <EditModal
                    title={'Add a comment for this task'}
                    placeholder={`Leave a Comment here`}
                    successAction={handleAddComment}
                    modalData={addComment}
                    closeModal={closeEditModal}

                ></EditModal>
            }
        </div>
    );
};

export default CompletedTask;