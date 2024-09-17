'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
	const router = useRouter();
	const [searchString, setSearchString] = useState('');

	const searchRestaurants = async (e) => {
		e.preventDefault();
		console.log('Searching...');
		if (searchString.length > 0) {
			const encodedSearchString = encodeURIComponent(searchString.trim());
			router.push(`search?query=${encodedSearchString}`);
		}
	};

	return (
		<form onSubmit={searchRestaurants} className="flex flex-row join">
			<input
				type="text"
				placeholder="Search for a Restaurant"
				className="join-item input input-bordered w-80"
				onChange={(e) => setSearchString(e.target.value)}
				value={searchString}
			/>
			<button type="submit" className="btn btn-secondary join-item">
				Search
			</button>
		</form>
	);
};

export default SearchForm;
