import React from 'react';
import BlogItem from './BlogItem';
import './style.css';

const BlogList = ({blogs}) => (
	<div className="blogList-wrap">
		{blogs.map(blog=>(
			<BlogItem blog={blog} key={blog.id} />
			))}
	</div>
);

export default BlogList;

