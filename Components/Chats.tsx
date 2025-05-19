"use client";
import React, { useState } from "react";
import Image from "next/image";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  // const handleSendMessage = () => {
  //   if (message.trim()) {
  //     alert(`Message sent: ${message}`);
  //     setMessage("");
  //   }
  // };

  return (
    <div className="bg-gray-100 px-5 py-10 md:px-20">
      <div className="mb-10 text-center transform translate-x-[1%]">
        <div className="relative inline-block px-5 py-2 bg-gradient-to-r from-green-950 to-green-400 text-white font-bold text-sm rounded after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:w-full after:h-full after:bg-[#50e45b] after:-z-10 after:rounded after:skew-x-[-10deg]">
          Contacts
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Contact Info */}
        <div className="text-left">
          <div className="text-gray-700">
            <p className="flex items-center gap-2 mt-2">
              <span className="icon"></span>📧 Email:{" "}
              <a
                href="mailto:info@bldc.ng"
                className="text-blue-600 no-underline"
              >
                info@bldc.ng
              </a>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span className="icon"></span>📞 Phone:{" "}
              <a
                href="tel:+2348120505034"
                className="text-blue-600 no-underline"
              >
                +2348120505034
              </a>
            </p>
          </div>
        </div>

        {/* Chat Box Section */}
        <div className="relative text-center mt-10 md:mt-0">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="focus:outline-none"
          >
            <Image
              src="/images/chat.png"
              height={300}
              width={100}
              alt="Chat Assistant"
              className="w-32 h-28 rounded-full shadow-md border-4 border-white"
            />
            <div className="absolute top-[60%] right-0 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm shadow-md">
              {isChatOpen ? "Close" : "Chat"}
            </div>
          </button>
          <p className="text-gray-600 text-sm mt-2">Chat with Mimi</p>

          {isChatOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-white border rounded-lg shadow-lg p-4 text-left z-10">
              <p className="text-sm text-gray-800 mb-2 font-medium">Mimi:</p>
              <p className="text-sm text-gray-600 mb-3">
                Hi there! How can I help you today?
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  // onClick={handleSendMessage}
                  className="bg-emerald-500 text-white px-4 py-2 rounded text-sm hover:bg-emerald-600 transition"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
