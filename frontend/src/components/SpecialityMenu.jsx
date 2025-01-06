import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';

const SpecialityCard = ({ speciality, image }) => (
  <Link
    to={`/doctors/${speciality}`}
    onClick={() => window.scrollTo(0, 0)}
    className="group flex flex-col items-center p-4 rounded-xl 
      hover:bg-gray-50 transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-primary/20"
  >
    <div className="relative mb-4">
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
        rounded-full overflow-hidden bg-gray-100
        transform transition-transform duration-300 
        group-hover:scale-105 group-hover:shadow-lg"
      >
        <img
          src={image}
          alt={speciality}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <p className="text-sm md:text-base text-center text-gray-700 
      group-hover:text-gray-900 transition-colors duration-300
      font-medium"
    >
      {speciality}
    </p>
  </Link>
);

const SpecialityMenu = () => {
  return (
    <section className="py-12 md:py-20" id="speciality">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Find by Speciality
          </h2>
          <p className="text-base text-gray-600">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* Speciality Grid */}
        <div className="relative">
          {/* Mobile Scroll Indicator */}
          <div className="md:hidden absolute -left-4 -right-4 top-0 bottom-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
          </div>

          {/* Scrollable Container */}
          <div className="relative -mx-2">
            <div className="flex gap-2 md:gap-4 overflow-x-auto pb-6 md:pb-0 
              md:flex-wrap md:justify-center scrollbar-hide 
              scroll-smooth snap-x snap-mandatory md:snap-none"
            >
              {specialityData.map((item, index) => (
                <div 
                  key={index}
                  className="snap-start scroll-ml-4 min-w-[140px] md:min-w-0 
                    md:w-40 lg:w-48 flex-shrink-0 px-2"
                >
                  <SpecialityCard
                    speciality={item.speciality}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;