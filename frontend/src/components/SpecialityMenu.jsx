import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';

const SpecialityMenu = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16" id="speciality">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800">
          Find by Speciality
        </h1>
        <p className="text-sm text-center text-gray-600 max-w-xs md:max-w-md lg:max-w-lg">
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center scrollbar-hide">
          {specialityData.map((item, index) => (
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="flex flex-col items-center min-w-[100px] md:min-w-[120px] lg:min-w-[150px] p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-2 overflow-hidden rounded-full group-hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.speciality}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs md:text-sm text-center text-gray-700 group-hover:text-gray-900">
                {item.speciality}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;