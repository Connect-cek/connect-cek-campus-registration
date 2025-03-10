import React, { useState } from "react";
import { Bell, Search, User, Home, Users, MessageSquare, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/icons/connectlogo.svg';


const Dashbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white py-3 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-11 h-11" />


          {/* Navigation Links (Hidden on Mobile, Visible on md+) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/feeds"
              className={`flex items-center space-x-1 ${
                location.pathname === "/feeds"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/mynetwork"
              className={`flex items-center space-x-1 ${
                location.pathname === "/mynetwork"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>My Network</span>
            </Link>

            <Link
              to="/chats"
              className={`flex items-center space-x-1 ${
                location.pathname === "/chats"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chats</span>
            </Link>
          </div>
        </div>

        {/* Right Section - Icons & Search */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (Hidden on Mobile, Shown on md+) */}
          <div className="hidden md:flex items-center bg-gray-200 px-4 py-2 rounded-full">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              className="bg-transparent outline-none ml-2 text-sm w-40"
              placeholder="Search by keyword"
            />
          </div>

          {/* Icons - Always Visible */}
          <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
          <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Only visible when toggled) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 px-4 py-3 flex flex-col space-y-3">
          <Link
            to="/feeds"
            className={`flex items-center space-x-2 ${
              location.pathname === "/feeds"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link
            to="/mynetwork"
            className={`flex items-center space-x-2 ${
              location.pathname === "/network"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <Users className="w-5 h-5" />
            <span>My Network</span>
          </Link>

          <Link
            to="/chats"
            className={`flex items-center space-x-2 ${
              location.pathname === "/chats"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chats</span>
          </Link>

          {/* Search Bar (Only visible in mobile menu) */}
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              className="bg-transparent outline-none ml-2 text-sm w-full"
              placeholder="Search by keyword"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashbar;
