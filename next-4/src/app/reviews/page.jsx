"use client";
import ReviewCard from "@/Components/Cards/ReviewCard";
import React, { useEffect, useState } from "react";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        // console.log(data.reviews);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <h2 className="text-3xl mb-5">
        Total Food <span>{reviews.length}</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
