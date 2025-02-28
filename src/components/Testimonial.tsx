import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  institution: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  name, 
  role, 
  institution, 
  imageUrl 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start mb-4">
        <div className="text-indigo-500 text-4xl font-serif leading-none">"</div>
      </div>
      
      <p className="text-gray-700 mb-6 italic">
        {quote}
      </p>
      
      <div className="flex items-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <span className="text-indigo-700 font-medium text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}, {institution}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;