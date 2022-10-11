import React from 'react';
import { NavLink } from 'react-router-dom';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='navbar bg-teal-400 text-white'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='topics' className={({ isActive }) =>
                            isActive
                                ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                        }>Topics</NavLink></li>
                        <li><NavLink to='statistics' className={({ isActive }) =>
                            isActive
                                ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                        }>Statistics</NavLink></li>
                        <li><NavLink to='blogs' className={({ isActive }) =>
                            isActive
                                ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                        }>Blogs</NavLink></li>
                    </ul>
                </div>
                <button className='btn btn-ghost normal-case text-xl text-white'>
                    <QuestionMarkCircleIcon className="h-7 w-7 text-white mt-1"></QuestionMarkCircleIcon>
                    Brain Stressors
                </button>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className='menu menu-horizontal p-0'>
                    <li><NavLink to='topics' className={({ isActive }) =>
                        isActive
                            ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                    }>Topics</NavLink></li>
                    <li><NavLink to='statistics' className={({ isActive }) =>
                        isActive
                            ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            : 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    }>Statistics</NavLink></li>
                    <li><NavLink to='blogs' className={({ isActive }) =>
                        isActive
                            ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                    }>Blogs</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;