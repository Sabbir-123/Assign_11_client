import React, { useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Our Services</h2>
			<p className="font-serif text-sm dark:text-gray-400">What We Provide?</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{
                services.map(singleService=> <SingleServiceCard key={singleService.category_id} singleService={singleService}></SingleServiceCard>)
            }
		</div>
	</div>
</section>
        </div>
    );
};

export default Services;