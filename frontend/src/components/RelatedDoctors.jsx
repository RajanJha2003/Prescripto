import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const DoctorCard = ({ doctor, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white border border-blue-100 rounded-xl overflow-hidden cursor-pointer
      transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:translate-y-[-8px]"
  >
    <div className="aspect-w-3 aspect-h-2 overflow-hidden">
      <img
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        src={doctor.image}
        alt={doctor.name}
      />
    </div>
    <div className="p-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="text-sm font-medium text-green-600">Available</span>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {doctor.name}
        </h3>
        <p className="text-sm text-gray-600">{doctor.speciality}</p>
      </div>
    </div>
  </div>
);

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  
  useEffect(() => {
    if (doctors?.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  const handleViewMore = () => {
    // Navigate to doctors listing page or handle view more logic
    navigate('/doctors');
  };

  // If no related doctors found, don't render the section
  if (relDoc.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Top Doctors to Book
          </h2>
          <p className="text-base text-gray-600">
            Simply browse through our extensive list of trusted doctors
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {relDoc.slice(0, 4).map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                scrollTo(0,0)
              }}
            />
          ))}
        </div>

        {/* View More Button - Only show if there are more than 4 doctors */}
        {relDoc.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center px-8 py-3 rounded-full
                bg-blue-50 text-gray-700 font-medium
                hover:bg-blue-100 hover:text-gray-900
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              View More Doctors
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedDoctors;