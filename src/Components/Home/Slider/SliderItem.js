import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({slide}) => {
    const {image,id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='lg:text-6xl font-bold text-white md:text-4xl sm:text-2xl'>
                       Delivery 
                        Solution <br />
                        in One Place
                    </h1>
                </div>
                <div className="absolute justify-end transform -translate-y-1/2 w-2/5 left-20 top-1/2  hidden lg:block  ">
                    <p  className='lg:text-5xl sm:text-xl md:text-3xl text-white md:hidden sm:hidden lg:block '>Parcel Delivered <br /> On Time with <br /> no Hassle</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <Link to={'/login'}>
                    <button className="btn-xs lg:btn-md btn-primary mr-5 mb-20 lg:mb-3 rounded-lg">Log In</button>
                    </Link>
                    <div>
                    <Link to={'/register'}>
                    <button className="btn-xs lg:btn-md btn-primary rounded-lg">Register</button>
                    </Link>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-10 right-15 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle border-none bg-gray-600 mr-5">❮❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle border-none bg-gray-600">❯❯</a>
                </div>
            </div>
    );
};

export default SliderItem;