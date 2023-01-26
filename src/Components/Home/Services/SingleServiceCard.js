import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleServiceCard = ({singleService}) => {
    const {_id, category_id , title, price, image, details }= singleService;
    return (
        <PhotoProvider>
            <div>
            <div className="flex flex-col border rounded-xl shadow-xl shadow-slate-500  ">
				<Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<PhotoView src={image}>
                    <img alt="" className="object-cover w-full h-52   rounded-xl " src={image}/>
                    </PhotoView>
				</Link>
				<div className="flex flex-col flex-1 p-6">
					<Link to={`/services/${_id}`} aria-label="Te nulla oportere reprimique his dolorum"></Link>
                    <Link to={`/services/${_id}`} className="text-2xl font-bold tracking-wider uppercase hover:underline ">{title?.length>11 ? title.slice(0,11)+'...' : title}</Link>
					<p className='font-semibold'>Price: {price}</p>
                    <h3 className="flex-1 py-2 text-md font-semibold leading-snug">{details?.length> 100 ? details.slice(0,100)+'...' : details}</h3>
                    
<div className='grid justify-center'>
<Link to={`/services/${_id}`}>
    <button className='btn btn-primary'>See Details</button></Link>
</div>
				</div>
			</div>
        </div>
        </PhotoProvider>
    );
};

export default SingleServiceCard;