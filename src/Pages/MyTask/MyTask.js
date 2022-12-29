import React from 'react';
import { Link } from 'react-router-dom'

const MyTask = () => {
    return (

        <div class="overflow-x-auto mx-20 mt-8 relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Complete btn
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Image
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Task
                        </th>
                        <th scope="col" class="py-4 px-4">

                        </th>
                        <th scope="col" class="py-4 px-4">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b  ">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                            <button class=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br 
                            focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Completed</button>
                        </th>
                        <td class="py-4 px-6">
                            Sliver
                        </td>
                        <td class="py-4 px-6">
                            Laptop
                        </td>
                        <td class="py-4 px-4 text-right">
                            <button class="font-medium text-blue-600  hover:underline">Edit</button>
                        </td>
                        <td class="py-4 px-4 text-right">
                            <button class="font-medium text-red-600  hover:underline">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default MyTask;