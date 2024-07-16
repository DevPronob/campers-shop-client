import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className='px-5'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                                <li><Link to='/productManagement'>Product Management</Link></li>
                            </ul>
                        )}
                    </div>
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Elomus</span>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/productManagement'>Product Management</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
