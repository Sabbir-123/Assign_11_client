import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Constexts/AuthpProvider';
import MyAllReviewDetails from './MyAllReviewDetails';

const AdminReview = () => {
   
    const { user } = useContext(AuthContext);
    const {data: reviews = [], refetch, isLoading}= useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch(`https://loserver.vercel.app/reviews`)
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

export default AdminReview;