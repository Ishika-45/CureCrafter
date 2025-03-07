import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
function Navbar() {
    const navigate=useNavigate();
    const {token,setToken}=useContext(AppContext);
    const[showMenu, setMenu] =useState(false);
    const logout =()=>{
      setToken(null);
      localStorage.removeItem('token');
      toast.success("User Logged Out")
    }
    useEffect(() => {
      setToken(localStorage.getItem('token'));
    }, []);
    
  return (
    <div className='sticky top-0 bg-green-100 z-1000 flex items-center justify-between text-md py-4 px-3 mb-4 shadow-lg'>
      <div className='flex items-center'>
        <img onClick={()=>navigate('/')} className=' cursor-pointer w-10' src={assets.logo}/>
      <p onClick={()=>navigate('/')} className='text-md font-medium cursor-pointer'>CureCrafter</p></div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
      <NavLink to='/'className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-full bg-green-500 text-white"
              : "px-3 py-2 rounded-full hover:bg-green-200 transition-all"
          }>
        <li>Home</li>
      </NavLink >
      <NavLink to='/chat' className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-full bg-green-500 text-white"
              : "px-3 py-2 rounded-full hover:bg-green-200 transition-all"
          }>
        <li>Chatbot</li>
      </NavLink>
      <NavLink to='/doctors'className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-full bg-green-500 text-white"
              : "px-3 py-2 rounded-full hover:bg-green-200 transition-all"
          }>
        <li>All Doctors</li>
      </NavLink>
      <NavLink to='about' className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-full bg-green-500 text-white"
              : "px-3 py-2 rounded-full hover:bg-green-200 transition-all"
          }>
        <li>About</li>
      </NavLink>
      <NavLink to='contact' className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-full bg-green-500 text-white"
              : "px-3 py-2 rounded-full hover:bg-green-200 transition-all"
          }>
        <li>ContactUs</li>
      </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                
                <img className='w-8 rounded-full' src={assets.profile_pic}/>
                <img className='w-2.5' src={assets.dropdown_icon}/>
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-grey-600 hidden z-20  group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <button onClick={logout}><p  className='hover:text-black cursor-pointer'>Logout</p></button>        
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='px-3 py-2 rounded-full bg-green-500 text-white hidden md:block'>Create account</button>
        }
        <img onClick={()=>setMenu(true)} className='w-6 md:hidden' src={assets.menu_icon}/>
        <div className={`${showMenu? 'fixed  w-full':'hidden'} md:hidden right-0 top-0 p-4 bottom-0 z-20 overflow-hidden bg-white  transition-all`}>
          <div className='flex items-center justify-end px-5 py-6'>
            <img onClick={()=>setMenu(false)} className='w-6 md:hidden' src={assets.cross_icon}/>
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <li><NavLink onClick={()=>showMenu(false)}  to='/'>Home</NavLink></li>
            <li><NavLink onClick={()=>showMenu(false)}  to='/chat'>Chat</NavLink></li>
            <li><NavLink onClick={()=>showMenu(false)}  to='/doctors'>All Doctors</NavLink></li>
            <li><NavLink onClick={()=>showMenu(false)}  to='/about'>About Us</NavLink></li>
            <li><NavLink onClick={()=>showMenu(false)}  to='/contact'>ContactUs</NavLink></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
