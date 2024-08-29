import React, { useEffect, useState } from 'react';

const UserPage = async ({ params }) => {
	const fetchData = async () => {
		const id = params.userId;
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		const data = await response.json();
		console.log('Data', data);
		setData(data);
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			Name: {data?.name} <br />
			Email: {data?.email} <br />
			Address: {data?.address.street},{data?.address.city},{' '}
			{data?.address.zipcode} <br />
			Phone: {data?.phone} <br />
			Website: {data?.website} <br />
		</div>
	);
};

export default UserPage;
