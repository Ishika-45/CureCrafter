import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Doctors() {
  const {speciality} =useParams();
  const[filterDoc, setFilterDoc]=useState([]);
  const {doctors}=useContext(AppContext);
  const navigate=useNavigate();
  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  };
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality]);
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors speacilist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-1 text-sm text-gray-600'>
          <p onClick={()=>speciality==='General Physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md shadow-md transition-all cursor-pointer ${speciality==="General physician" ?"bg-green-50 text-black":""}`}>General Physician</p>
          <p onClick={()=>speciality==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md shadow-md transition-all cursor-pointer ${speciality==="Gynecologist" ?"bg-green-50 text-black":""}`}>Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md shadow-md transition-all cursor-pointer ${speciality==="Dermatologist" ?"bg-green-50 text-black":""}`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md shadow-md transition-all cursor-pointer ${speciality==="Pediatricians" ?"bg-green-50 text-black":""}`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md shadow-md transition-all cursor-pointer ${speciality==="Neurologist" ?"bg-green-50 text-black":""}`}>Neurologist</p>
          <p onClick={()=>speciality==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md shadow-md transition-all cursor-pointer ${speciality==="Gastroenterologist" ?"bg-green-50 text-black":""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/doctrs/${item._id}`)} className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
               <img className='bg-green-50 hover:bg-green-400 transition-all duration-300' src={item.image} alt={item.name} />
               <div className='p-4'>
                   <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                       <p className='w-2 h-2 bg-green-600 rounded-full'></p><p>Available</p>
                   </div>
                   <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                   <p className='text-gray-600 text-sm'>{item.speciality}</p>
               </div>
              </div> 
           ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
