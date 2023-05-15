import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div>
            <section className="p-4 lg:p-8  textColor ">
	<div className="container mx-auto space-y-12">
    <div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl   ">Why Choose Us?</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Trust Starts Here - Real Reviews, Real Services!</p>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://pathao.com/wp-content/uploads/2018/12/ic_Parcel_Feature_1.png" alt="" className="h-80  aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
				<h3 className="text-3xl font-bold">Expert Analysis</h3>
				<p className="my-6   ">Our team is made up of industry experts who have years of experience in the delivery and logistics sector. We provide thorough and in-depth reviews of various delivery services based on our extensive knowledge and understanding of the industry.</p>
<Link to={'/services'}>
<button type="button" className="self-start btn btn-primary">Enlist Your Review According to Service</button>

</Link>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://cdni.iconscout.com/illustration/premium/thumb/home-delivery-charges-2527795-2117420.png" alt="" className="h-80    aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
				<h3 className="text-3xl font-bold">Unbiased Reviews</h3>
				<p className="my-6   ">We pride ourselves on providing unbiased reviews. We don't accept payment or gifts from the delivery services we review, ensuring our recommendations are honest and trustworthy.</p>
				<button type="button" className="self-start btn btn-primary">Request For Verification</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://www.swiftdelivery.ae/images/fulfillmentBanner.png" alt="" className="h-80    aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
				<h3 className="text-3xl font-bold">Community Engagement</h3>
				<p className="my-6   ">We value the opinions and experiences of our users. Our website features an interactive platform where users can rate and review services, providing a comprehensive and diverse range of opinions.</p>
				<button type="button" className="self-start btn btn-primary">Engage in Our Community</button>
			</div>
		</div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://t3.ftcdn.net/jpg/03/03/74/44/360_F_303744422_yvDMEYv1daG4QW1jOAt7m5EGzUjNr62g.jpg" alt="" className="h-80    aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
            <h3 className="text-3xl font-bold">Updated Information</h3>
				<p className="my-6   ">The world of delivery services is dynamic and ever-changing. We consistently update our reviews and information to ensure you have access to the most current data.</p>
				<button type="button" className="self-start btn btn-primary">Request Details for Particular Service</button>
			</div>
		</div>
		


        
	</div>
</section>
        </div>
    );
};

export default Feature;