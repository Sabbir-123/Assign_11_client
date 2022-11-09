import React from 'react';

const Reviews = ({review}) => {
    const {title,details, reviewUser, reviewerImage }= review
    return (
        <div>
            <div>
          <h2 className="text-2xl font-bold">
            {title}
          </h2>
          <p className="mt-4 dark:text-gray-400">
           {details}
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src={reviewerImage}
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">{reviewUser}</h3>
              {/* <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Feb 18th 2021
              </time> */}
            </div>
          </div>
        </div>
        </div>
    );
};

export default Reviews;