import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Constexts/AuthpProvider";
import Reviews from "./Reviews";

const MyReviews = ({serviceDetails, setReviews, reviews}) => {
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    fetch(`https://loserver.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow      ">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
