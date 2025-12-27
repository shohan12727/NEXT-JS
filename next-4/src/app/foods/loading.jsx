import FoodCardSkeleton from '@/Components/Skeleton/FoodCardSkeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
