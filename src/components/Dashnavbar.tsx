import React, { useState } from "react";
import { Bell, Search, User, Home, Users, MessageSquare, Menu, LogOut, Settings, Edit, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/icons/connectlogo.svg';

const Dashbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="w-full bg-white py-3 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <img src={Logo} alt="Logo" className="w-11 h-11" />

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/feeds" className={`flex items-center space-x-1 ${location.pathname === "/feeds" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link to="/mynetwork" className={`flex items-center space-x-1 ${location.pathname === "/mynetwork" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>
              <Users className="w-5 h-5" />
              <span>My Network</span>
            </Link>

            <Link to="/chats" className={`flex items-center space-x-1 ${location.pathname === "/chats" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>
              <MessageSquare className="w-5 h-5" />
              <span>Chats</span>
            </Link>
          </div>
        </div>

        {/* Right Section - Icons & Search */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-200 px-4 py-2 rounded-full">
            <Search className="w-4 h-4 text-gray-500" />
            <input className="bg-transparent outline-none ml-2 text-sm w-40" placeholder="Search by keyword" />
          </div>

          <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />

          {/* Profile Icon & Dropdown */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <User className={`w-6 h-6 ${profileOpen ? "text-blue-600" : "text-gray-700"} cursor-pointer hover:text-gray-900`} />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 px-6 border border-gray-200" style={{ top: "calc(100% + 13px)" }}>
                <div className="flex flex-col items-center border-b pb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <p className="mt-2 font-semibold">Name</p>
                  <p className="text-gray-500 text-sm">Bio</p>
                  <button className="mt-2 text-blue-600 border border-blue-600 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Edit className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </Link>
                  <Link to="/language" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <Languages className="w-5 h-5" />
                    <span>Language</span>
                  </Link>
                  <Link to="/support" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <MessageSquare className="w-5 h-5" />
                    <span>Support</span>
                  </Link>
                  <button className="flex items-center space-x-2 text-red-600 hover:text-red-800">
                    <LogOut className="w-5 h-5" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button className="md:hidden text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 px-4 py-3 flex flex-col space-y-3">
          <Link to="/feeds" className={`flex items-center space-x-2 ${location.pathname === "/feeds" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setMenuOpen(false)}>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link to="/mynetwork" className={`flex items-center space-x-2 ${location.pathname === "/mynetwork" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setMenuOpen(false)}>
            <Users className="w-5 h-5" />
            <span>My Network</span>
          </Link>

          <Link to="/chats" className={`flex items-center space-x-2 ${location.pathname === "/chats" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setMenuOpen(false)}>
            <MessageSquare className="w-5 h-5" />
            <span>Chats</span>
          </Link>

          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full">
            <Search className="w-4 h-4 text-gray-500" />
            <input className="bg-transparent outline-none ml-2 text-sm w-full" placeholder="Search by keyword" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashbar;