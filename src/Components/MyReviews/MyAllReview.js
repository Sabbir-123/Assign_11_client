import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAllReviewDetails from './MyAllReviewDetails';
import { AuthContext } from '../../Constexts/AuthpProvider';

const MyAllReview = () => {
   
    const { user } = useContext(AuthContext);
    const {data: reviews = [], refetch, isLoading}= useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch(`https://loserver.vercel.app/myreviews?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    console.log(reviews)
    
    if(isLoading){
        return <p>Loading</p>
    }
    return (
        <div className='App violetColor textColor'>
            <h1 className='text-4xl'>All Reviews</h1>
            <section className="   ">
	{
        reviews?.map(allreview => <MyAllReviewDetails key={allreview._id} allreview={allreview} refetch={refetch}></MyAllReviewDetails>)
    }
</section>
        </div>
    );
};

export default MyAllReview;