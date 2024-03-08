import React from "react";

const Shimmer = () => {
  return (
    <div className="p-2 m-2 shadow-lg space-y-0 w-60 bg-white rounded-lg overflow-hidden border border-gray-300 relative">
      {/* Thumbnail Shimmer */}
      <div className="h-36 bg-gradient-to-b from-gray-300 to-gray-200 animate-pulse"></div>

      {/* Text Content Shimmer */}
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse w-4/5"></div>
        <div className="h-3 bg-gray-200 rounded mb-2 animate-pulse w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded mb-2 animate-pulse w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
      </div>
    </div>
  );
};

export default Shimmer;
