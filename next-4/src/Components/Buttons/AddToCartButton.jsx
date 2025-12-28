"use client";
import { CartContext } from "@/Context/CartProvider";
import React, { use, useState } from "react";

const AddToCartButton = ({food}) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart} = use(CartContext);
  const handleAddToCartButton = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      disabled={inCart}
      onClick={() => handleAddToCartButton()}
      className="flex-1 bg-green-600 text-white py-2 rounded-lg disabled:bg-gray-100 disabled:text-gray-400 hover:bg-green-700 transition"
    >
      {inCart ? "Added" : " Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
