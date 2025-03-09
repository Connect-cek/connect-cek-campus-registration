import React from "react";

const RegistrationSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      
      <div className="w-48 h-48 bg-gray-200 mb-4 flex items-center justify-center">
        <span className="text-gray-500">Image Here</span>
      </div>
      
      <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
      
      <div className="space-y-3">
        <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Go to Home
        </button>
        
        <button className="bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-full flex items-center gap-2">
          Your Domain 
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
