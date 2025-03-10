import React from "react";
import { Bell, MessageCircle, Search, User, Image, Calendar, FileText, ThumbsUp, Repeat, Send, PlusCircle } from "lucide-react";
import Dashbar from "../components/Dashnavbar";

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-[#FAE9E4] min-h-screen p-4">
      {/* Navbar */}
      <Dashbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">


      {/* Left Sidebar */}
<div className="hidden md:block space-y-4">
  {/* College Information Card */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    {/* Cover Image */}
    <div className="rounded-md overflow-hidden mb-4">
      <img
        src="URL_TO_COVER_IMAGE" // Replace with your cover image URL
        alt="College Cover"
        className="object-cover w-full h-40" // Adjusted height for better visual match
      />
    </div>

    {/* Profile Picture and College Name */}
    <div className="flex items-center mb-4"> {/* Flex container for profile pic and name */}
      <div className="rounded-full h-16 w-16 overflow-hidden border-2 border-gray-200 mr-4"> {/* Increased profile pic size */}
        <img
          src="URL_TO_PROFILE_PICTURE" // Replace with your profile picture URL
          alt="College Profile"
          className="object-cover w-full h-full"
        />
      </div>
      {/* College Name and Location */}
      <div>
        <h2 className="text-xl font-semibold">Marian Engineering College</h2>
        <p className="text-sm text-gray-500">Menamkulam, Kazhakootam</p>
      </div>
    </div>

    {/* College Details */}
    <div className="mt-2 space-y-2"> {/* Reduced margin-top for closer details */}
      <p className="text-sm"><span className="font-medium">Founded in:</span> 2005</p>
      <p className="text-sm"><span className="font-medium">Registered on:</span> 2/2/2025</p>
      <p className="text-sm"><span className="font-medium">Students:</span> 5000</p>
    </div>

    {/* Dashboard Button */}
    <div className="flex justify-center mt-4"> {/* Centering the button */}
      <button className="p-2 rounded-md hover:bg-gray-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M20.25 16.875l-2.25-2.25m-2.25 2.25l-2.25-2.25m2.25 2.25v2.25" />
        </svg>
        <span className="text-gray-700">Dashboard</span>
      </button>
    </div>

  </div>
</div>


        {/* Main Content */}
        <div className="col-span-2">
          {/* Post Input Box */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <input placeholder="Start a post" className="flex-1 p-2 border rounded-md" />
            </div>
            <div className="flex justify-between mt-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Image className="w-5 h-5 text-blue-500" />
                <span>Attach Media</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Calendar className="w-5 h-5 text-yellow-500" />
                <span>Create Event</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <FileText className="w-5 h-5 text-red-500" />
                <span>Write Article</span>
              </button>
            </div>
          </div>

          {/* Sort By Filter */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-4">
            <span className="text-gray-500 text-sm"></span>
            <div className="relative">
              <label className="text-gray-500 text-sm">Sort by:</label>
              <select className="ml-2 text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer">
                <option value="top">Top</option>
                <option value="latest">Latest</option>
              </select>
            </div>
          </div>

          {/* Posts Section */}
          <div className="bg-white p-4 shadow-md rounded-lg mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold">[Name]</p>
                  <p className="text-sm text-gray-500">Company • Specialty</p>
                  <p className="text-xs text-gray-400">2h</p>
                </div>
              </div>
              <button className="text-blue-500">+ Follow</button>
            </div>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...
            </p>
            <img src="/post-image.jpg" alt="Post" className="w-full mt-4 rounded-lg" />
            <div className="flex justify-between mt-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <ThumbsUp size={18} />
                <span className="hidden sm:inline">Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <MessageCircle size={18} />
                <span className="hidden sm:inline">Comment</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Repeat size={18} />
                <span className="hidden sm:inline">Repost</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Send size={18} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>

          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block space-y-4">

          {/* Alumni & Faculty Section */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-bold text-lg">ALUMNI - 5</h3>
            <div className="space-y-2 mt-2 h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <p className="text-sm font-medium">[Name]</p>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg mt-4">FACULTY - 6</h3>
            <div className="space-y-2 mt-2 h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <p className="text-sm font-medium">[Name]</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Your Feed Section */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-bold text-lg">Add to your feed</h3>
            <div className="space-y-4 mt-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* Profile Picture */}
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold">[Name]</p>
                      <p className="text-sm text-gray-500">Company • Specialty</p>
                    </div>
                  </div>
                  {/* Follow Button */}
                  <button className="flex items-center border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 transition">
                    <PlusCircle size={16} className="text-gray-600" />
                    <span className="text-sm hidden lg:inline">Follow</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="text-blue-500 w-full mt-4 hover:underline">View all recommendations</button>
          </div>


          {/* Links Section */}
          <div className="bg-gray-100 p-4 mt-6 rounded-lg text-center text-sm text-gray-600">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Accessibility</a>
              <a href="#" className="hover:underline">Help Center</a>
              <a href="#" className="hover:underline">Privacy&Terms</a>
              <a href="#" className="hover:underline">Ad Choices</a>
              <a href="#" className="hover:underline">Advertising</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Get the LinkedIn app</a>
              <a href="#" className="hover:underline">More</a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center mt-4">
            <img src="/path-to-your-logo.png" alt="Logo" className="w-24 sm:w-32" />
          </div>




        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
