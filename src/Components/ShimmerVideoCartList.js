import React from "react";
import Shimmer from "./Shimmer"; // Assuming you have the Shimmer component implemented

const ShimmerVideoCardList = () => {
  const shimmerCards = Array.from({ length: 50 }, (_, index) => (
    <Shimmer key={index} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {shimmerCards}
    </div>
  );
};

export default ShimmerVideoCardList;
