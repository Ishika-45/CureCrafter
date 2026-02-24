import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';

const Sidebar = () => {
    const { adminToken, setAdminToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = () => {
        setAdminToken('');
        localStorage.removeItem('adminToken');
        navigate('/');
    }

    return (
        <div className='fixed left-0 top-0 h-full bg-white shadow-lg px-2 md:px-0 py-8 w-60 md:w-72 border-r border-gray-100 overflow-y-auto'>
            {adminToken && (
                <>
                    {/* Admin Profile Section */}
                    <div className='px-4 md:px-8 mb-8'>
                        <div className='flex items-center gap-3 pb-4 border-b border-gray-200'>
                            <div className='w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold'>
                                A
                            </div>
                            <div>
                                <p className='text-sm font-medium text-gray-700'>Admin</p>
                                <p className='text-xs text-gray-500'>Dashboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className='text-[#515151] space-y-1 px-3 md:px-4'>
                        <NavLink 
                            className={({ isActive }) => `
                                flex items-center gap-4 py-3.5 px-4 md:px-6 rounded-lg
                                cursor-pointer transition-all duration-300 ease-in-out
                                ${isActive 
                                    ? 'bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 text-green-600 shadow-sm' 
                                    : 'hover:bg-gray-50 hover:pl-6 hover:text-green-600'
                                }
                            `} 
                            to={'/admin-dashboard'}
                        >
                            <img 
                                src={assets.home_icon} 
                                alt='Dashboard' 
                                className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' 
                            />
                            <p className='text-sm font-medium'>Dashboard</p>
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `
                                flex items-center gap-4 py-3.5 px-4 md:px-6 rounded-lg
                                cursor-pointer transition-all duration-300 ease-in-out
                                ${isActive 
                                    ? 'bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 text-green-600 shadow-sm' 
                                    : 'hover:bg-gray-50 hover:pl-6 hover:text-green-600'
                                }
                            `} 
                            to={'/all-appointments'}
                        >
                            <img 
                                src={assets.appointment_icon} 
                                alt='Appointments' 
                                className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' 
                            />
                            <p className='text-sm font-medium'>Appointments</p>
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `
                                flex items-center gap-4 py-3.5 px-4 md:px-6 rounded-lg
                                cursor-pointer transition-all duration-300 ease-in-out
                                ${isActive 
                                    ? 'bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 text-green-600 shadow-sm' 
                                    : 'hover:bg-gray-50 hover:pl-6 hover:text-green-600'
                                }
                            `} 
                            to={'/add-doctor'}
                        >
                            <img 
                                src={assets.add_icon} 
                                alt='Add Doctors' 
                                className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' 
                            />
                            <p className='text-sm font-medium'>Add Doctors</p>
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `
                                flex items-center gap-4 py-3.5 px-4 md:px-6 rounded-lg
                                cursor-pointer transition-all duration-300 ease-in-out
                                ${isActive 
                                    ? 'bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 text-green-600 shadow-sm' 
                                    : 'hover:bg-gray-50 hover:pl-6 hover:text-green-600'
                                }
                            `} 
                            to={'/doctor-list'}
                        >
                            <img 
                                src={assets.people_icon} 
                                alt='Doctors List' 
                                className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' 
                            />
                            <p className='text-sm font-medium'>Doctors List</p>
                        </NavLink>
                    </ul>

                    {/* Footer/Logout Section */}
                    <div className='absolute bottom-8 left-0 right-0 px-4 md:px-8'>
                        <div className='pt-4 border-t border-gray-200'>
                            <button 
                                onClick={logout}
                                className='flex items-center gap-4 py-3 px-4 w-full rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:pl-6 group'
                            >
                                <svg className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                                </svg>
                                <p className='text-sm font-medium'>Logout</p>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar