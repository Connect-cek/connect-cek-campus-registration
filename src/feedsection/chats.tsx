import React, { useState } from "react";
import { Phone, Video, Smile, Image, Send, Check, CheckCheck, ArrowLeft } from "lucide-react";
import Dashbar from "../components/Dashnavbar";
import Doodlebg from "../assets/images/doodle.jpg";

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello!", status: "sent" },
    { text: "How are you?", status: "delivered" },
    { text: "I'm good!", status: "seen" },
  ]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const contacts = [
    { id: "1", name: "John Doe", avatar: "https://via.placeholder.com/40" },
    { id: "2", name: "Jane Smith", avatar: "https://via.placeholder.com/40" },
    { id: "3", name: "Mike Ross", avatar: "https://via.placeholder.com/40" },
    { id: "1", name: "John Doe", avatar: "https://via.placeholder.com/40" },
    { id: "2", name: "Jane Smith", avatar: "https://via.placeholder.com/40" },
    { id: "3", name: "Mike Ross", avatar: "https://via.placeholder.com/40" },
    { id: "1", name: "John Doe", avatar: "https://via.placeholder.com/40" },
    { id: "2", name: "Jane Smith", avatar: "https://via.placeholder.com/40" },
    { id: "3", name: "Mike Ross", avatar: "https://via.placeholder.com/40" },
    { id: "1", name: "John Doe", avatar: "https://via.placeholder.com/40" },
    { id: "2", name: "Jane Smith", avatar: "https://via.placeholder.com/40" },
    { id: "3", name: "Mike Ross", avatar: "https://via.placeholder.com/40" },
  ];

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, status: "sent" }]);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-[#FAE9E4] min-h-screen p-4 pt-20">
      <Dashbar />

      {/* Main Chat Layout */}
      <div className="flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
        {/* Sidebar (Fixed Height) */}
        <div className={`w-full md:w-1/3 bg-white p-4 shadow-md  h-full ${selectedChat ? "hidden md:block" : "block"}`}>
          <h2 className="text-lg font-bold">Chats</h2>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4 space-y-2 overflow-y-auto h-[calc(100vh-160px)]">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => setSelectedChat(contact.id)}
              >
                <img src={contact.avatar} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-500">Last message...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`w-full md:w-2/3 flex flex-col relative h-full ${selectedChat ? "block" : "hidden md:block"}`}>
          <div className="flex justify-between items-center bg-white p-4 shadow-md">
            <div className="flex items-center space-x-2">
              <ArrowLeft className="w-6 h-6 md:hidden cursor-pointer" onClick={() => setSelectedChat(null)} />
              <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
              <p className="font-medium">Name</p>
            </div>
            <div className="flex space-x-4">
              <Phone className="w-5 h-5 cursor-pointer" />
              <Video className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-[#FCEAE4] pb-20" style={{
            backgroundImage: `url(${Doodlebg})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-8 h-8 rounded-full object-cover" />
                <div className="bg-white p-2 rounded-lg shadow-md">Hey, how are you?</div>
              </div>
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

          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 flex items-center space-x-2 shadow-md rounded-full">
            <Smile className="w-6 h-6 text-gray-500 cursor-pointer" />
            <div className="relative flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              {message && <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 cursor-pointer" onClick={handleSendMessage} />}
            </div>
            <Image className="w-6 h-6 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
