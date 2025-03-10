import React, { useState } from "react";
import Dashbar from "../components/Dashnavbar"; // Import Navbar
import { X, Users, Settings2 } from "lucide-react"; // Replaced Filter with Settings2

const people = Array(12).fill({
    name: "Name",
    bio: "Bio",
    mutualConnections: "10+ Mutual connections",
});

const Mynetwork: React.FC = () => {
    const [closedCards, setClosedCards] = useState<Set<number>>(new Set());
    const [animating, setAnimating] = useState<Set<number>>(new Set());

    const handleCloseCard = (index: number) => {
        setAnimating((prev) => new Set(prev).add(index)); // Start animation
        setTimeout(() => {
            setClosedCards((prev) => new Set(prev).add(index)); // After animation, mark card as closed
            setAnimating((prev) => {
                const newAnimating = new Set(prev);
                newAnimating.delete(index);
                return newAnimating;
            });
        }, 300); // Delay removal until after animation (300ms for fade-out)
    };

    return (
        <div className="min-h-screen bg-[#FCEAE4]">
            {/* Navbar */}
            <Dashbar />

            {/* Content */}
            <div className="flex items-center justify-center p-6">
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-5xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">People you may know</h2>
                        <button className="flex items-center text-gray-600 hover:text-black">
                            <Settings2 className="w-4 h-4 mr-1" /> {/* Changed Filter to Settings2 */}
                            Filter
                        </button>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center place-items-center">
                        {people.map((person, index) =>
                            // Only render the card if it hasn't been closed
                            !closedCards.has(index) ? (
                                <div
                                    key={index}
                                    className={`relative bg-white p-4 rounded-xl shadow-md border w-full max-w-[220px] h-80 flex flex-col items-center transition-all duration-300 ${
                                        animating.has(index)
                                            ? "opacity-0 transform translate-y-4" // Fade and slide out the card
                                            : "opacity-100"
                                    }`}
                                >
                                    {/* Grey Top Section */}
                                    <div className="relative bg-gray-300 w-full h-14 rounded-t-lg">
                                        {/* Close (X) Button */}
                                        <button
                                            className="absolute top-2 right-2 bg-gray-500 text-white rounded-full p-1 hover:bg-gray-600"
                                            onClick={() => handleCloseCard(index)}
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>

                                    {/* Profile Picture Overlapping */}
                                    <div className="relative flex justify-center">
                                        <div className="absolute -top-8 w-16 h-16 bg-gray-200 border-4 border-white rounded-full flex items-center justify-center shadow">
                                            <Users className="w-8 h-8 text-gray-500" />
                                        </div>
                                    </div>

                                    {/* Name & Bio */}
                                    <p className="text-center font-semibold mt-10">{person.name}</p>
                                    <p className="text-center text-gray-500 text-sm">{person.bio}</p>

                                    {/* Mutual Connections */}
                                    <div className="flex items-center justify-center space-x-2 mt-2 text-gray-500 text-sm">
                                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                        <span>{person.mutualConnections}</span>
                                    </div>

                                    {/* Spacing to push button down */}
                                    <div className="flex-grow"></div>

                                    {/* Connect Button */}
                                    <button className="mt-3 w-full py-2 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center space-x-1 hover:bg-blue-100">
                                        <Users className="w-4 h-4" />
                                        <span>Connect</span>
                                    </button>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mynetwork;
