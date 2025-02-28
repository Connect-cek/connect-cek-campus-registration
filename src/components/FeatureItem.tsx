import React from 'react';
import { Network, Briefcase, MessageSquare } from 'lucide-react';

export interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
  // Function to render the appropriate icon based on the icon prop
  const renderIcon = () => {
    switch (icon) {
      case 'network':
        return <Network className="w-5 h-5" />;
      case 'opportunity':
        return <Briefcase className="w-5 h-5" />;
      case 'interaction':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3 mt-1 text-indigo-600">
        {renderIcon()}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};