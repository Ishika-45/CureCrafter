import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
  const{backendUrl,token,setToken}=useContext(AppContext);
  const [state,setState]=useState('Sign Up');

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[name,setUsername]=useState('');

  const onSubmitHandler=async (event)=>{
    event.preventDefault()
    try{
      if(state === 'Sign Up'){
        const {data} = await axios.post(backendUrl+'/api/user/register',{name,password,email})
        if(data.success){
          localStorage.setItem('token',data.token);
          toast.success('User registered successfully');
          navigate('/')
        }else{
          toast.error(data.message);
        }
        
      }else{
        const {data} = await axios.post(backendUrl+'/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token);
          toast.success('User LoggedIn successfully');
          navigate('/')
        }else{
          toast.error(data.message);
        }
      }
    }catch(error){
      toast.error(error.message);
    }

  }
  
  return (
    <div>
      <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg border-green-200 bg-green-50'>
          <h1 className='text-2xl font-semibold text-center'>{state==='Sign Up'?"Create Account":"Login"}</h1>
          <p className='text-lg font-semibold'>{state==='Sign Up'?"Sign Up":"Login"} to save details.</p>
          {
            state==='Sign Up'&& <div>
            <p className='font-semibold'>Full Name</p>
            <input className='border-zinc-300 rounded-xl shadow-lg w-full p-2 mt-3' type="text" onChange={(e)=>setUsername(e.target.value)} value={name} required />
          </div>
          }
          
          <div>
            <p className='font-semibold'>Email</p>
            <input className='w-full border-zinc-300 rounded-xl shadow-lg p-2 mt-3' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
          </div>
          <div>
            <p className='font-semibold'>Password</p>
            <input className='w-full border-zinc-300 rounded-xl shadow-lg p-2 mt-3' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
          </div>
          <button type='submit' className='w-full text-center bg-green-300 p-2 rounded-full mt-3 shadow-lg text-lg font-medium hover:translate-y-[-5px] transition-all duration-200'>{state==='Sign Up'?"Sign Up":"Login"}</button>
          {
            state==='Sign Up'?<p className='text-sm text-center mt-3'>Already have account? <span onClick={()=>setState('Login')} className='text-blue-400 underline cursor-pointer'>Login here</span></p>:
            <p className='text-sm text-center mt-3'>Don't have account? <span onClick={()=>setState('Sign Up')} className='text-blue-400 underline cursor-pointer'>Sign Up</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
