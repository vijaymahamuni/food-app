// components/Shimmer.js
import React from "react";

const BoxShimmer = () => {
  return (
    <div className="m-2 w-64 h-48 bg-gray-200 rounded-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded mt-4 mx-4"></div>
      <div className="h-4 bg-gray-300 rounded mt-3 mx-4"></div>
      <div className="h-4 bg-gray-300 rounded mt-2 mx-4 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mt-2 mx-4 w-1/2"></div>
    </div>
  );
};

export default BoxShimmer;
