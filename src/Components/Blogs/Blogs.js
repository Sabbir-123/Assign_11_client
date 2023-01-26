import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blogs = () => {
    const blogs = useLoaderData()
   
    return (
        <section className="py-6 sm:py-12 violetColor textColor    ">
	<div className="container p-6 mx-auto space-y-8">
<div className="space-y-2 text-center purple p-2 rounded-xl ">
    <h2 className="text-3xl font-bold">Blogs</h2>
    
</div>
<div className="grid grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-2">
{
        blogs.map(blogcard =><BlogCard key={blogcard._id} blogcard={blogcard} ></BlogCard>)
    }
</div>
</div>
</section>
    );
};

export default Blogs;






