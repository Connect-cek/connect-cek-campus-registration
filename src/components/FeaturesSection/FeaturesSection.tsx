// components/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import aboutImage1 from '../../assets/images/feat1.svg';
import aboutImage2 from '../../assets/images/feat2.svg';

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-gradient-custom text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - tagline and description */}
          <div className="bg-indigo-200 rounded-[2rem] pl-8 pt-8 flex flex-col justify-between relative overflow-hidden">
            <div className="mb-8">
              <h2
                className="text-4xl md:text-5xl font-bold text-indigo-900"
                style={{
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontWeight: 700,
                }}
              >
                "Connecting Colleges, Empowering Careers."
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="z-10">
                  <p className="text-indigo-900 mb-6 text-lg">
                    "Finding opportunities in college shouldn't be difficult. Connect was created to help students engage with alumni, discover career paths, and build strong networks within their own institutions."
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 flex justify-end items-end relative">
                <img
                  src={aboutImage1}
                  alt="Students connecting"
                  className="w-32 h-32 md:w-40 md:h-40 mr-[-15px] mb-[-19px]"
                />
              </div>

            </div>
          </div>

          {/* Right column - Why Connect? */}
          <div className="bg-white rounded-[2rem] p-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6"
              style={{
                fontFamily: '"Bai Jamjuree", sans-serif',
                fontWeight: 700,
              }}
            >
              Why Connect?
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-indigo-900 font-bold mr-2 text-xl">•</span>
                <div>
                  <span className="font-bold text-indigo-900">College-Based Networks – </span>
                  <span className="text-indigo-900">Exclusive to each institution.</span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-indigo-900 font-bold mr-2 text-xl">•</span>
                <div>
                  <span className="font-bold text-indigo-900">Alumni-Driven Opportunities – </span>
                  <span className="text-indigo-900">Internships, mentorships, and jobs.</span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-indigo-900 font-bold mr-2 text-xl">•</span>
                <div>
                  <span className="font-bold text-indigo-900">Seamless Interaction – </span>
                  <span className="text-indigo-900">A familiar, user-friendly experience.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left column - Image (takes 1/3 width) */}
          <div className="bg-white rounded-[2rem] p-8 flex justify-center items-center">
            <img
              src={aboutImage2}
              alt="Students studying"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right column - Mission & Vision (takes 2/3 width) */}
          <div className="bg-indigo-200 rounded-[2rem] p-8 lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6"
              style={{
                fontFamily: '"Bai Jamjuree", sans-serif',
                fontWeight: 700,
              }}
            >
              Mission & Vision
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Mission:</h3>
              <p className="text-indigo-900 text-lg">
                Empower college communities through seamless networking and career opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Vision:</h3>
              <p className="text-indigo-900 text-lg">
                A world where every college is a thriving professional hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;