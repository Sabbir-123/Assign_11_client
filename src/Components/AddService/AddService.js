import React from 'react';
import swal from 'sweetalert';

const AddService = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const service = {
			title: e.target.title.value,
		  price: parseInt(e.target.price.value),
		  image: e.target.image.value,
		  details: e.target.details.value,
		};
	
		fetch("https://loserver.vercel.app/addservices", {
		  method: "POST",
		  headers: {
			"content-type": "application/json"
		  },
		  body: JSON.stringify(service)
		}).then(res => res.json())
		.then(data => {
			console.log(data)
		  if(data.acknowledged){
			swal('You have Successfully added your Service');

		  } else {
			swal(data.error);
		  }
		})
		.catch(error => {
		  console.log(error.message);
		})
		
	  };
    return (
        <div className='violetColor textColor'>
            <section className="p-6 ">
	<form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-4xl">Add Your Services</p>
				<p className="">Are You an Expert on a specific Field? Join with Us. </p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="title" className="text-sm">Service Title</label>
					<input id="title" name='title' type="text" required placeholder="Service Title" className="w-full rounded-md focus:ring  text-black p-2 focus:ring-opacity-75 focus:ring-violet-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="image" className="text-sm">Image</label>
					<input id="image" type="text" name='image' required placeholder="https://... (Service's Image Link)" className="w-full text-black p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400    text-black" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="price" className="text-sm">Price</label>
					<input id="price" type="text" name='price' required placeholder="Enter Your Service Price" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400    text-black" />
				</div>
				<div className="col-span-full">
					<label for="details" className="text-sm">Details</label>
					<textarea id="details" name='details' required placeholder="Your Service Details" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400  text-black"></textarea>
				</div>
				<div className="text-right">
            <button className="py-2 px-6 btn btn-primary text-white font-bold">Add</button>
          </div>
			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default AddService;