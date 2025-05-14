// components/RestaurantCardShimmer.js
import React from "react";

const HomeShimmer = () => {
  return (
    <div className="m-4 w-72 bg-gray-100 rounded-lg animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>

      {/* Content Placeholder */}
      <div className="flex justify-between p-4">
        <div>
          <div className="h-5 w-40 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-48 bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
        {/* Like Button Placeholder */}
        <div className="h-6 w-6 bg-gray-300 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default HomeShimmer;
