import React from 'react';
import SliderItem from './SliderItem';
import img1 from '../../../Assets/img1.png'
import img2 from '../../../Assets/img2.png'
import img3 from '../../../Assets/img3.png'
import img4 from '../../../Assets/img4.png'



const sliderImage = [
    {
        image: img4,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    }
]


const Slider = () => {
    return (
        <div className="carousel py-10 mx-5">
        {
            sliderImage.map(slide => <SliderItem key={slide.id} slide={slide}>

            </SliderItem>)
        }
        
    </div>
    );
};

export default Slider;