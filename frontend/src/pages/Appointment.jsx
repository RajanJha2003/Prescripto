import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  if (!docInfo) return null;

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Doctor Image */}
        <div className="w-full lg:w-80">
          <div className="relative">
            <img 
              className="w-full h-auto rounded-lg shadow-md object-cover"
              src={docInfo.image}
              alt={`Dr. ${docInfo.name}`}
            />
          </div>
        </div>

        {/* Doctor Information */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            {/* Name and Verification */}
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                {docInfo.name}
              </h1>
              <img 
                className="w-5 h-5" 
                src={assets.verified_icon} 
                alt="Verified"
              />
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>{docInfo.degree}</span>
              <span className="hidden md:inline">-</span>
              <span>{docInfo.speciality}</span>
              <span className="px-2 py-0.5 text-xs border border-gray-300 rounded-full bg-gray-50">
                {docInfo.experience}
              </span>
            </div>

            {/* About Section */}
            <div className="mt-6">
              <div className="flex items-center gap-1 mb-2">
                <h2 className="text-sm font-medium text-gray-900">About</h2>
                <img 
                  className="w-4 h-4" 
                  src={assets.info_icon} 
                  alt="Information"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            {/* Appointment Fee */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm md:text-base">
                <span className="text-gray-600 font-medium">Appointment fee: </span>
                <span className="text-gray-900 font-semibold">
                  {currencySymbol}{docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;