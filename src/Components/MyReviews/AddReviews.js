import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Constexts/AuthpProvider";

const AddReviews = ({serviceDetails}) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewUser = user?.displayName;
    const reviewerImage = user?.photoURL;
    const review = {
      title: e.target.title.value,
      details: e.target.details.value,
      serviceID : e.target.serviceID.value,
      reviewUser,
      reviewerImage,
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
          swal("Thanks for your Precious Review");
        } else {
          swal(data.error);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mr-5">
      <section className="p-6 bg-gray-900 dark:text-gray-50">
        <form
          onSubmit={handleSubmit}
          action=""
          className="container flex flex-col mx-auto  ng-untouched ng-pristine ng-valid"
        >
          <p className="font-medium text-xl">
            Add Your Reviews {user?.displayName}{" "}
          </p>
          <p className="font-medium text-md">How was your experience?</p>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="title" className="text-sm">
                Service Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Service Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-100"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="title" className="text-sm">
                Service ID
              </label>

              <input
              defaultValue={serviceDetails._id}
                id="title"
                name="serviceID"
                type="text"
                required
                placeholder="Service Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-100"
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
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
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
