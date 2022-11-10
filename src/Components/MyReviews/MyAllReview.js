import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAllReviewDetails from './MyAllReviewDetails';

const MyAllReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`https://loserver.vercel.app/reviews`)
        .then(res => res.json())
    .then(data => {setReviews(data)
    })
        
    }, [])
    
    
    return (
        <div className='App'>
            <h1>My All Review</h1>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	{
        reviews.map(allreview => <MyAllReviewDetails key={allreview._id} allreview={allreview}></MyAllReviewDetails>)
    }
</section>
        </div>
    );
};

export default MyAllReview;