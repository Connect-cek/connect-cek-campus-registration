// components/FeaturesSection/Features.tsx
import React from 'react';
// You'll need to import your icon SVGs or use a library like lucide-react

const Features: React.FC = () => {
  return (
    <div className="bg-gradient-custom text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16"
          style={{ 
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontWeight: 700,
          }}
        >
          Features
        </h2>

        {/* Grid connector lines - This would be your background SVG */}
        <div className="absolute inset-0 z-0">
          {/* Place your SVG here */}
        </div>

        {/* First Row of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 relative z-10">
          {/* Feature 1 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* People Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Stay connected with students, faculty, and alumni from your college.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Feed/Updates Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 3v4"></path>
                <path d="M8 3v4"></path>
                <path d="M3 11h18"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Get updates, discussions, and posts tailored to your interests.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Briefcase/Career Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Find exclusive career opportunities from alumni and recruiters.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Chat/Collaboration Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Chat with peers, join study groups, and collaborate on projects.
            </p>
          </div>
        </div>

        {/* Second Row of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {/* Feature 5 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Trend/Analytics Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                <path d="M17 6h6v6"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Discover trending topics, top recruiters, and industry insights.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Notification/Alerts Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Stay updated with instant alerts for messages, events, and job postings.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Globe/Network Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Collaborate beyond your institution and expand your network.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-pink-50/90 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-900">
              {/* Shield/Privacy Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <p className="text-indigo-900 font-medium">
              Your data stays safe with our robust privacy controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;