import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { RootState, AppDispatch } from '../store/store';
import { verifyOtp, sendOtp, clearErrors } from '../store/otpSlice';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RegOTP: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [resending, setResending] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const otpRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null, null, null]);

    const dispatch = useDispatch<AppDispatch>();
    const { email, otpSent, loading, error, accessToken } = useSelector((state: RootState) => state.otp);
    const navigate = useNavigate();

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (error) {
            dispatch(clearErrors());
        }

        if (value && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !otp[index]) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((char, index) => {
            if (index < 6) newOtp[index] = char;
        });
        setOtp(newOtp);

        // Focus the next empty input or the last input
        const nextEmptyIndex = newOtp.findIndex(digit => !digit);
        if (nextEmptyIndex === -1) {
            otpRefs.current[5]?.focus();
        } else {
            otpRefs.current[nextEmptyIndex]?.focus();
        }
    };

    const handleResendOtp = async () => {
        if (countdown > 0) return;
        
        setResending(true);
        dispatch(clearErrors());
        
        try {
            await dispatch(sendOtp(email)).unwrap();
            setResendSuccess(true);
            setCountdown(60);
            // Clear existing OTP fields
            setOtp(["", "", "", "", "", ""]);
            // Focus on first input
            otpRefs.current[0]?.focus();
        } catch (err) {
            console.error("Resend OTP error:", err);
        } finally {
            setResending(false);
        }
    };

    const verifyOtpHandler = async () => {
        const otpCode = otp.join("");
        if (otpCode.length !== 6) {
            dispatch({ 
                type: "otp/verifyOtp/rejected", 
                payload: "Please enter all 6 digits of the OTP" 
            });
            return;
        }

        dispatch(clearErrors());
        try {
            await dispatch(verifyOtp({ email, otpCode }));
        } catch (err) {
            console.error("Verification error:", err);
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (resendSuccess && countdown === 0) {
            setResendSuccess(false);
        }
        return () => clearInterval(timer);
    }, [countdown, resendSuccess]);

    useEffect(() => {
        if (accessToken) {
            const timer = setTimeout(() => {
                navigate("/waiting");
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [accessToken, navigate]);

    useEffect(() => {
        if (!email) {
            navigate("/register");
        }
    }, [email, navigate]);

    useEffect(() => {
        // Focus on first input when component mounts
        if (otpRefs.current[0]) {
            otpRefs.current[0].focus();
        }
    }, []);

    const isOtpComplete = otp.every(digit => digit !== "");

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] p-4">
            <motion.div 
                className="bg-white rounded-3xl shadow-lg flex w-full max-w-3xl overflow-hidden min-h-[500px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left Section - Main Content */}
                <motion.div 
                    className="flex flex-1 flex-col items-center justify-center p-10"
                    variants={containerVariants}
                >
                    <motion.div 
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <AiOutlineMobile className="text-7xl text-gray-400" />
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl font-bold text-gray-800 mb-6"
                    >
                        Verify OTP
                    </motion.h2>

                    <motion.div 
                        className="flex gap-4 mb-6"
                        variants={itemVariants}
                    >
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (otpRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                className={`w-12 h-12 text-xl text-center border 
                                    ${digit ? 'border-[#2C2C6C]' : 'border-gray-300'}
                                    rounded-md shadow-sm focus:outline-none focus:border-[#2C2C6C] 
                                    focus:ring-1 focus:ring-[#2C2C6C] transition-all`}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                value={digit}
                                inputMode="numeric"
                            />
                        ))}
                    </motion.div>

                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-600 text-sm mb-4"
                    >
                        Enter the OTP sent to {email}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-6"
                    >
                        {resendSuccess && (
                            <p className="text-green-500 text-sm mb-2">OTP resent successfully!</p>
                        )}
                        <button
                            onClick={handleResendOtp}
                            disabled={countdown > 0 || resending}
                            className={`text-blue-500 text-sm hover:underline
                                ${(countdown > 0 || resending) ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'}`}
                        >
                            {resending ? "Resending..." : countdown > 0 ? `Resend OTP in ${countdown}s` : "Resend OTP"}
                        </button>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        onClick={verifyOtpHandler}
                        disabled={!isOtpComplete || loading}
                        className={`w-full max-w-xs px-6 py-3 rounded-lg font-semibold text-white
                            ${isOtpComplete ? 'bg-[#2C2C6C] hover:bg-[#1A1A5A]' : 'bg-gray-400'}
                            transition-all duration-300`}
                        whileHover={isOtpComplete ? { scale: 1.05 } : {}}
                        whileTap={isOtpComplete ? { scale: 0.95 } : {}}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" 
                                        stroke="currentColor" strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor" 
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                                Verifying...
                            </div>
                        ) : "Verify & Proceed"}
                    </motion.button>

                    {error && (
                        <motion.p 
                            variants={itemVariants}
                            className="text-red-500 mt-4 text-center"
                        >
                            {error}
                        </motion.p>
                    )}
                </motion.div>

                {/* Right Section - Sidebar */}
                <motion.div 
                    className="bg-gradient-to-b from-[#2C2C6C] to-[#0D0D3A] flex flex-col items-center justify-center text-white w-1/3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <FaUserFriends className="text-6xl text-white mb-4" />
                    </motion.div>
                    <motion.p 
                        className="text-lg font-semibold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        CONNECT
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RegOTP;