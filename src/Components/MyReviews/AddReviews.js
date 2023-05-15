import React, { useContext, useRef, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Constexts/AuthpProvider";

const AddReviews = ({serviceDetails, setReviews, reviews}) => {
  const { user } = useContext(AuthContext);
  const anotherId = Math.floor(1000 + Math.random() * 9000);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewUser = user?.displayName;
    const reviewerImage = user?.photoURL;
    const email = user?.email;
    const review = {
      title: serviceDetails?.title,
      details: e.target.details.value,
      serviceID : e.target.serviceID.value,
      reviewUser,
      reviewerImage,
      email,
    };

    fetch("https://loserver.vercel.app/addreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setReviews([...reviews, review])
          swal("Thanks for your Precious Review");
          formRef.current.reset();
        } else {
          swal(data.error);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mx-5">
      <section className="p-10 purple rounded-2xl ">
        <form
        ref={formRef}
          onSubmit={handleSubmit}
          action=""
          className="container flex flex-col mx-auto  ng-untouched ng-pristine ng-valid"
        >
          <p className="font-medium text-lg">
            Add Your Reviews {user?.displayName}{" "}
          </p>
          <p className="font-medium text-sm">How was your experience?</p>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="title" className="text-sm">
                Service Title
              </label>

              <input
              defaultValue={serviceDetails?.title}
                id="title"
                name="title"
                type="text"
                required
                placeholder="Service Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2   text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="title" className="text-sm">
                Service ID
              </label>

              <input
              defaultValue={anotherId}
                id="title"
                name="serviceID"
                type="text"
                required
                placeholder="Service Title"
                
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2   text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="details" className="text-sm">
                Review
              </label>
              <textarea
                id="details"
                name="details"
                required
                placeholder="Your Service Details"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-black  p-2  "
              ></textarea>
            </div>
            <div className="text-right">
              <button className="py-2 px-6 btn btn-primary text-white font-bold">
                Add
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddReviews;
