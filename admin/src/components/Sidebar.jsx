import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';

const Sidebar = () => {

    const {adminToken} = useContext(AdminContext);
  return (
    <div className='min-h-screen bg-white shadow-md px-2 md:px-0 py-6 w-60 md:w-72'>
      {
        adminToken && <ul className='text-[#515151] mt-5' >
            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#e6f5ee] border-r-4 border-green-500' : ''}`} to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt='' />
                <p>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#e6f5ee] border-r-4 border-green-500' : ''}`} to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt='' />
                <p>Appointments</p>
            </NavLink>

            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#e6f5ee] border-r-4 border-green-500' : ''}`} to={'/add-doctor'}>
                <img src={assets.add_icon} alt='' />
                <p>Add Doctors</p>
            </NavLink>

            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#e6f5ee] border-r-4 border-green-500' : ''}`} to={'/doctor-list'}>
                <img src={assets.people_icon} alt='' />
                <p>Doctors List</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar