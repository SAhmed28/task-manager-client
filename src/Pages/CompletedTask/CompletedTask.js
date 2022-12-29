import React from 'react';

const CompletedTask = () => {
    return (
        <div class="overflow-x-auto mx-20 mt-8 relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 text-center">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Completed Tasks
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Add a Comment
                        </th>
                        <th scope="col" class="py-4 px-1">
                            Status
                        </th>
                        <th scope="col" class="py-4 px-1">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b  ">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                            Tasks
                        </th>
                        <td class="py-4 px-6">
                            <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight 
                                    uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg 
                                    focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                                Add A Comment
                            </button>
                        </td>
                        <td class="py-4 px-1">
                            <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight 
                                    uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
                                Not Complete
                            </button>
                        </td>
                        <td class="py-4 px-1">
                            <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white 
                                    font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg 
                                    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
                                    transition duration-150 ease-in-out">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CompletedTask;