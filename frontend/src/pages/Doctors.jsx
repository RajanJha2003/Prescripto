import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (doctors && doctors.length > 0) {
      if (speciality) {
        const filtered = doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase());
        setFilterDoc(filtered);
      } else {
        setFilterDoc(doctors);
      }
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p>Browse through specialist doctors.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              >
                <img className='bg-blue-50' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
