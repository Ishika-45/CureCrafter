import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

function Appointments() {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(null);
  const [slotTime, setSlotTime] =useState('');

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const fetchDocInfo = () => {
    if (doctors && doctors.length > 0) {
      const docInfo = doctors.find(doc => doc._id === docId);
      setDocInfo(docInfo);
    }
  };

  const getAvailableSlots = () => {
    setSlot([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setSlot(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    if (doctors && docId) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) {
    return <p>Loading doctor information...</p>;
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-green-400 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="Verified" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="Info" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fees: <span className='text-grey-600'>${docInfo.fees}</span>
          </p>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Book slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-green-100 text-black' : 'border border-gray-200'}`}
                key={index}
                onClick={() => setSlotIndex(index)}
              >
                <p className='font-semibold'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>
        {slotIndex !== null && docSlots[slotIndex] && (
          <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
            {docSlots[slotIndex].map((item, index) => (
              <p onClick={()=>setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time ===slotTime ? 'bg-green-100 text-black':'text-gray-400 border border-gray-300'}`}>
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>
        )}
        <button className='bg-green-300 text-black text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
}

export default Appointments;
