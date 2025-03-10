import React, { useState } from "react";
import { Phone, Video, Smile, Image, Send, Check, CheckCheck } from "lucide-react";
import Dashbar from "../components/Dashnavbar"; // Import Navbar

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "lacus lorem consectetur", status: "sent" }, // ✓ (sent)
    { text: "Lorem ipsum dolor sit amet", status: "delivered" }, // ✓✓ (delivered)
    { text: "Lorem ipsum", status: "seen" }, // ✓✓ (blue for seen)
  ]);

  return (
    <div className="h-screen flex flex-col bg-[#FCEAE4]">
      {/* Navbar */}
      <Dashbar />

      {/* Main Chat Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - 1/3 width on larger screens, hidden on smaller screens */}
        <div className="w-1/3 bg-white p-4 shadow-md overflow-y-auto hidden md:block">
          <h2 className="text-lg font-bold">Chats</h2>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4 space-y-2 overflow-y-auto max-h-[80vh]">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-sm text-gray-500">Message sent</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area - 2/3 width */}
        <div className="w-full md:w-2/3 flex flex-col relative">
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-white p-4 shadow-md">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-medium">Name</p>
            </div>
            <div className="flex space-x-4">
              <Phone className="w-5 h-5 cursor-pointer" />
              <Video className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#FCEAE4] pb-20">
            <div className="space-y-2">
              {/* Left messages */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="bg-white p-2 rounded-lg shadow-md">Lorem ipsum dolor sit a</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="bg-white p-2 rounded-lg shadow-md">Lorem ipsum</div>
              </div>

              {/* Right messages with ticks */}
              {messages.map((msg, index) => (
                <div key={index} className="flex justify-end">
                  <div className="bg-blue-400 text-white p-2 rounded-lg shadow-md flex items-center space-x-1">
                    <span>{msg.text}</span>
                    {msg.status === "sent" && <Check className="w-4 h-4 text-white" />}
                    {msg.status === "delivered" && <CheckCheck className="w-4 h-4 text-white" />}
                    {msg.status === "seen" && <CheckCheck className="w-4 h-4 text-blue-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Chat Input */}
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 flex items-center space-x-2 shadow-md rounded-full">
            <Smile className="w-6 h-6 text-gray-500 cursor-pointer" />
            <div className="relative flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              {message && (
                <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 cursor-pointer" />
              )}
            </div>
            <Image className="w-6 h-6 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
