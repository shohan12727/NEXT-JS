import React from "react";

const FoodCardSkeleton = () => {
  return (
      <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-48 bg-gray-300" />

        {/* Content Skeleton */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <div className="h-5 bg-gray-300 rounded w-3/4" />

          {/* Category */}
          <div className="h-4 bg-gray-200 rounded w-1/2" />

          {/* Price */}
          <div className="h-5 bg-gray-300 rounded w-1/4" />

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <div className="flex-1 h-10 bg-gray-300 rounded-lg" />
            <div className="flex-1 h-10 bg-gray-200 rounded-lg" />
          </div>
        </div>
    </div>
  );
};

export default FoodCardSkeleton;
