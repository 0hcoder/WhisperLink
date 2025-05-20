import React from "react";
import NavBar from "./Navbar";

const ScaryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
   
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-0"></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/featured/?dark,forest")',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 p-8 text-center">
        <h1 className="text-5xl font-bold mb-4 text-red-600 drop-shadow-md animate-pulse">
          Send Message Anonymously
        </h1>
        <p className="text-lg font-light text-gray-300 italic mb-6">
          Feel Free For Messaging, No one knows you
        </p>

        {/* Creativity: Adding a glowing button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Send Your Message Now
          </button>
        </div>
      </div>

      {/* Additional Effects */}
      <div className="absolute w-full h-full flex justify-center items-center z-0">
        <div className="absolute w-24 h-24 bg-red-600 opacity-40 rounded-full blur-xl animate-ping"></div>
      </div>
    </div>
  );
};

export default ScaryPage;
