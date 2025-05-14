// components/RestaurantShimmerList.js
import React from "react";
import BoxShimmer from "./BoxShimmer";

const BoxShimmerList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <BoxShimmer key={index} />
        ))}
    </div>
  );
};

export default BoxShimmerList;
