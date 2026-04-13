import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [education, setEducation] = useState('');
  const [address, setAddress] = useState({ line1: '', line2: '' });
  const [about, setAbout] = useState('');

  const {backendURL, adminToken} = useContext(AdminContext )

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log({
      docImg,
      name,
      email,
      password,
      experience,
      fees,
      specialization,
      education,
      address,
      about
    });


    try {
      if(!docImg || !name || !email || !password || !experience || !fees || !specialization || !education || !address.line1 || !about) {
        toast.error("Please fill all required fields");
        return;
      }
      const formData = new FormData();
      formData.append('docImg', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', fees);
      formData.append('specialization', specialization);
      formData.append('education', education);
      formData.append("address", JSON.stringify(address));
      formData.append('about', about);

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
  const response = await fetch("http://localhost:4000/api/admin/add-doctor", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${adminToken}`
  },
  body: formData
});

const data = await response.json();

if (response.ok) {
  console.log('Doctor added successfully:', data);
  toast.success("Doctor added successfully");

  // Reset form
  setDocImg(false);
  setName('');
  setEmail('');
  setPassword('');
  setExperience('');
  setFees('');
  setSpecialization('');
  setEducation('');
  setAddress({ line1: '', line2: '' });
  setAbout('');

} else {
  console.error('Error adding doctor:', data);
  toast.error(data.message || "Failed to add doctor");
}

} catch (error) {
  console.log("ERROR:", error);
}
  }

  return (
    <form onSubmit={onSubmitHandler} className='bg-white rounded-md shadow-md w-full max-w-4xl'>
      <p className='text-lg font-medium p-6 border-b'>Add Doctor</p>

      <div className='p-6 max-h-[80vh] overflow-y-auto'>
        <div className='flex flex-col gap-4'>
          {/* Image Upload */}
          <div className='flex items-center gap-4 mb-4 text-gray-500'>
            <label htmlFor='doc-img' className='cursor-pointer'>
              <img 
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} 
                alt='' 
                className='w-20 h-20 bg-gray-200 rounded-full object-cover border-2 border-gray-300 hover:border-green-400 transition-colors' 
              />
            </label>
            <input 
              type='file' 
              id='doc-img' 
              className='hidden' 
              onChange={(e) => setDocImg(e.target.files[0])}
              accept='image/*'
            />
            <div>
              <p className='font-medium'>Upload doctor picture</p>
              <p className='text-sm text-gray-400'>Click on image to upload</p>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Left Column */}
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Doctor name <span className='text-red-500'>*</span></label>
                <input 
                  type='text' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='Enter full name'
                  required
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Doctor Email <span className='text-red-500'>*</span></label>
                <input 
                  type='email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='Enter email address'
                  required
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Doctor password <span className='text-red-500'>*</span></label>
                <input 
                  type='password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='Enter password'
                  required
                  minLength={6}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Experience <span className='text-red-500'>*</span></label>
                <select 
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200'
                  required
                > 
                  <option value=''>Select experience</option>
                  <option value='1'>1 year</option>
                  <option value='2'>2 years</option>  
                  <option value='3'>3 years</option>
                  <option value='4'>4 years</option>
                  <option value='5'>5 years</option>
                  <option value='6'>6 years</option>
                  <option value='7'>7 years</option>
                  <option value='8'>8 years</option>
                  <option value='9'>9 years</option>
                  <option value='10'>10+ years</option>
                </select>
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Fees <span className='text-red-500'>*</span></label>
                <input 
                  type='number' 
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='Enter consultation fees'
                  required
                  min="0"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Specialization <span className='text-red-500'>*</span></label>
                <select 
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200'
                  required
                >  
                  <option value=''>Select specialization</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Orthopedic">Orthopedic</option>
                </select>
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>Education <span className='text-red-500'>*</span></label>
                <input 
                  type='text' 
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='e.g., MBBS, MD'
                  required
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium'>Address <span className='text-red-500'>*</span></label>
                <input 
                  type='text' 
                  value={address.line1}
                  onChange={(e) => setAddress({...address, line1: e.target.value})}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='Enter address line 1'
                  required
                />
                <input 
                  type='text' 
                  value={address.line2}
                  onChange={(e) => setAddress({...address, line2: e.target.value})}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200' 
                  placeholder='Enter address line 2 (optional)'
                />
              </div>
              
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium'>About Doctor <span className='text-red-500'>*</span></label>
                <textarea 
                  rows={4}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className='border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-200 resize-none' 
                  placeholder='Write about doctor qualifications, experience, expertise...'
                  required
                />
              </div>
            </div>
          </div>

          <div className='flex justify-end gap-3 mt-6 pt-4 border-t'>
            <button 
              type='button'
              className='px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200'
              onClick={() => {
                // Reset form
                setDocImg(false);
                setName('');
                setEmail('');
                setPassword('');
                setExperience('');
                setFees('');
                setSpecialization('');
                setEducation('');
                setAddress({ line1: '', line2: '' });
                setAbout('');
              }}
            >
              Reset
            </button>
            <button 
              type='submit'
              className='bg-green-400 text-white px-8 py-2 rounded-md hover:bg-green-600 transition-colors duration-200'
            >
              Add Doctor
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddDoctor