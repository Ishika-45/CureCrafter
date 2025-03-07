import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

function RelatedDoctors({speciality,docId}) {
    const {doctors} =useContext(AppContext);
    const [relDoc,setRelDocs]=useState([])
    const navigate=useNavigate();
    useEffect(() => {
      if(doctors.length > 0 && speciality){
        const doctorData=doctors.filter((doc)=>doc.speciality===speciality && doc._id!==docId)
        setRelDocs(doctorData);
      }
    },[doctors,speciality,docId])
  return (
<div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Related Doctors</h1>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0,5).map((item,index)=>(
           <div onClick={()=>{navigate(`/doctrs/${item._id}`);scrollTo(0,0)}} className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-green-50 hover:bg-green-400 transition-all duration-300' src={item.image} alt={item.name} />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-600 rounded-full'></p><p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
           </div> 
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-green-50 text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300'>More</button>
    </div>
  )
}

export default RelatedDoctors
