import React from 'react';

const Feature = () => {
    return (
        <div>
            <section className="p-4 lg:p-8  textColor ">
	<div className="container mx-auto space-y-12">
    <div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl   ">Why Choose Us?</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Your call and Your Parcel, Our Goal and Our Commitment</p>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://pathao.com/wp-content/uploads/2018/12/ic_Parcel_Feature_1.png" alt="" className="h-80  aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
				<h3 className="text-3xl font-bold">Daily Pick up, No limitations</h3>
				<p className="my-6   ">Raihan's Delivery gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.</p>
				<button type="button" className="self-start btn btn-primary">Enlist Your Parcel</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://cdni.iconscout.com/illustration/premium/thumb/home-delivery-charges-2527795-2117420.png" alt="" className="h-80    aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
				<h3 className="text-3xl font-bold">Faster Payment Service</h3>
				<p className="my-6   ">At Raihan's Delivery you can request for your payment every six days of the week. We Courier provides multiple payment methods such as cash, Bkash or Rocket payment. Also you can collect the money simply by transferring your current balance to your preferred Bank. Our faster and secure payment service will provide the ultimate solution to your payment problem which can occur using a logistics service.</p>
				<button type="button" className="self-start btn btn-primary">Request For Payment</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://www.swiftdelivery.ae/images/fulfillmentBanner.png" alt="" className="h-80    aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
				<h3 className="text-3xl font-bold">Cash on Delivery</h3>
				<p className="my-6   ">At Raihan's Delivery we will collect the cash on behalf of you. Our trusted delivery man will deliver your parcel to your customer and collect the money. And then with our various payment methods we will give your money back to you. Also we are giving you the opportunity of sending a non-conditioned parcel to delivery as well.</p>
				<button type="button" className="self-start btn btn-primary">Enlist Your Parcel for COD</button>
			</div>
		</div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://t3.ftcdn.net/jpg/03/03/74/44/360_F_303744422_yvDMEYv1daG4QW1jOAt7m5EGzUjNr62g.jpg" alt="" className="h-80    aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   ">
            <h3 className="text-3xl font-bold">Real-Time Tracking</h3>
				<p className="my-6   ">Raihan's Delivery provides an unique tracking code for your every consignments. Through our website you can learn the current status of the products and stay up to date.</p>
				<button type="button" className="self-start btn btn-primary">Track Your Parcel</button>
			</div>
		</div>
		


        
	</div>
</section>
        </div>
    );
};

export default Feature;