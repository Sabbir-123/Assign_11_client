import React from 'react';

const Reviews = ({review}) => {
    const {title,details, reviewUser, reviewerImage }= review
    return (
        <div className='border rounded-md mb-3 p-3'>
              <div className="flex items-center mt-8 space-x-4">
          <img
            src={reviewerImage}
            alt=""
            className="w-10 h-10 rounded-full   "
          />
          <div>
            <h3 className="text-sm font-medium">{reviewUser}</h3>
          </div>
        </div>
        <h2 className="text-2xl font-bold">
         Service Name: {title}
        </h2>
        <p className="mt-4   ">
         {details}
        </p>
      
        <hr />
      </div>
    );
};

export default Reviews;