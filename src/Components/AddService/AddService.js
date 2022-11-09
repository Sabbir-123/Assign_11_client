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
	
		fetch("http://localhost:5000/addservices", {
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
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Add Your Services</p>
				<p className="text-xs">Are You an Expert on a specific Field? Join with Us. </p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="title" className="text-sm">Service Title</label>
					<input id="title" name='title' type="text" required placeholder="Service Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="image" className="text-sm">Image</label>
					<input id="image" type="text" name='image' required placeholder="https://... (Service's Image Link)" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-100" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="price" className="text-sm">Price</label>
					<input id="price" type="text" name='price' required placeholder="Enter Your Service Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-100" />
				</div>
				<div className="col-span-full">
					<label for="details" className="text-sm">Details</label>
					<textarea id="details" name='details' required placeholder="Your Service Details" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
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