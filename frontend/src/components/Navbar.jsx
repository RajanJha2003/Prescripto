import React, { useState, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `group relative px-3 py-2 transition-colors duration-200 hover:text-primary
      ${isActive ? 'text-primary' : 'text-gray-700'}`
    }
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </NavLink>
);

const ProfileDropdown = ({ onNavigate, onLogout }) => (
  <div className="absolute top-full right-0 mt-2 py-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 animate-fadeIn">
    <button
      onClick={() => onNavigate('/my-profile')}
      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
    >
      My Profile
    </button>
    <button
      onClick={() => onNavigate('/my-appointments')}
      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
    >
      My Appointments
    </button>
    <div className="h-px bg-gray-100 my-2" />
    <button
      onClick={onLogout}
      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors duration-200"
    >
      Logout
    </button>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [token, setToken] = useState(true);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/doctors", label: "ALL DOCTORS" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" }
  ];

  const handleNavigate = useCallback((path) => {
    navigate(path);
    setShowMenu(false);
    setShowProfileDropdown(false);
  }, [navigate]);

  const handleLogout = useCallback(() => {
    setToken(false);
    setShowProfileDropdown(false);
    setShowMenu(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="h-8 w-auto cursor-pointer"
              src={assets.logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.path} to={item.path}>
                {item.label}
              </NavItem>
            ))}
          </div>

          {/* Desktop Profile/Login */}
          <div className="hidden md:flex items-center">
            {token ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={assets.profile_pic}
                    alt="Profile"
                  />
                  <ChevronDown 
                    size={16}
                    className={`transform transition-transform duration-200 ${showProfileDropdown ? 'rotate-180' : ''}`}
                  />
                </button>
                {showProfileDropdown && (
                  <ProfileDropdown
                    onNavigate={handleNavigate}
                    onLogout={handleLogout}
                  />
                )}
              </div>
            ) : (
              <button
                onClick={() => handleNavigate('/login')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Create Account
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary bg-primary/5' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {token ? (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div onClick={() => handleNavigate('/my-profile')} 
                  className="px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-200">
                  My Profile
                </div>
                <div onClick={() => handleNavigate('/my-appointments')} 
                  className="px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-200">
                  My Appointments
                </div>
                <div onClick={handleLogout} 
                  className="px-3 py-2 text-base text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                  Logout
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleNavigate('/login')}
                className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;