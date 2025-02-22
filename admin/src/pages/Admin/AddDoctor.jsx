import React from "react";
import { assets } from "../../assets/assets_admin/assets";

const AddDoctor = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add New Doctor</h1>
      <form className="w-full">
        <div className="bg-white px-8 py-8 shadow-lg rounded-lg w-full max-w-4xl max-h-[85vh] overflow-y-auto">
          {/* Upload Section */}
          <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-100">
            <label htmlFor="doc-img" className="relative group cursor-pointer">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-gray-100">
                <img className="w-12 opacity-70 group-hover:opacity-100 transition-opacity" src={assets.upload_area} alt="" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm text-gray-500">Upload</span>
              </div>
            </label>
            <input type="file" id="doc-img" className="hidden" />
            <div>
              <p className="text-gray-700 font-medium mb-1">Profile Picture</p>
              <p className="text-sm text-gray-500">Upload a professional photo of the doctor</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 text-gray-600">
            {/* Left Column */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Doctor Name</label>
                <input 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  type="text" 
                  placeholder="Enter full name" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  type="email" 
                  placeholder="doctor@example.com" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  type="password" 
                  placeholder="Enter secure password" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Experience</label>
                <select 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 appearance-none cursor-pointer" 
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={`${i + 1} Year`}>{i + 1} Year{i !== 0 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Consultation Fee</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input 
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                    type="number" 
                    placeholder="Amount" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Speciality</label>
                <select 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="General Physician">General Physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Education</label>
                <input 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  type="text" 
                  placeholder="Educational qualifications" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Address</label>
                <input 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  type="text" 
                  placeholder="Street address" 
                  required 
                />
                <input 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">About Doctor</label>
                <textarea 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200" 
                  placeholder="Write a brief description about the doctor's background and expertise" 
                  rows={4} 
                  required 
                />
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-4">
            <button 
              type="button"
              className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2.5 bg-[#5f6FFF] text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Add Doctor
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;