import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaUserFriends } from "react-icons/fa";
import { RootState, AppDispatch } from '../store/store';
import { sendOtp, setEmail } from '../store/otpSlice';
import { useNavigate } from "react-router-dom";

const RegisterPage1: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { email, otpSent, loading, error } = useSelector((state: RootState) => state.otp);
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value));
    };

    const handleSendOtp = () => {
        dispatch(sendOtp(email));
    };

    useEffect(() => {
        if (otpSent) {
            navigate("/verify");
        }
    }, [otpSent, navigate]);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-[#1E1E1E] p-4"
            style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
        >
            <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-3xl overflow-hidden min-h-[500px] relative p-6">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-[#2C2C6C] to-[#0D0D3A] flex flex-col items-center justify-center p-10 text-white rounded-3xl w-1/3 min-h-[470px] shadow-lg">
                    <FaUserFriends className="text-7xl text-white mb-4" />
                    <p className="text-xl font-semibold tracking-wide">CONNECT</p>
                </div>

                <div className="flex flex-1 flex-col justify-center items-center ml-[42%] p-10">
                    <h1 className="text-3xl font-bold text-black mb-4 mt-[-10px] text-center">
                        Register Your College
                    </h1>
                    <FaEnvelope className="text-6xl text-gray-400 mb-4" />
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-4/5 text-gray-500 border-b border-gray-300 focus:outline-none focus:border-gray-500 mb-6 text-left px-2"
                    />
                    <button
                        onClick={handleSendOtp}
                        className="bg-[#2C2C6C] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#1A1A5A]"
                        disabled={loading}
                    >
                        {loading ? "Sending OTP..." : "Send OTP"}
                    </button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage1;