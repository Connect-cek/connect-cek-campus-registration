import React from 'react';
import { FeatureItem, FeatureItemProps } from './FeatureItem';

const WhyConnect: React.FC = () => {
  const features: FeatureItemProps[] = [
    {
      title: "College-Based Networks",
      description: "Exclusive to each institution",
      icon: "network"
    },
    {
      title: "Alumni-Driven Opportunities",
      description: "Internships, mentorships, and jobs",
      icon: "opportunity"
    },
    {
      title: "Seamless Interaction",
      description: "A familiar, user-friendly experience",
      icon: "interaction"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">
        Why Connect?
      </h2>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <FeatureItem 
            key={index} 
            title={feature.title} 
            description={feature.description} 
            icon={feature.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default WhyConnect;