import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import DoctorsList from './pages/Admin/DoctorsList';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';

const App = () => {
  const { adminToken } = useContext(AdminContext);

  return (
    <>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      {adminToken ? (
        <div className='flex flex-col min-h-screen bg-gray-50'>
          <Navbar />
          <div className='flex flex-1'>
            <Sidebar />
            <main className='flex-1 p-4 md:p-6 overflow-auto ml-60 md:ml-72'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/admin-dashboard' element={<Dashboard />} />
                <Route path='/all-appointments' element={<AllAppointments />} />
                <Route path='/add-doctor' element={<AddDoctor />} /> 
                <Route path='/doctor-list' element={<DoctorsList />} /> 
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default App