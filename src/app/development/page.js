'use client';

import React, { useState } from 'react';
import Roulette from '@/components/spin/Roulette';

const page = () => {
	// const [name, setName] = useState('');
	// const [location, setLocation] = useState('Florida')

	const [data, setData] = useState({
		name: 'Russell',
		age: 37,
		location: 'Florida',
	});

	return (
		<div className=" min-h-screen flex flex-col items-center justify-center p-6 overflow-x-clip">
			<h1 className="text-5xl font-semibold">{`Hello ${
				data.name || 'there'
			}`}</h1>
			<input
				type="text"
				className="input input-bordered mt-4"
				value={data.name}
				onChange={(e) => setData({ ...data, name: e.target.value })}
			/>
			<h1 className="text-5xl font-semibold mt-4">{`Your age is ${
				data.age || '0'
			}`}</h1>
			<input
				type="text"
				className="input input-bordered mt-4"
				value={data.age}
				onChange={(e) => setData({ ...data, age: Number(e.target.value) })}
			/>
			{/* <Roulette /> */}
		</div>
	);
};

export default page;
