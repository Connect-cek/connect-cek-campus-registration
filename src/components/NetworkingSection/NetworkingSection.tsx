import React from 'react';
import networkImage from '../../assets/images/college-network.svg';

const NetworkingSection: React.FC = () => {
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
          Seamless Networking for Your<br />
          College Community
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Step by Step Process with dashed connector line */}
          <div className="flex flex-col space-y-6 relative">
            {/* Dashed Line Connecting Steps - Using dotted border */}
            <div className="absolute top-24 bottom-16 left-14 border-l-2 border-dotted border-white/40 z-0"></div>
            
            {/* Step 1 */}
            <div className="bg-indigo-100/90 rounded-3xl p-6 relative z-10">
              <div className="flex items-start">
                <div className="bg-indigo-900 text-white p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center" style={{width: "48px", height: "48px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 
                    className="text-2xl font-bold text-indigo-900"
                    style={{ 
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Register Your College
                  </h3>
                  <p className="text-indigo-900 mt-1">Your college signs up and gets a unique dashboard.</p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-indigo-100/90 rounded-3xl p-6 relative z-10 ml-8">
              <div className="flex items-start">
                <div className="bg-indigo-900 text-white p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center" style={{width: "48px", height: "48px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 
                    className="text-2xl font-bold text-indigo-900"
                    style={{ 
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Build Your Profile
                  </h3>
                  <p className="text-indigo-900 mt-1">Students, alumni, and faculty create their profiles.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-indigo-100/90 rounded-3xl p-6 relative z-10">
              <div className="flex items-start">
                <div className="bg-indigo-900 text-white p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center" style={{width: "48px", height: "48px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 
                    className="text-2xl font-bold text-indigo-900"
                    style={{ 
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Connect and Engage
                  </h3>
                  <p className="text-indigo-900 mt-1">Post updates, share knowledge, and network.</p>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-indigo-100/90 rounded-3xl p-6 relative z-10 ml-8">
              <div className="flex items-start">
                <div className="bg-indigo-900 text-white p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center" style={{width: "48px", height: "48px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 
                    className="text-2xl font-bold text-indigo-900"
                    style={{ 
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Find Jobs & Opportunities
                  </h3>
                  <p className="text-indigo-900 mt-1">Alumni offer internships, faculty mentor students, and recruiters find talent.</p>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="bg-indigo-100/90 rounded-3xl p-6 relative z-10">
              <div className="flex items-start">
                <div className="bg-indigo-900 text-white p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center" style={{width: "48px", height: "48px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 
                    className="text-2xl font-bold text-indigo-900"
                    style={{ 
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Stay Updated
                  </h3>
                  <p className="text-indigo-900 mt-1">Real-time updates, discussions, and career growth.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative">
            <img 
              src={networkImage} 
              alt="College networking illustration" 
              className="w-full h-auto"
            />
            
            {/* Paper airplane animation */}
            <div className="absolute bottom-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <svg className="absolute -left-24 -bottom-4 w-32 h-24">
                <path
                  d="M0,20 C10,10 20,30 30,20"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  fill="transparent"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkingSection;