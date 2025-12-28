import FoodCard from "@/Components/Cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  // console.log(foods)

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl">
        Total Food <span>{foods.length}</span>
      </h2>

      <div className="flex gap-5">
        <div className="grid grid-cols-3 flex-1 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-[300px] border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2> <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
