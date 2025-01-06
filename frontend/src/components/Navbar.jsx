import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    const navItems = [
        { path: "/", label: "HOME" },
        { path: "/doctors", label: "ALL DOCTORS" },
        { path: "/about", label: "ABOUT" },
        { path: "/contact", label: "CONTACT" }
    ];

    const handleMobileMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="relative">
            <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4">
                <img onClick={()=>{
                    navigate("/");scrollTo(0,0)
                }} className="w-32 md:w-44 cursor-pointer" src={assets.logo} alt="Logo" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-start gap-5 font-medium">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.path} 
                            to={item.path}
                            className={({ isActive }) => 
                                `group relative ${isActive ? 'text-primary' : ''}`
                            }
                        >
                            <li className="py-1">{item.label}</li>
                            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </NavLink>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2"
                    onClick={handleMobileMenuClick}
                >
                    {showMenu ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Profile/Login */}
                <div className="hidden md:flex items-center gap-4">
                    {token ? (
                        <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-10 hidden group-hover:block">
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg">
                                    <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                                    <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light">
                            Create Account
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
                    <ul className="flex flex-col p-4">
                        {navItems.map((item) => (
                            <NavLink 
                                key={item.path} 
                                to={item.path}
                                className={({ isActive }) => 
                                    `py-3 px-4 ${isActive ? 'text-primary' : ''}`
                                }
                                onClick={() => setShowMenu(false)}
                            >
                                <li>{item.label}</li>
                            </NavLink>
                        ))}
                        {token ? (
                            <div className="border-t border-gray-200 mt-2 pt-2">
                                <div onClick={() => navigate('/my-profile')} className="py-3 px-4 cursor-pointer hover:bg-gray-50">My Profile</div>
                                <div onClick={() => navigate('/my-appointments')} className="py-3 px-4 cursor-pointer hover:bg-gray-50">My Appointments</div>
                                <div onClick={() => setToken(false)} className="py-3 px-4 cursor-pointer hover:bg-gray-50">Logout</div>
                            </div>
                        ) : (
                            <button 
                                onClick={() => {
                                    navigate('/login');
                                    setShowMenu(false);
                                }} 
                                className="m-4 bg-primary text-white px-8 py-3 rounded-full font-light w-full"
                            >
                                Create Account
                            </button>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;