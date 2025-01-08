import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MapPin, Clock, CreditCard, XCircle } from 'lucide-react';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
        </div>

        <div className="space-y-6">
          {doctors.slice(0, 2).map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-blue-600 font-medium mb-4">
                    {item.speciality}
                  </p>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-gray-600 font-medium">Address:</p>
                      <p className="text-gray-500">{item.address.line1}</p>
                      <p className="text-gray-500">{item.address.line2}</p>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600 font-medium mr-2">
                        Date & Time:
                      </span>
                      <span className="text-gray-500">
                        27 July 2024 | 8:30 pm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 md:justify-center">
                  <button className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Online
                  </button>
                  <button className="inline-flex items-center justify-center px-6 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                    <XCircle className="w-4 h-4 mr-2" />
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;