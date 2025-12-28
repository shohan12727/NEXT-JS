import Link from "next/link";
import React from "react";
import AddToCartButton from "../Buttons/AddToCartButton";

const FoodCard = ({ food }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{food.title}</h2>

        <p className="text-sm text-gray-500">Category: {food.category}</p>

        <p className="text-md font-bold text-green-600">${food.price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <AddToCartButton />
          <Link
            href={`/foods/${food.id}`}
            className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
