import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Constexts/AuthpProvider";
import Reviews from "./Reviews";

const MyReviews = () => {
const [reviews, setReviews] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
}, [])





  return (
    <div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        {
            reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
        }
      </div>
    </div>
  );
};

export default MyReviews;
