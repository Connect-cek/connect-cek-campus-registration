import React from 'react';
import { Globe } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
        Mission & Vision
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-indigo-50 p-6 rounded-lg flex justify-center items-center">
          <div className="w-24 h-24 bg-indigo-200 rounded-full flex justify-center items-center">
            <Globe className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
        <div className="flex-1 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 mb-3">Our Purpose</h3>
          <p className="text-gray-700">
            To create meaningful connections between current students and alumni, 
            fostering a supportive community that enhances career opportunities and 
            professional growth for all members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;