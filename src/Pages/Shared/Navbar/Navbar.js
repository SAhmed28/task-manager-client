import React, { useContext } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { BiTask } from 'react-icons/bi'
import { AuthContext } from '../../../contexts/AuthProvider';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err));
    }
    const menuItems =
        <React.Fragment>
            <li>
                <NavLink to="/" className={({isActive}) => isActive? 'active text-blue-700' : undefined } aria-current="page">Home</NavLink>
            </li>

            {
                user?.uid ?
                    <>
                        <li>
                            <NavLink to="/addtask" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Add Task</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mytask" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">My Task</NavLink>
                        </li>
                        <li>
                            <NavLink to="/completedtask" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Completed Task</NavLink>
                        </li>
                        <li className='md:hidden'>
                            <NavLink onClick={handleLogOut} to="/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Log out</NavLink>
                        </li>
                    </>
                    :
                    <>
                        <li className='md:hidden'>
                            <NavLink to="/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Login</NavLink>
                        </li>
                        <li className='md:hidden'>
                            <NavLink to="/signup" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Sign Up</NavLink>
                        </li>

                    </>
            }


        </React.Fragment>

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                {/* First part */}
                <NavLink to="/" className="flex items-center">
                    <BiTask className="text-indigo-600 mr-4 border-2 border-indigo-600 rounded-full h-10 w-10 p-2" />
                    <span className="self-center text-xl text-indigo-600 font-semibold whitespace-nowrap ">Task Manager</span>
                </NavLink>


                {/* Middle part */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        {menuItems}
                    </ul>
                </div>


                {/* Last part */}
                <div className="flex md:order-2">
                    {
                        user?.uid ?
                            <>
                                <NavLink to='/login'>
                                    <button onClick={handleLogOut} type="button" className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Log out</button>
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink to='/login'>
                                    <button type="button" className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Get started</button>
                                </NavLink>
                            </>
                    }

                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 absolute top-2 right-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>


            </div>
        </nav>

    );
};

export default Navbar;