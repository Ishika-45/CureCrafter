import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-md ' src={assets.about_image}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non nobis cumque molestias facilis aut at ut, inventore velit eius nesciunt labore unde quod eaque quas quae corporis vel odio?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo? Iusto animi voluptas ratione excepturi asperiores provident? Repellendus excepturi numquam, rerum hic dicta eaque inventore doloremque. Sapiente corrupti ad reprehenderit.</p>
          <b className='text-gray-800'>Our Vission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate explicabo officia cumque reprehenderit. Expedita saepe quam, quo, ad beatae officiis fugit magni corporis incidunt doloremque esse quisquam obcaecati totam?</p>
        </div>
      </div>
    </div>
  )
}

export default About
