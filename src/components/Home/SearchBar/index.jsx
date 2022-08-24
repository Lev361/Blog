import React from 'react';
import './style.css';

const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => (

	<div className="searchBar-wrap">
		<form onSubmit={formSubmit}>
			<input type="text"
			onChange={handleSearchKey}
			placeholder="Search by Category"
			value={value}
			/>
			{value && <span onClick={clearSearch}>X</span>}
			<button>Buscar</button>
		</form>
	</div>

);

export default SearchBar;