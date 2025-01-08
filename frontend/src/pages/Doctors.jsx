import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ChevronDown } from 'lucide-react';

const SpecialtyButton = ({ name, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2.5 text-left border rounded-lg transition-all duration-300 hover:bg-indigo-50
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
    <div className="relative pt-[75%]">
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    setIsFilterOpen(false); // Close mobile filter after selection
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Find Doctors</h1>
          <p className="text-gray-600">Browse through specialist doctors for your needs.</p>
        </div>

        {/* Mobile Filter Button */}
        <button
          className="lg:hidden w-full mb-4 px-4 py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-between"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span className="font-medium text-gray-700">
            {speciality || "Select Specialty"}
          </span>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Specialties Sidebar - Mobile Dropdown */}
          <div className={`lg:w-64 space-y-3 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="sticky top-4 space-y-3">
              {specialties.map((specialty) => (
                <SpecialtyButton
                  key={specialty}
                  name={specialty}
                  isSelected={speciality === specialty}
                  onClick={() => handleSpecialtyClick(specialty)}
                />
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="flex-1">
            {filterDoc.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filterDoc.map((doctor, index) => (
                  <DoctorCard
                    key={doctor._id || index}
                    doctor={doctor}
                    onClick={() => navigate(`/appointment/${doctor._id}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500 text-lg">No doctors found in this specialty.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;