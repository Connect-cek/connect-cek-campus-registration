import React, { useState } from "react";
import axios from "axios";
import { Calendar, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RegisterDashboard = () => {
    const [step, setStep] = useState(1);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [institutionData, setInstitutionData] = useState<any>(null);
    const { accessToken } = useSelector((state: RootState) => state.otp);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            institution_type: formData.get("type"),
            location: formData.get("location"),
            founded_year: formData.get("foundedYear"),
            head_name: formData.get("headName"),
            head_designation: formData.get("headDesignation"),
            registration_email: "abhimanyurbsa@gmail.com"  // Use default email for now
        };

        try {
            const response = await axios.post("http://localhost:8000/institutions/", data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Include the access token in the request headers
                },
            });
            setInstitutionData(response.data);
            setStep(2);
        } catch (error) {
            console.error("Error registering institution:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8EDE8] flex flex-col items-center p-6">
            {/* Stepper */}
            <div className="flex items-center w-full max-w-lg mb-6">
                <div className="flex-1 text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    <span className={`text-sm font-medium ${step >= 1 ? '' : 'text-gray-400'}`}>Register</span>
                </div>
                <div className="flex-1 text-center border-t-2 border-gray-300"></div>
                <div className="flex-1 text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    <span className={`text-sm font-medium ${step >= 2 ? '' : 'text-gray-400'}`}>Dashboard</span>
                </div>
                <div className="flex-1 text-center border-t-2 border-gray-300"></div>
                <div className="flex-1 text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    <span className={`text-sm font-medium ${step >= 3 ? '' : 'text-gray-400'}`}>Assign Admin</span>
                </div>
            </div>

            {step === 1 && (
                <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
                    <form className="space-y-5" onSubmit={handleRegister}>
                        <div><label className="block text-sm font-medium">Name of Institute</label><input type="text" name="name" className="w-full border rounded p-3" required /></div>
                        <div><label className="block text-sm font-medium">Type of Institute <span className="text-gray-500">(private, government)</span></label><input type="text" name="type" className="w-full border rounded p-3" required /></div>
                        <div><label className="block text-sm font-medium">Location</label><input type="text" name="location" className="w-full border rounded p-3" required /></div>
                        <div><label className="block text-sm font-medium">Founded In</label><input type="text" name="foundedYear" className="w-full border rounded p-3" /></div>
                        <div><label className="block text-sm font-medium">Name of Head of Institute</label><input type="text" name="headName" className="w-full border rounded p-3" required /></div>
                        <div><label className="block text-sm font-medium">Designation of Head of Institute</label><input type="text" name="headDesignation" className="w-full border rounded p-3" required /></div>

                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-8 py-3 text-lg rounded-full hover:bg-blue-600 transition-colors"
                            >
                                PROCEED
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {step === 2 && institutionData && (
                <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6">
                    {/* Main Dashboard Layout */}
                    <div className="flex w-full gap-8">
                        <div className="flex flex-col w-2/3">
                            <div className="bg-white shadow-lg rounded-xl p-8 relative">
                                <div className="bg-gray-300 h-40 rounded-lg flex items-center justify-center mb-6 relative">
                                    <span className="text-gray-600">College Image</span>
                                    <div className="absolute left-8 bottom-[-40px] w-24 h-24 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-lg">
                                        {profileImage ? (
                                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <label className="w-full h-full flex items-center justify-center cursor-pointer text-gray-500">
                                                +
                                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                            </label>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-16">
                                    <div>
                                        <h2 className="text-2xl font-bold">{institutionData.name}</h2>
                                        <p className="text-gray-500">{institutionData.location}</p>
                                    </div>
                                    <button className="bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-400 transition-colors">
                                        Invite an Alumni <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="text-right mt-6 text-sm text-gray-500">
                                    <p>Founded in {institutionData.founded_year}</p>
                                    <p>Joined on: {new Date(institutionData.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 mt-8">
                                {[...Array(3)].map((_, index) => (
                                    <div key={index} className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
                                        <Calendar className="text-gray-500 w-10 h-10" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 w-1/3">
                            <h3 className="text-lg font-bold mb-6">ADMIN - 1</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <span className="text-gray-500">[Name]</span>
                            </div>
                        </div>
                    </div>

                    <button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-full mt-8 hover:bg-blue-600 transition-colors" onClick={() => setStep(3)}>
                        PROCEED
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-4xl flex flex-col items-center gap-8">
                    <div className="w-full text-left">
                        <h2 className="text-3xl font-bold">Assign an Admin</h2>
                    </div>
                    <div className="flex w-full max-w-4xl justify-between gap-8">
                        <div className="w-1/2">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-black font-medium mb-1">Name</label>
                                    <input type="text" placeholder="" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-1">Email</label>
                                    <input type="email" placeholder="" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-1">Phone</label>
                                    <input type="tel" placeholder="" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-1">Create Password</label>
                                    <input type="password" placeholder="" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-1">Repeat Password</label>
                                    <input type="password" placeholder="" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img
                                src="/images/admin-placeholder.png"
                                alt="Admin Placeholder"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white px-5 py-2 text-base rounded-full hover:bg-blue-600 transition-colors mt-6">
                        PROCEED
                    </button>
                </div>
            )}

            <div className="flex justify-between w-full max-w-lg mt-6">
                <button
                    className="bg-gray-400 text-white px-6 py-2 text-lg rounded-full hover:bg-gray-500"
                    onClick={() => setStep(step > 1 ? step - 1 : 1)}
                >
                    Back
                </button>
                <button
                    className="bg-blue-500 text-white px-6 py-2 text-lg rounded-full hover:bg-blue-600"
                    onClick={() => setStep(step < 3 ? step + 1 : 3)}
                >
                    {step === 3 ? "Finish" : "Forward"}
                </button>
            </div>
        </div>
    );
};

export default RegisterDashboard;