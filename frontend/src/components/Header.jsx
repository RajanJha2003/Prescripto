import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
      {/* Left side - Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 py-8 md:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight text-center md:text-left">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
          <img
            className="w-20 sm:w-24" // Reduced from w-24 sm:w-28
            src={assets.group_profiles}
            alt="Doctor Profiles"
          />
          <p className="text-sm font-light text-center md:text-left max-w-sm">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hustle-free
          </p>
        </div>
        
        <a
          href="#speciality"
          className="inline-flex items-center gap-2 bg-white px-6 sm:px-8 py-3 rounded-full
                    text-gray-600 hover:scale-105 transition-all duration-300
                    shadow-md hover:shadow-lg"
        >
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <div className="aspect-w-16 aspect-h-12 md:aspect-h-14 lg:aspect-h-13">
          <img
            className="w-3/4 md:w-4/5 h-auto object-cover object-center rounded-lg  // Changed from to and
                      shadow-lg md:shadow-xl mx-auto" // Added mx-auto to center the smaller image
            src={assets.header_img}
            alt="Header"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;