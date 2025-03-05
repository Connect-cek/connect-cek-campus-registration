import React, { useRef } from "react";
import { FaUserFriends } from "react-icons/fa"; 
import { AiOutlineMobile } from "react-icons/ai"; 

const RegisterPage: React.FC = () => {
    const otpRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        // Allow only numbers
        if (!/^\d?$/.test(value)) return;
        
    
        if (value && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    
        if (e.key === "Backspace" && index > 0 && !otpRefs.current[index]?.value) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-[#1E1E1E] p-4"
            style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
        >
            <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-3xl overflow-hidden min-h-[500px] relative p-6">

                
                <div className="flex flex-1 flex-col items-center justify-center px-10">
                    <AiOutlineMobile className="text-7xl text-gray-400 mb-4" /> 

                    {/* OTP Fields */}
                    <div className="flex gap-4 mb-4">
                        {otpRefs.current.map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => (otpRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2C2C6C]"
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                            />
                        ))}
                    </div>

                    
                    <p className="text-gray-600 text-sm">Enter the OTP sent to your email</p>

                    
                    <p className="text-blue-500 text-sm mb-6 cursor-pointer hover:underline">resend</p>

                    
                    <button className="bg-[#2C2C6C] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#1A1A5A]">
                        Proceed
                    </button>
                </div>

                
                <div className="bg-gradient-to-b from-[#2C2C6C] to-[#0D0D3A] flex flex-col items-center justify-center text-white rounded-3xl w-1/3 min-h-[470px] shadow-lg">
                    <FaUserFriends className="text-6xl text-white mb-4" />
                    <p className="text-lg font-semibold">CONNECT</p>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;
