import React, { useContext } from "react";
import { assets } from "../assets/assets_admin/assets";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { adminToken, setAdminToken } = useContext(AdminContext);

  const logout = () => {
    if (adminToken) {
      setAdminToken("");
      localStorage.removeItem("adminToken");
    }
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2">
        <img
          className="w-26 sm:w-40"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {adminToken ? "Admin" : "Doctor"}
        </p>
      </div>
      
      <button
        onClick={logout}
        className="bg-blue-600 text-white px-10 py-2 rounded-full hover:bg-blue-700 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;