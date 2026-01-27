import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form className='p-6 bg-white rounded-md shadow-md m-6 w-full max-w-lg'>
      <p>Add Doctor</p>

      <div className='mt-6 flex flex-col gap-4'>
        <div>
          <label htmlFor='doc-img'>
            <img src={assets.upload_area} alt='' />
          </label>
          <input type='file' id='doc-img' className='hidden' />
          <p>Upload doctor <br/> picture</p>

        </div>

        <div>
          <div>
            <div>
              <p>Your name</p>
              <input type='text' className='border px-3 py-2 rounded-md w-full mt-2' placeholder='Enter full name' />
            </div>
          </div>
        </div>


         
        
      </div>
    </form>
  )
}

export default AddDoctor
