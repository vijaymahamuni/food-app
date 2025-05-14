// components/RestaurantShimmerList.js
import React from "react";
import HomeShimmer from "./HomeShimmer";

const HomeShimmerList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <HomeShimmer key={index} />
        ))}
    </div>
  );
};

export default HomeShimmerList;
