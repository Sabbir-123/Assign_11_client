import React, { useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://loserver.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <section className="py-6 sm:py-12 violetColor text-white   ">
	<div className="container p-6 mx-auto space-y-8 ">
		<div className="space-y-2 text-center ">
			<h2 className="text-3xl font-bold text-white">Our Services</h2>
			<p className="font-serif text-sm  text-white ">What We Provide?</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{
                services.map(singleService=> <SingleServiceCard key={singleService._id} singleService={singleService}></SingleServiceCard>)
            }
		</div>
	</div>
</section>
        </div>
    );
};

export default Services;