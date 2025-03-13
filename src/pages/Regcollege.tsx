import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaUserFriends } from "react-icons/fa";
import { RootState, AppDispatch } from '../store/store';
import { sendOtp, setEmail } from '../store/otpSlice';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Regcollege: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { email, otpSent, loading, error } = useSelector((state: RootState) => state.otp);
    const navigate = useNavigate();
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        dispatch(setEmail(newEmail));
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(newEmail));
    };

    const handleSendOtp = async () => {
        if (isEmailValid) {
            try {
                await dispatch(sendOtp(email)).unwrap();
                // OTP sent successfully
            } catch (err) {
                console.error("Error sending OTP:", err);
            }
        }
    };

    useEffect(() => {
        if (otpSent) {
            const timer = setTimeout(() => {
                navigate("/verify");
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [otpSent, navigate]);

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
        <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] p-4">
            <motion.div 
                className="bg-white rounded-3xl shadow-lg flex w-full max-w-3xl overflow-hidden min-h-[500px] relative"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Left Section */}
                <motion.div 
                    className="bg-gradient-to-b from-[#2C2C6C] to-[#0D0D3A] flex flex-col items-center justify-center p-10 text-white w-1/3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FaUserFriends className="text-7xl text-white mb-4" />
                    </motion.div>
                    <motion.p 
                        className="text-xl font-semibold tracking-wide"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        CONNECT
                    </motion.p>
                </motion.div>

                {/* Right Section */}
                <motion.div 
                    className="flex flex-1 flex-col justify-center items-center p-10"
                    variants={containerVariants}
                >
                    <motion.h1 
                        className="text-3xl font-bold text-black mb-4 text-center"
                        variants={itemVariants}
                    >
                        Register Your College
                    </motion.h1>
                    
                    <motion.div variants={itemVariants}>
                        <FaEnvelope className="text-6xl text-gray-400 mb-4" />
                    </motion.div>
                    
                    <motion.div 
                        className="w-4/5 relative"
                        variants={itemVariants}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full text-gray-500 border-b border-gray-300 focus:outline-none focus:border-gray-500 mb-6 text-left px-2 py-2 transition-all"
                        />
                        {email && !isEmailValid && (
                            <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                        )}
                    </motion.div>
                    
                    <motion.button
                        onClick={handleSendOtp}
                        className={`bg-[#2C2C6C] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                            !isEmailValid ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1A1A5A]'
                        }`}
                        disabled={loading || !isEmailValid}
                        variants={itemVariants}
                        whileHover={{ scale: isEmailValid ? 1.05 : 1 }}
                        whileTap={{ scale: isEmailValid ? 0.95 : 1 }}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending OTP...
                            </div>
                        ) : "Send OTP"}
                    </motion.button>
                    
                    {error && (
                        <motion.p 
                            className="text-red-500 mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {error}
                        </motion.p>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Regcollege;