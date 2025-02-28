import React from 'react';
import { Users } from 'lucide-react';

const NetworkingIllustration: React.FC = () => {
  return (
    <div className="w-32 h-32 bg-indigo-100 rounded-lg overflow-hidden flex justify-center items-center">
      <Users className="w-16 h-16 text-indigo-600" />
    </div>
  );
};

export default NetworkingIllustration;