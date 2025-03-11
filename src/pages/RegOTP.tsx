import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserFriends, FaEnvelope } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { RootState, AppDispatch } from '../store/store';
import { resendOtp, sendOtp } from '../store/otpSlice';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegOTP: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [error, setError] = useState("");
    const otpRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null, null, null]);

    const dispatch = useDispatch<AppDispatch>();
    const { email, otpSent } = useSelector((state: RootState) => state.otp);
    const navigate = useNavigate();

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !otpRefs.current[index]?.value) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleResendOtp = async () => {
        setResending(true);
        try {
            await dispatch(resendOtp());
            await dispatch(sendOtp(email));
        } finally {
            setResending(false);
        }
    };

    const verifyOtp = async () => {
        setLoading(true);
        setError("");
        try {
            const otpCode = otp.join("");
            const response = await axios.post("http://localhost:8000/auth/verify-otp", {
                email,
                otp_code: otpCode,
            });
            if (response.data) {
                // Handle successful OTP verification
                console.log("OTP verified", response.data);
                setVerified(true);
                setTimeout(() => {
                    navigate("/waiting");
                }, 2000);
            }
        } catch (err) {
            setError("Invalid or expired OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Focus on the first input when component mounts
        if (otpRefs.current[0]) {
            otpRefs.current[0].focus();
        }
    }, []);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-[#1E1E1E] p-4"
            style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
        >
            <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-3xl overflow-hidden min-h-[500px] relative p-6">
                <div className="flex flex-1 flex-col items-center justify-center px-10">
                    <AiOutlineMobile className="text-7xl text-gray-400 mb-4" />

                    {verified ? (
                        <p className="text-green-500 text-2xl mb-4">OTP Verified!</p>
                    ) : otpSent ? (
                        <>
                            <div className="flex gap-4 mb-4">
                                {otp.map((_, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (otpRefs.current[index] = el)}
                                        type="text"
                                        maxLength={1}
                                        className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2C2C6C]"
                                        onChange={(e) => handleChange(index, e)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        value={otp[index]}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm">Enter the OTP sent to your email</p>
                            <p
                                className="text-blue-500 text-sm mb-6 cursor-pointer hover:underline"
                                onClick={handleResendOtp}
                            >
                                {resending ? "Resending..." : "resend"}
                            </p>

                            <button
                                onClick={verifyOtp}
                                className="bg-[#2C2C6C] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#1A1A5A]"
                                disabled={loading}
                            >
                                {loading ? "Verifying..." : "Proceed"}
                            </button>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </>
                    ) : (
                        <>
                            <FaEnvelope className="text-6xl text-gray-400 mb-4" />
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                className="w-4/5 text-gray-500 border-b border-gray-300 focus:outline-none focus:border-gray-500 mb-6 text-left px-2"
                                disabled
                            />
                            <button
                                onClick={handleResendOtp}
                                className="bg-[#2C2C6C] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#1A1A5A]"
                                disabled={resending}
                            >
                                {resending ? "Resending OTP..." : "Resend OTP"}
                            </button>
                        </>
                    )}
                </div>

                <div className="bg-gradient-to-b from-[#2C2C6C] to-[#0D0D3A] flex flex-col items-center justify-center text-white rounded-3xl w-1/3 min-h-[470px] shadow-lg">
                    <FaUserFriends className="text-6xl text-white mb-4" />
                    <p className="text-lg font-semibold">CONNECT</p>
                </div>
            </div>
        </div>
    );
};

export default RegOTP;
