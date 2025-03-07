import React, { useState } from 'react'
import {assets} from '../assets/assets'

function Profile() {
  
  const[userData,setUserData]=useState({
    name:"John Doe",
    image:assets.profile_pic,
    email:"johndoe3@gmail.com",
    phone:"1234567890",
    address:{
      line1:"57th Cross,Richmond",
      line2:"Bangalore",
    },
    gender:'Male',
    dob:'1990-01-01',
  });
  const[isEdit,setEdit]=useState(false);
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img  className='w-40 rounded-full' src={userData.image} alt=""/>
    {
      isEdit?
      <input className='bg-gray-50 p-2 rounded-full  text-3xl font-medium max-w-full mt-4' type="text"value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))}/>
      :<p className='font-medium text-3xl text-neutral mt-4'>{userData.name}</p>
    }
    <hr className='bg-zinc-400 h-[1px] border-none'/>
    <div>
      <p className='text-neutral-500 underline mt-3 text-xl'>Personal Info</p>
      <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
        <p className='font-medium'>Email id:</p>
        <p className='text-blue-500'>{userData.email}</p>
        <p className='font-medium'>Phone:</p>
        {
      isEdit?
      <input type="text" className='bg-gray-50 p-1 rounded-full' value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))}/>
      :<p className='text-blue-400'>{userData.phone}</p>
       }
       <p className='font-medium'>Address:</p>
       {
          isEdit
          ?
        <p>
          <input type="text" className='bg-gray-50 rounded-full p-1 mb-1' value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address,line1:e.target.value}))} />
        <br/>
        <input type="text" className='bg-gray-50 rounded-full p-1' value={userData.address.line2} onChange={(e)=>setUserData(prev=>({...prev,address,line2:e.target.value}))} />
        </p>
        :<p className='text-gray-500'>
          {userData.address.line1}
          <br/>
          {userData.address.line2}
        </p>
       }
       <p className='font-medium'>Gneder:</p>
       {
        isEdit
        ?<select className='bg-gray-50 rounded-full p-1' onChnage={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="not specified">Not specified</option>
        </select>:
        <p className='text-gray-500'>{userData.gender}</p>
       }
       <p className='font-medium'>Date of Birth:</p>
       {
        isEdit
        ?<input className='bg-gray-50 rounded-full p-1' type='date' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))}></input>
        :<p className='text-gray-500'>{userData.dob}</p>
       }
      </div>
    </div>
    <div>
      {
        isEdit
        ?<button className='mt-4 max-w-60 rounded-full p-3 text-lg font-medium bg-green-200' onClick={()=>setEdit(false)}>Save Information</button>
        :<button className='mt-4 max-w-60 rounded-full p-3 text-lg font-medium bg-green-200' onClick={()=>setEdit(true)}>Edit Information</button>
      }
    </div>
    </div>
  )
}

export default Profile
