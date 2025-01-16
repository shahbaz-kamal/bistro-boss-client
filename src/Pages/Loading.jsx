import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-green-400 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <p className="text-lg font-medium animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
