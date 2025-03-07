import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chat from './pages/Chat'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <ToastContainer/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:speciality" element={<Doctors/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/myprofile" element={<Profile/>}/> 
        <Route path="/doctrs/:docId" element={<Appointments/>}/> 
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
