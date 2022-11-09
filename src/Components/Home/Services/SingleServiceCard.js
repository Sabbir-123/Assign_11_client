import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleServiceCard = ({singleService}) => {
    const {_id, category_id , title, price, image, details }= singleService;
    return (
        <PhotoProvider>
            <div>
            <div className="flex flex-col dark:bg-gray-900">
				<Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<PhotoView src={image}>
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image}/>
                    </PhotoView>
				</Link>
				<div className="flex flex-col flex-1 p-6">
					<Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
					<Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{title}</Link>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{details?.length> 100 ? details.slice(0,100)+'...' : details}</h3>
                    <p className='font-semibold'>{price}</p>
					<Link to={`/services/${_id}`}><button className='btn btn-primary'>See Details</button></Link>
				</div>
			</div>
        </div>
        </PhotoProvider>
    );
};

export default SingleServiceCard;