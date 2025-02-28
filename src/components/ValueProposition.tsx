import React from 'react';
import NetworkingIllustration from './NetworkingIllustration';

const ValueProposition: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">
        "Connecting Colleges, Empowering Careers."
      </h2>
      
      <p className="text-gray-700 mb-6">
        Finding opportunities in college shouldn't be difficult. Connect was created to help 
        students engage with alumni, discover career paths, and build strong networks 
        within their own institutions.
      </p>
      
      <div className="flex justify-center">
        <NetworkingIllustration />
      </div>
    </div>
  );
};

export default ValueProposition;