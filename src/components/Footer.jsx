import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <div className='mb-5 flex items-center'>
                <img className='w-20' src={assets.logo}/>
                <p className='text-3xl font-medium'>CureCrafter</p>
            </div>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>Chat</li>
                <li>All Doctors</li>
                <li>About Us</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Phone: 123-456-7890</li>
                <li>info@curecrafter.com</li>
            </ul>
        </div>
      </div>
      <div className='border-t-2 border-t-black'>
        <p className='py-5 text-sm text-center'>Copyright 2024 @ CureCrafter - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
