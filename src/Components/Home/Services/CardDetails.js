import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Constexts/AuthpProvider";
import AddReviews from "../../MyReviews/AddReviews";
import MyReviews from "../../MyReviews/MyReviews";

const CardDetails = () => {
  const serviceDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const { image, details, price, _id, title } = serviceDetails;
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const shortDescription = details?.slice(0, 150) + "...";
  console.log(user);

 
  return (
    <div className="violetColor textColor">
      {/* Old Details */}
      <div className="p-5 mx-auto sm:p-10 md:p-16 ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image} alt="" className="w-full h-60 sm:h-96 " />
		<div className="p-6 purple pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{title}</a>
        <p className='font-semibold'>Price: {price}</p>
			</div>
			<div className="py-2  text-gray-400">{showFullDescription ? details : shortDescription} <button className="text-blue-500" onClick={() => setShowFullDescription(!showFullDescription)}>
  {showFullDescription ? "Read Less" : "Read More"}
</button></div>
		</div>
	</div>
</div>
      <div className="grid justify-center ">
      
      {/* Add Review */}
      <div className="mx-auto">
        <div className="grid lg:flex">
            <div className="mx-auto">
                 {user?.email ? 
                 <>
                  <AddReviews serviceDetails={serviceDetails} reviews={reviews} setReviews={setReviews}></AddReviews>
                 </>
                 :
                 <>
                 <h1>Please log in to Add Your Review</h1>
                 <Link to={'/login'}>
                 <button className="btn btn-primary"> Log in</button>
                  </Link>
                  
                 </>}
            </div>
            {/* All Reviews */}
            <div className=" purple rounded-xl p-10 mx-5 mb-5">
                  <h1 className="text-2xl">All reviews</h1>
                <MyReviews key={_id} serviceDetails={serviceDetails} reviews={reviews} setReviews={setReviews} ></MyReviews>
            </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default CardDetails;
