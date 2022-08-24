import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
	const [blogs, setBlogs] = useState(blogList);
	const [searchKey, setSearchKey] = useState('');

	// Search Submit
	const handleSearchSubmit=event=>{
		event.preventDefault();
		handleSearchResults();
	}

	// Search for blogs one category
	const handleSearchResults=()=>{
		const allBlogs=blogList;
		const filteredBlogs=allBlogs.filter(blog=>
			blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
		);

		setBlogs(filteredBlogs);
	};

	const handleClearSearch = () => {
		setBlogs(blogList);
		setSearchKey('');
	}


	return (
		<div>
			{/*Page Header*/}
			<Header />

			{/*Search Bar*/}
			<SearchBar 
				value={searchKey}
				clearSearch={handleClearSearch}
				formSubmit={handleSearchSubmit}
				handleSearchKey={(e) => setSearchKey(e.target.value)}
			/>

			{/*Blog List e Empty List*/}
			{!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
		</div>
	);
};

export default Home