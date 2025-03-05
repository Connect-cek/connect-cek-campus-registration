import React from "react";

const AdminCredentials = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-full max-w-5xl flex items-start gap-12">
        
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-6">Set Your Admin Account Credentials</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-black font-medium mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-600 rounded-md" />
            </div>
            <div>
              <label className="block text-black font-medium mb-1">Create Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-600 rounded-md" />
            </div>
            <div>
              <label className="block text-black font-medium mb-1">Repeat Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-600 rounded-md" />
            </div>
          </div>
        </div>

        
        <div className="w-1/2 flex justify-center">
          <img src="/images/admin-placeholder.png" alt="Admin Setup" className="max-w-full h-auto" />
        </div>

        
        <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2">
          <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition">
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCredentials;
