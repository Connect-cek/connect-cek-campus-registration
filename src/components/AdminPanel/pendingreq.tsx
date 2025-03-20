import { Search, CheckCircle, XCircle, Landmark } from "lucide-react";
import AdminNavbar from "../AdminNavbar";

const colleges = Array(8).fill({
    name: "College Name",
    email: "college123@gmail.com",
    approvedDate: "Approved on 2/2/2025",
});

const Pending = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <AdminNavbar />

            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

            <div className="relative mt-4 mb-6 w-64">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 bg-gray-200 rounded-md outline-none text-gray-700"
                />
            </div>

            <div className="bg-white shadow rounded-md">
                {colleges.map((college, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 border-b last:border-none"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                <Landmark className="text-gray-600" size={24} />
                            </div>
                            <div>
                                <p className="font-semibold">{college.name}</p>
                                <p className="text-gray-500 text-sm">{college.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center text-blue-500 gap-1">
                                <CheckCircle className="text-blue-500" size={20} /> Approve
                            </button>
                            <button className="flex items-center text-gray-500 gap-1">
                                <XCircle className="text-gray-500" size={20} /> Deny
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pending;
