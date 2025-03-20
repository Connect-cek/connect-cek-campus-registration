import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";
import Logo from "../assets/icons/connectlogo.svg"; 

const AdminNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white py-3 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        
        <div className="flex items-center space-x-4 md:space-x-6">
          <img src={Logo} alt="Logo" className="w-9 h-9" />

          <div className="flex items-center space-x-6">
            <Link
              to="/registered"
              className={`font-semibold hover:text-blue-600 ${
                location.pathname === "/registered" ? "text-blue-600" : "text-black"
              }`}
            >
              Registered Colleges
            </Link>

            <Link
              to="/pending"
              className={`relative font-semibold hover:text-blue-600 ${
                location.pathname === "/pending" ? "text-blue-600" : "text-black"
              }`}
            >
              Pending Requests
              <span className="absolute top-0 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
