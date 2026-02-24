import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form className='p-6 bg-white rounded-md shadow-md m-6 w-full max-w-lg'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='mt-6 flex flex-col gap-4 px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor='doc-img'>
            <img src={assets.upload_area} alt='' className='w-16 bg-gray-400 rounded-full' />
          </label>
          <input type='file' id='doc-img' className='hidden' />
          <p>Upload doctor picture</p>

        </div>

        <div>
          <div>
            <div>
              <p>Doctor name</p>
              <input type='text' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter full name' />
            </div>

            <div>
              <p>Doctor Email</p>
              <input type='email' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter email address' />
            </div>

            <div>
              <p>Doctor password</p>
              <input type='password' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter password' />
            </div>

            <div>
              <p>Experience</p>
              <select className='border px-3 py-2 rounded-md w-full mt-2' name='' id=''> 
                <option value=''>Select experience</option>
                <option value='1'>1 year</option>
                <option value='2'>2 years</option>  
                <option value='3'>3 years</option>
                <option value='4'>4 years</option>
                <option value='5'>5 years</option>
              </select>
            </div>

            <div>
              <p>Fees</p>
              <input type='number' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter your fees' />
            </div>
          </div>

          <div>
            <div>
              <p>Specialization</p>
              <select className='border px-3 py-2 rounded-md w-full mt-2' name='' id=''>  
                <option value=''>Select specialization</option>
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div>
              <p>Education</p>
              <input type='text' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter your education details' />
            </div>

            <div>
              <p>Address</p>
              <input type='text' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter your address1' />
              <input type='text' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter your address2' />
            </div>
            
            <div>
              <p>About Doctor</p>
              <input type='text' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Write about doctor' aria-rowspans={5} required/>
            </div>
            
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Add Doctor</button>
          </div>
        </div>


         
        
      </div>
    </form>
  )
}

export default AddDoctor
