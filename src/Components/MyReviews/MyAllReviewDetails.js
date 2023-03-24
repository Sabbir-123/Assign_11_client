import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Constexts/AuthpProvider";

const MyAllReviewDetails = ({ allreview, refetch}) => {
  const {_id ,title, details, reviewUser, reviewerImage } = allreview;
    const {user }  = useContext(AuthContext)
      const [myReviews, setmyReviews] = useState([])


  


  const handleDelete = (id)=>{
    const confirm = window.confirm('Are you sure you want to Delete?')
   
    if(confirm){
        fetch(`https://loserver.vercel.app/reviews/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
           console.log(data, id)
            if(data.deletedCount>0){
              refetch()
                alert('deleted successfully')
              
                const rest = myReviews.filter(review => review._id !== id )
                setmyReviews(rest)
            }
        })
    }

  }


const navigate= useNavigate();
  const handleUpdate = (id)=> {
  navigate(`/update/${id}`)
}
  return (
    <div>
      <div className="container flex  mx-auto ">
        <div className="">
          <img src={reviewerImage} className="rounded-xl" alt="" />
          <p>{reviewUser}</p>
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
         
          <h2 className="text-3xl font-semibold leading-none">{title}</h2>
          <p className="mt-4 mb-8 text-sm">{details}</p>
          <div>
            <button onClick={()=>handleDelete(_id)} className="self-start px-10   btn btn-primary text-lg  font-medium rounded-2xl     ">
              Delete
            </button>
            <Link to={`/update/${_id}`}>
            <button onClick={()=>handleUpdate(allreview._id)} className="self-start btn btn-primary px-10  text-lg font-medium rounded-2xl     ">
              Update
            </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MyAllReviewDetails;
