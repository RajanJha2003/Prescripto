import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative bg-primary rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        
        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-semibold leading-tight">
              Book Appointment <br className="hidden sm:block" />
              With Trusted Doctors
            </h1>

            {/* Doctor Profiles Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <img
                  className="w-20 sm:w-24 h-auto object-contain"
                  src={assets.group_profiles}
                  alt="Doctor Profiles"
                />
              </div>
              <p className="text-white/90 text-sm sm:text-base font-light max-w-sm">
                Simply browse through our extensive list of trusted doctors,{' '}
                <br className="hidden lg:block" />
                schedule your appointment hustle-free
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#speciality"
              className="group inline-flex items-center gap-2 bg-white px-8 py-3.5 rounded-full
                text-gray-800 font-medium transition-all duration-300
                hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-100
                shadow-md shadow-black/5"
            >
              Book Appointment
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl lg:max-w-none">
              <div className="aspect-w-16 aspect-h-12 lg:aspect-h-13">
                <img
                  className="w-4/5 h-auto object-cover rounded-2xl shadow-xl mx-auto
                    transform transition-transform duration-500 hover:scale-105"
                  src={assets.header_img}
                  alt="Doctor with patient"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent 
                rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;