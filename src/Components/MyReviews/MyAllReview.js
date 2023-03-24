import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAllReviewDetails from './MyAllReviewDetails';

const MyAllReview = () => {
   

    const {data: reviews = [], refetch}= useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch('https://loserver.vercel.app/reviews')
            const data = await res.json()
            return data
        }
    })
    
    
    return (
        <div className='App violetColor textColor'>
            <h1 className='text-4xl'>My All Review</h1>
            <section className="   ">
	{
        reviews?.map(allreview => <MyAllReviewDetails key={allreview._id} allreview={allreview} refetch={refetch}></MyAllReviewDetails>)
    }
</section>
        </div>
    );
};

export default MyAllReview;