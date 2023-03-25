import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Constexts/AuthpProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const router = useParams()
    const {id}= router;

const navigate= useNavigate()

    const {data: review = {}, refetch, isLoading}= useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch(`https://loserver.vercel.app/reviews/${id}`)
            const data = await res.json()
            return data
        }
    })
console.log(review)


const handleSubmit= async (e) =>{
e.preventDefault();
const singleReview = {
    title:e.target.title.value,
    serviceID: e.target.serviceID.value,
    details:  e.target.details.value,
}

await fetch(`https://loserver.vercel.app/reviews/edit/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(singleReview)
    }).then(res=>res.json())
    .then(data=>{
        if(data.success){
            swal(data?.message);
            if(isLoading){
                navigate('/myallreviews')
            }
            
        }else{
            swal(data?.error)
        }
    })
    .catch(err=> swal(err?.message))

console.log(singleReview)
}

    return (
        <div className="px-5 purple">
        <section className="p-10  rounded-2xl ">
          <form
       
            onSubmit={handleSubmit}
            action=""
            className="container flex flex-col mx-auto  ng-untouched ng-pristine ng-valid"
          >
            <p className=" text-white text-xl font-bold">
              Update Your Reviews {user?.displayName}{" "}
            </p>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="title" className="text-white text-xl font-bold">
                  Service Title
                </label>
  
                <input
                defaultValue={review?.title}
                  id="title"
                  name="title"
                  type="text"
                  required
                  placeholder="Service Title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2   text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="title" className="text-white text-xl font-bold">
                  Service ID
                </label>
  
                <input
                defaultValue={review?.serviceID}
                  id="serviceID"
                  name="serviceID"
                  type="text"
                  required
                  placeholder="Service Title"
                  
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2   text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="details" className=" text-white text-xl font-bold">
                  Review
                </label>
                <textarea
                defaultValue={review?.details}
                  id="details"
                  name="details"
                  required
                  placeholder="Your Service Details"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-black  p-2  "
                ></textarea>
              </div>
              <div className="text-right">
                <button className="py-2 px-6 btn btn-primary text-white font-bold">
                  Update
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
};

export default UpdateReview;





