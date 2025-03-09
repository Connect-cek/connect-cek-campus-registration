import React from "react";
import { FaHourglassHalf, FaRegListAlt } from "react-icons/fa";
// import { Button } from "@/components/ui/button";

const VerificationPage = () => {
  return (
    <div className="relative min-h-screen bg-[#F9F6F3] flex flex-col items-center justify-center text-center p-4">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#A3CEF1"
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Faint Document Icon in Background */}
      <div className="absolute left-10 top-1/3 opacity-20 text-blue-300 text-9xl">
        <FaRegListAlt />
      </div>

      {/* Hourglass Icon */}
      <div className="bg-blue-500 p-4 rounded-full text-white text-4xl mb-4 relative z-10">
        <FaHourglassHalf />
      </div>

      <h1 className="text-3xl font-bold relative z-10">Verification in Progress</h1>
      <p className="mt-2 text-gray-600 max-w-lg relative z-10 text-lg font-semibold">
        Thank you for registering your college on Connect! Our team is currently verifying your provided email to ensure authenticity.
      </p>

      <p className="mt-4 text-gray-600 max-w-md relative z-10">
        You will receive an email once verification is complete. After approval, you can set up your admin account to manage your college domain.
      </p>

      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 relative z-10">
        Go to Home
      </button>

      <p className="mt-4 text-xs text-gray-500 max-w-sm relative z-10">
        This process usually takes 24-48 hours. If you have any urgent inquiries, contact our support team at support@connect.com.
      </p>
    </div>
  );
};

export default VerificationPage;
