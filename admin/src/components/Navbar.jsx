import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { adminToken, setAdminToken } = useContext(AdminContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        adminToken && setAdminToken('');
        adminToken && localStorage.removeItem('adminToken');
    }

    return (
        <div className='sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 lg:px-12 py-3 border-b bg-white/90 backdrop-blur-md shadow-sm'>
            {/* Logo Section */}
            <div className='flex items-center gap-3'>
                <img 
                    className='w-32 sm:w-36 md:w-40 cursor-pointer hover:opacity-80 transition-opacity duration-200' 
                    src={assets.admin_logo} 
                    alt='Admin Logo'
                    onClick={() => navigate('/')}
                />
                <div className='relative group'>
                    <p className={`
                        px-3 py-1 rounded-full text-xs font-medium border
                        ${adminToken 
                            ? 'bg-green-50 text-green-600 border-green-200' 
                            : 'bg-blue-50 text-blue-600 border-blue-200'
                        }
                    `}>
                        {adminToken ? "Admin" : "Doctor"}
                    </p>
                    <span className='absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                </div>
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-4'>
                {/* Notification Icon */}
                <button className='relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                    </svg>
                    <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
                </button>

                {/* User Menu */}
                <div className='relative'>
                    <button 
                        onClick={() => setShowDropdown(!showDropdown)}
                        className='flex items-center gap-3 bg-gray-50 hover:bg-gray-100 pl-3 pr-2 py-2 rounded-full transition-all duration-200 border border-gray-200 hover:border-gray-300 group'
                    >
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                                {adminToken ? 'A' : 'D'}
                            </div>
                            <span className='hidden sm:block text-sm font-medium text-gray-700'>
                                {adminToken ? 'Admin User' : 'Doctor User'}
                            </span>
                        </div>
                        <svg 
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} 
                            fill='none' 
                            stroke='currentColor' 
                            viewBox='0 0 24 24'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {showDropdown && (
                        <>
                            <div 
                                className='fixed inset-0 z-40'
                                onClick={() => setShowDropdown(false)}
                            ></div>
                            <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-50 animate-fadeIn'>
                                <div className='px-4 py-2 border-b border-gray-100'>
                                    <p className='text-sm font-medium text-gray-800'>{adminToken ? 'Admin' : 'Doctor'}</p>
                                    <p className='text-xs text-gray-500'>admin@example.com</p>
                                </div>
                                <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-150 flex items-center gap-2'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                    </svg>
                                    Profile
                                </button>
                                <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-150 flex items-center gap-2'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                    Settings
                                </button>
                                <div className='border-t border-gray-100 my-1'></div>
                                <button 
                                    onClick={logout}
                                    className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 flex items-center gap-2'
                                >
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Simple Logout Button (Alternative if dropdown not wanted) */}
                {/* <button 
                    onClick={logout} 
                    className='bg-gradient-to-r from-green-400 to-green-600 text-white text-sm px-6 py-2 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2'
                >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                    </svg>
                    Logout
                </button> */}
            </div>

          
            
        </div>
    )
}

export default Navbar