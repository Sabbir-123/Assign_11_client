import React from 'react';

const BlogCard = ({blogcard}) => {
    const {title, details} = blogcard
    return (
        <div>
            <article className="flex flex-col dark:bg-gray-900">
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{title}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{details}</h3>
	
				</div>
			</article>
         
        </div>
    );
};

export default BlogCard;


