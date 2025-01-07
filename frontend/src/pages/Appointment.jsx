import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(23, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => ([...prev, timeSlots]));
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Doctor Profile Card */}
        <div className="w-full lg:w-96">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                className="w-full h-full object-cover"
                src={docInfo.image}
                alt={`Dr. ${docInfo.name}`}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <h1 className="text-2xl font-bold text-gray-900">
                  {docInfo.name}
                </h1>
                <img 
                  className="w-6 h-6" 
                  src={assets.verified_icon} 
                  alt="Verified"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
                  {docInfo.degree}
                </span>
                <span className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full">
                  {docInfo.speciality}
                </span>
                <span className="px-3 py-1 text-sm bg-purple-50 text-purple-700 rounded-full">
                  {docInfo.experience}
                </span>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-900">
                  {currencySymbol}{docInfo.fees}
                  <span className="text-sm text-gray-600 ml-2">per consultation</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Select Appointment Time
            </h2>
            
            {/* Date Selection */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {docSlots.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    slotIndex === index
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm font-medium">
                    {item[0] && daysOfWeek[item[0].dateTime.getDay()]}
                  </span>
                  <span className="text-lg font-bold mt-1">
                    {item[0] && item[0].dateTime.getDate()}
                  </span>
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Available Times
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(item)}
                    className={`px-4 py-3 text-sm rounded-lg transition-all ${
                      selectedSlot === item
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.time.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Appointment Button */}
            {selectedSlot && (
              <button className="w-full mt-8 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Book Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;