import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-3xl text-center pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p>OUR OFFICE</p>
          <p>MMDU,Mullana<br/>
            Ambala-133207
          </p>
          <p>Tel:+91 123-456-7890<br/> Email:infocurecrafter@mail.com</p>
          <p>Careers at CureCrafter</p>
          <p>Learn more about our team and vission and job openings.</p>
          <button className='bg-green-200 p-4 text-black font-medium rounded-full shadow-lg'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
