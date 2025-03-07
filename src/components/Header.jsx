import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-green-200 rounded-lg px-6 md:px-10 lg:px-20'>
      
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>Welcome To CureCrafter<br/>
        Book Appointments or Chat with bot
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-medium'>
            <img className='w-28' src={assets.group_profiles}/>
            <p>Simply browse through our extensive list of trusted doctors,<br/>
                schedule your appointment or chat with our home-remedy chatbot.
            </p>
           
        </div>
        <div className='mt-2 flex gap-3'><a className="flex items-center gap-2 bg-white px-8 rounded-full text-gray-600 text-md m-auto md:m-0 hover:scale-105 transition-all duration-300" href="/chat">
                Chat with bot <img className="w-3" src={assets.arrow_icon}/>
            </a>
            <a className="flex items-center gap-2 bg-white px-8 rounded-full text-gray-600 text-md m-auto md:m-0 hover:scale-105 transition-all duration-300" href='#speciality'>
                Book Appointment <img className='w-3' src={assets.arrow_icon}/>
            </a>
            </div>
        
      </div>

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img}/>
      </div>

    </div>
  )
}

export default Header
