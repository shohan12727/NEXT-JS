import React from "react";
import Link from "next/link";
 export function generateStaticParams() {
  return [{ id: '52991' }, { id: '52947' }, { id: '52958' }]
}

const getSingleFood = async (id) => {

 

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <h2 className="text-center text-xl font-semibold mt-10">
        Food not found
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="rounded-2xl shadow-lg overflow-hidden border">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">{food.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Category: {food.category}</span>
            <span>Area: {food.area}</span>
          </div>

          <p className="text-lg font-semibold">Price: ₹{food.price}</p>

          <div className="flex gap-3 pt-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-md bg-black text-white text-sm"
            >
              Back to Menu
            </Link>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border text-sm"
              >
                Watch Recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
