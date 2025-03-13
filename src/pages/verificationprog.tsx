import React, { useEffect } from "react";
import { FaHourglassHalf, FaRegListAlt, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VerificationPage: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  // For animation sequencing
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="relative min-h-screen bg-[#F9F6F3] flex flex-col items-center justify-center text-center p-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Curved Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>

      {/* Floating Document Icons in Background */}
      <motion.div 
        className="absolute left-10 top-1/3 opacity-20 text-blue-300 text-9xl"
        animate={{ 
          y: [0, -15, 0],
          rotate: [-5, 5, -5]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <FaRegListAlt />
      </motion.div>

      <motion.div 
        className="absolute right-10 bottom-1/3 opacity-10 text-blue-300 text-8xl"
        animate={{ 
          y: [0, 15, 0],
          rotate: [5, -5, 5]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      >
        <FaRegListAlt />
      </motion.div>

      {/* Hourglass Icon */}
      <motion.div 
        className="bg-blue-500 p-6 rounded-full text-white text-4xl mb-6 shadow-lg relative z-10"
        variants={itemVariants}
        animate={{ 
          rotateY: [0, 180, 360],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaHourglassHalf />
      </motion.div>

      <motion.h1 
        className="text-3xl font-bold relative z-10 mb-4"
        variants={itemVariants}
      >
        Verification in Progress
      </motion.h1>

      <motion.div
        className="w-16 h-1 bg-blue-500 rounded mb-6"
        variants={itemVariants}
      />

      <motion.p 
        className="mt-2 text-gray-600 max-w-lg relative z-10 text-lg font-semibold"
        variants={itemVariants}
      >
        Thank you for registering your college on Connect!
      </motion.p>

      <motion.p 
        className="mt-4 text-gray-600 max-w-md relative z-10"
        variants={itemVariants}
      >
        Our team is currently verifying your provided email to ensure authenticity. 
        You will receive an email once verification is complete. After approval, 
        you can set up your admin account to manage your college domain.
      </motion.p>

      <motion.button 
        className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={goToHome}
      >
        <FaHome /> Go to Home
      </motion.button>

      <motion.div 
        className="mt-10 text-xs text-gray-500 max-w-sm relative z-10 bg-white/50 p-4 rounded-lg backdrop-blur-sm"
        variants={itemVariants}
      >
        <p className="font-medium mb-2">What happens next?</p>
        <ul className="text-left space-y-2">
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 rounded-full bg-blue-200 mr-2 mt-1"></span>
            <span>Email verification (24-48 hours)</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 rounded-full bg-blue-300 mr-2 mt-1"></span>
            <span>Approval notification via email</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 rounded-full bg-blue-400 mr-2 mt-1"></span>
            <span>Setup admin account credentials</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 rounded-full bg-blue-500 mr-2 mt-1"></span>
            <span>Start managing your college domain</span>
          </li>
        </ul>
      </motion.div>

      <motion.p 
        className="mt-4 text-xs text-gray-500 max-w-sm relative z-10"
        variants={itemVariants}
      >
        If you have any urgent inquiries, contact our support team at support@connect.com
      </motion.p>
    </motion.div>
  );
};

export default VerificationPage;