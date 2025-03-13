import React, { useState } from 'react';
import adminlog from '../assets/images/adminlogregcard.svg';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student login attempt with:', { email, password });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex w-[900px] bg-white shadow-lg rounded-3xl overflow-hidden">
        
        <div className="w-3/5 p-8 flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-[#FF9B21] mb-8 mt-4 flex justify-center">Login</h2>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-12">
            <div className="mb-6">
              <input
                type="email"
                placeholder="College email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            <button 
              type="submit" 
              className="w-[159px] h-[43px] bg-[#FF9B21] text-white py-3 rounded-[17px] font-medium text-lg uppercase mx-auto flex justify-center items-center">
                LOGIN
            </button>
          </form>
        </div>
        
        <div className="w-2/5 bg-white flex flex-col items-center justify-center p-0 text-white relative overflow-hidden">
          <div className="w-full h-full">
            <img src={adminlog} alt="Login Illustration" className="w-full h-full object-cover p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;