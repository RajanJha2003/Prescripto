import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const SpecialtyButton = ({ name, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full sm:w-64 px-4 py-2.5 text-left border rounded-lg transition-all duration-300 hover:bg-indigo-50
      ${isSelected 
        ? "border-indigo-200 bg-indigo-100 text-indigo-900 font-medium" 
        : "border-gray-200 text-gray-700 hover:border-indigo-200"
      }`}
  >
    {name}
  </button>
);

const DoctorCard = ({ doctor, onClick }) => (
  <div
    onClick={onClick}
    className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer 
      transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:translate-y-[-4px]"
  >
    <div className="aspect-w-4 aspect-h-3 overflow-hidden">
      <img 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        src={doctor.image} 
        alt={doctor.name} 
      />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm text-green-600 font-medium">Available</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
      <p className="text-sm text-gray-600">{doctor.speciality}</p>
    </div>
  </div>
);

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const specialties = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ];

  const applyFilter = () => {
    if (doctors?.length > 0) {
      if (speciality) {
        const filtered = doctors.filter(doc => 
          doc.speciality.toLowerCase() === speciality.toLowerCase()
        );
        setFilterDoc(filtered);
      } else {
        setFilterDoc(doctors);
      }
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialtyClick = (specialty) => {
    if (speciality === '') {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${specialty}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Find Doctors</h1>
      <p className="text-gray-600 mb-8">Browse through specialist doctors for your needs.</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Specialties Sidebar */}
        <div className="w-full lg:w-64 flex flex-col gap-3">
          {specialties.map((specialty) => (
            <SpecialtyButton
              key={specialty}
              name={specialty}
              isSelected={speciality === specialty}
              onClick={() => handleSpecialtyClick(specialty)}
            />
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="flex-1">
          {filterDoc.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDoc.map((doctor, index) => (
                <DoctorCard
                  key={doctor._id || index}
                  doctor={doctor}
                  onClick={() => navigate(`/appointment/${doctor._id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">No doctors found in this specialty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;