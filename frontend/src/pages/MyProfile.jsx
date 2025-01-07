import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Calendar, 
  Camera,
  ChevronRight,
  Shield,
  Bell,
  Clock,
  Save,
  Edit2
} from 'lucide-react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Rajan Jha',
    image: assets.profile_pic,
    email: 'rajan@gmail.com',
    phone: '+1 373 4848',
    address: {
      line1: '57 hhd hbhc',
      line2: 'Circle lonfon'
    },
    gender: 'Male',
    dob: '2003-08-17'
  });
  
  const [editedData, setEditedData] = useState(userData);

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  const ProfileSection = ({ title, children }) => (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
      {children}
    </div>
  );

  const InfoField = ({ icon: Icon, label, value, name, type = "text" }) => (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-500">{label}</p>
        {isEditing ? (
          <input
            type={type}
            value={value}
            onChange={(e) => {
              if (name.includes('.')) {
                const [parent, child] = name.split('.');
                setEditedData({
                  ...editedData,
                  [parent]: { ...editedData[parent], [child]: e.target.value }
                });
              } else {
                setEditedData({ ...editedData, [name]: e.target.value });
              }
            }}
            className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <p className="text-gray-900 font-medium">{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Profile Header with Edit/Save Buttons */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={editedData.image}
                  alt={editedData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{editedData.name}</h1>
                  <p className="text-gray-500">{editedData.email}</p>
                </div>
                <div className="flex gap-3">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <ProfileSection title="Personal Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoField 
                  icon={User} 
                  label="Gender" 
                  value={editedData.gender}
                  name="gender"
                />
                <InfoField 
                  icon={Calendar} 
                  label="Date of Birth" 
                  value={editedData.dob}
                  name="dob"
                  type="date"
                />
                <InfoField 
                  icon={Phone} 
                  label="Phone" 
                  value={editedData.phone}
                  name="phone"
                />
                <InfoField 
                  icon={Mail} 
                  label="Email" 
                  value={editedData.email}
                  name="email"
                  type="email"
                />
              </div>
            </ProfileSection>

            {/* Address Information */}
            <ProfileSection title="Address Information">
              <div className="space-y-4">
                <InfoField 
                  icon={MapPin} 
                  label="Address Line 1" 
                  value={editedData.address.line1}
                  name="address.line1"
                />
                <InfoField 
                  icon={MapPin} 
                  label="Address Line 2" 
                  value={editedData.address.line2}
                  name="address.line2"
                />
              </div>
            </ProfileSection>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <ProfileSection title="Account Settings">
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Security Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Notifications</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Appointment History</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </ProfileSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;