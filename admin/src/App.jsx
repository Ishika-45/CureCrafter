import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import DoctorsList from './pages/Admin/DoctorsList';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';

const App = () => {


  const { adminToken } = useContext(AdminContext);

  return(
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      {adminToken ?  (
    
        <div className='bg-green-100'>
          <Navbar />
          <div className='flex items-start'>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<></>} />
              <Route path='/admin-dashboard' element={<Dashboard/>} />
              <Route path='/all-appointments' element={<AllAppointments />} />
              <Route path='/add-doctor' element={<AddDoctor />} /> 
              <Route path='/doctor-list' element={<DoctorsList />} /> 
            </Routes>

          </div>
        </div>
        ) : (
              <>
                <Login />
      
              </>
            )
      }    
    </>

  ) 
}

export default App
