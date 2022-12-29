import React from 'react';
import {Link} from 'react-router-dom'
import {TfiList} from 'react-icons/tfi'

const Navbar = () => {
    const menuItems =
        <React.Fragment>
            <li>
                <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</Link>
            </li>
            <li>
                <Link to="/addtask" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Add Task</Link>
            </li>
            <li>
                <Link to="/mytask" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">My Task</Link>
            </li>
            <li>
                <Link to="/completedtask" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Completed Task</Link>
            </li>
        </React.Fragment>

    return (
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                {/* First part */}
                <Link to="/" class="flex items-center">
                    <TfiList class="text-indigo-600 mr-4 border-2 border-indigo-600 rounded-full h-10 w-10 p-2"/>
                    <span class="self-center text-xl font-semibold whitespace-nowrap ">Task Manager</span>
                </Link>


                {/* Middle part */}
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        {menuItems}
                    </ul>
                </div>


                {/* Last part */}
                <div class="flex md:order-2">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Get started</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                
            </div>
        </nav>

    );
};

export default Navbar;